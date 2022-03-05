# Aurora VPS

## Table of Contents

* [Introduction](#introduction)
* [Web Server](#web-server)
  * [FTP Server](#ftp-server)
  * [PHP](#php)
  * [PHPpgAdmin](#phppgadmin)
  * [Apache Config](#apache-config)
  * [PHPSysInfo](#phpsysinfo)
  * [Cronjobs](#cronjobs)
* [Mail Server](#mail-server)
  * [Postfix](#postfix)
  * [Dovecot](#dovecot)
  * [RoundCube](#roundCube)
* [Todo](#todo)
* [To Conclude](#to-conclude)

## Introduction

This article describes the setup of a server on the new Aurora cloud. After creating an instance, you can mount an image to a virtual setup disk, I chose the Debian 7 (Wheezy) image. When installing, you can choose between a couple of templates. I chose Webserver; SQL-server; Fileserver and system components. The fileserver didn't seem to be necessary, because first off we have to install an FTP server. Then we can upload the files of the website.

I've never installed a mail server before, so this part can contain some inconsistencies. I'll use *swimmer.zone* as default domain, evidently this has to be substituted with your domain, just like the rest of this article. It may be useful to restart the server between operations, to see errors right away, when you can still use them.

## Web Server

I wrote this article, because the setup of a web server can take a lot of time, mostly because every component has its own configuration files which have to be edited. Some may easily drown in this pile of information, just like myself. So I wrote it mostly for myself as some sort of documentation of the needed steps. It was a small effort to write this in a *wiki*-like shape for this tutorial. Installing a web server is not a frequent task, so it's easy to forget.

### FTP Server

Setting up an FTP server, add an user and give this user permissions to write the right directories. The files can't be uploaded yet though, they won't be interpreted as PHP files but as plain text, so sensitive data can be released.

```bash
su - root
# Enter password twice to login as root
apt-get install pure-ftpd
groupadd pureftpd
useradd -g pureftpd -d /var/www yftp
chown yftp /var/www
passwd yftp
# Enter password twice for the FTP account
```

### PHP

So now we install PHP, to parse the files the right way. Now we can upload the PHP files. Because we chose the Web server and SQL server in the pre-install, Apache and PostgreSQL are already installed. PHP automatically installs its dependencies to PostgreSQL.

```bash
apt-get install php5
```

### PHPpgAdmin

To add and administrate databases, we install PHPpgAdmin as a web interface for PostgreSQL. Then we log in on the postgres console to add an user.

```bash
apt-get install phppgadmin
su - postgres

psql template1

ALTER USER postgres WITH PASSWORD '***';
CREATE USER ysql WITH PASSWORD '***';
CREATE DATABASE ysql_nl;
GRANT ALL PRIVILEGES ON DATABASE ysql_nl TO ysql;
```

Ctrl+D to leave the postgres console. Because we are still logged in as user 'postgres', we have to return to user 'root' to execute the next steps. Now we have to find a couple of configuration files and add or edit the following lines:

```bash
su - root

find / -name "pg_hba.conf"
nano /etc/postgresql/9.1/main/pg_hba.conf

# FILE ########################
    # Database administrative login by Unix domain socket
    local   all     postgres                            peer
    # TYPE\tDATABASE\tUSER\t\tADDRESS\t\t\t\tMETHOD
    # "local" is for Unix domain socket connections only
    local   all     all                                 trust
    # IPv4 local connections:
    host    all     all     127.0.0.1/32                trust
    # IPv6 local connections:
    host    all     all     ::1/128                     trust
    host    all     ysql    127.0.0.1/32                trust
    host    system  system  127.0.0.1 255.255.255.255   md5
###############################

find / -name "postgresql.conf"
nano /etc/postgresql/9.1/main/postgresql.conf

# FILE ########################
    listen_addresses = 'localhost'
    # If you want to let other users login on the server, 
    # you can enter the server ip, or '*'
###############################
```

It's possible you get a 403 page when trying to login on [https://\[ip address\]/phppgadmin/](https://\[ip address\]/phppgadmin/) so we're going to prevent that:

```bash
nano /etc/apache2/conf.d/phppgadmin

# Remove comment character "allow from all"

/etc/init.d/apache2 restart

nano /etc/phppgadmin/config.inc.php

# FILE ########################
    $conf['extra_login_security'] = false;
###############################
```

### Apache config

In Apache we use different virtual hosts, these can be spread out in different files, if they are in the `sites-enabled` directory. You can find this in `/etc/apache2`. In our `.htaccess` files, *Rewrite Engine* is used, so we have to enable this in `mods-enabled`. The files are already available in the `mods-available` directory, so we only have to create a *symlink*.

```bash
# Example configuration:

# FILE ########################
    <virtualhost *:80>
        ServerAdmin webmaster@localhost
        # ServerName www.swimmer.zone

        DocumentRoot /var/www
        <directory>
            Options FollowSymLinks
            AllowOverride None
        </directory>
        
        <directory "/var/www">
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
        </directory>

        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
        <directory "/usr/lib/cgi-bin/">
            AllowOverride None
            Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
            Order allow,deny
            Allow from all
        </directory>

        ErrorLog /var/log/apache2/error.log

        # Possible values include: debug, info, notice, warn, error, crit,
        # alert, emerg.
        LogLevel warn

        CustomLog /var/log/apache2/access.log combined

        Alias /doc/ "/usr/share/doc/"
        <directory "/usr/share/doc">
            Options Indexes MultiViews FollowSymLinks
            AllowOverride None
            Order deny,allow
            Deny from all
            Allow from 127.0.0.0/255.0.0.0 ::1/128
        </directory>
    </virtualhost>
###############################

# Symlink:
ln -s /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/rewrite.load

/etc/init.d/apache2 restart
```

### PHPSysInfo

To monitor our system through a web interface, we install PHPSysInfo and create a *symlink* to make it available to the outside:

```bash
apt-get install phpsysinfo

mkdir /var/subdomains/phpsysinfo.swimmer.zone
cd /usr/share/phpsysinfo
cp -rf * /var/subdomains/phpsysinfo.swimmer.zone
```

### Cronjobs

For optional cronjobs I use a single PHP file that's executed every hour. In the PHP file is determined which tasks have to be executed at that given time.

```bash
crontab -e

# FILE ########################
55 * * * * php /var/www/execute.php
###############################
```

## Mail server

To make our VPS function as a mail server, we have to install three packages, first Postfix for the SMTP protocol. Then Dovecot for the POP3 protocol and then RoundCube to access our e-mail through a web interface. This is still experimental, so it wouldn't hurt to make a snapshot of the system, when this option is available.

### Postfix

Installation of Postfix, for this a couple of configuration files have to be edited. Some of the lines have to be added and if a file doesn't exist already, it has to be created. At the end, `virtual.db` has to be edited or created and Postfix has to be restarted.

```bash
apt-get install postfix
# Internet site as configuration
# swimmer.zone as hostname

# controle:
telnet localhost 25

nano /etc/postfix/main.cf

# FILE ########################
    myhostname = mail.swimmer.zone
    mydomain = swimmer.zone

    inet_protocols = ipv4
    inet_interfaces = all
    mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
    mynetworks = 127.0.0.0/8
    home_mailbox = Maildir/
    myorigin = $mydomain
    mynetworks_style = host
    smtpd_sasl_auth_enable = yes
    smtpd_sasl_local_domain =
    smtpd_recipient_restrictions = permit_mynetworks,permit_sasl_authenticated,reject_unauth_destination
    smtpd_sasl_security_options = noanonymous
    smtpd_tls_security_level = may
    smtpd_tls_loglevel = 1
    smtpd_tls_session_cache_timeout = 3600s
    smtpd_tls_session_cache_database = btree:/var/spool/postfix/smtpd_tls_cache
    smtpd_tls_auth_only = no
    smtpd_delay_reject = yes
    smtpd_helo_required = yes
    smtpd_hard_error_limit = 20
    smtpd_tls_mandatory_ciphers = high
    # broken_sasl_auth_clients = yes
    # tls_random_source = dev:/dev/urandom
    # default_destination_concurrency_limit = 5
    # disable_vrfy_command = yes
    # queue_directory = /var/spool/postfix
    # mail_owner = postfix
    # data_directory = /var/lib/postfix
    # header_checks = regexp:/etc/postfix/header_checks
    # body_checks = regexp:/etc/postfix/body_checks
    virtual_alias_maps = hash:/etc/postfix/virtual
###############################

# nano /etc/postfix/body_checks

# FILE ########################
    # /^(|[^&gt;].*)example.com/ REJECT
###############################

# nano /etc/postfix/header_checks

# FILE ########################
    # /^From:.*&lt;#.*@.*&gt;/ REJECT
    # /^Return-Path:.*&lt;#.*@.*&gt;/ REJECT
###############################

nano /etc/postfix/virtual

# FILE ########################
    ****@swimmer.zone swimmer
    ****@swimmer.zone root
###############################

postmap /etc/postfix/virtual

/etc/init.d/postfix restart

# Create system users and directory for e-mails
useradd -m swimmer-s /sbin/nologin
passwd swimmer

mkdir /home/swimmer/Maildir
chown swimmer /home/swimmer/Maildir
chmod -R 700 /home/swimmer/Maildir
```

### Dovecot

Install Dovecot and again, edit some configuration files:

```bash
apt-get install dovecot-common
# apt-get install dovecot-imapd
apt-get install dovecot-pop3d
apt-get install dovecot-lmtpd

nano /etc/dovecot/dovecot.conf

# FILE ########################
    # Protocols we want to be serving.
    protocols = pop3 lmtp # imap
###############################

nano /etc/dovecot/conf.d/10-auth.conf

# FILE ########################
    disable_plaintext_auth = no
    auth_mechanisms = plain login
###############################

nano /etc/dovecot/conf.d/10-mail.conf

# FILE ########################
    mail_location = maildir:~/Maildir
###############################

nano /etc/dovecot/conf.d/10-master.conf
# find that section and make it look like:

# FILE ########################
    # Postfix smtp-auth
    unix_listener /var/spool/postfix/private/auth {
        mode = 0666
        user = postfix
        group = postfix
    }
###############################

/etc/init.d/dovecot restart
```

### RoundCube

First the pgsql package to prevent Roundcube from installing MySQL as a dependency.

```bash
apt-get install roundcube-pgsql
apt-get install roundcube

mkdir /var/subdomains/roundcube.swimmer.zone
cd /usr/share/roundcube
cp -rf * /var/subdomains/roundcube.swimmer.zone

nano /etc/roundcube/main.inc.php

# FILE ########################
    $rcmail_config['default_host'] = 'localhost';
    $rcmail_config['default_port'] = 110;
    $rcmail_config['imap_auth_type'] = NULL;

    $rcmail_config['smtp_server'] = 'mail.swimmer.zone';
    $rcmail_config['smtp_port'] = 25;
    $rcmail_config['smtp_user'] = '****@swimmer.zone';
    $rcmail_config['smtp_pass'] = '********';
###############################

nano/etc/roundcube/debian-db.php

# FILE ########################
    $dbuser = 'roundcube';                                                      
    $dbpass = '********';                                                      
    $basepath = '';                                                           
    $dbname = 'roundcube';                                                   
    $dbserver = '';                                                         
    $dbport = '';                                                          
    $dbtype = '';
###############################
```

Setting up a mail server brought me a lot of trouble, so while debugging, it's possible I forget documenting some of the steps. Below a couple of steps which may be useful. In `/var/log/roundcube/errors` errors can be found and these can lead to `/var/log/auth.log`, `/var/log/mail.log`, `/var/log/dovecot.log` or `/var/log/dovecot-deliver.log`. The last one and the second last one have to be added to `/etc/dovecot/dovecot.conf`. A summary of all configuration lines you can view with `dovecot -n`, my current setup is like this, pay special attention to the `auth_debug` section.

```bash
dovecot -n

# FILE ########################
    mail_location           = maildir:/var/mail/%d/%n
    protocols               = imap pop3
    listen                  = *

    mail_uid                = mailnull
    mail_gid                = mail
    first_valid_uid         = 26
    first_valid_gid         = 6
    last_valid_uid          = 0
    last_valid_gid          = 0

    log_path                = syslog
    syslog_facility         = mail
    auth_mechanisms         = plain
    auth_socket_path        = /var/run/dovecot/auth-userdb

    auth_debug              = yes
    auth_debug_passwords    = yes
    auth_verbose            = yes
    verbose_proctitle       = yes
    mail_debug              = yes
    log_path                = /var/log/dovecot.log
    info_log_path           = /var/log/dovecot-deliver.log

    mail_plugin_dir         = /usr/local/lib/dovecot
    postmaster_address      = postmaster@%d
    hostname                = %d
    sendmail_path           = /usr/local/sbin/exim
    lda_mailbox_autocreate  = yes
    lda_mailbox_autosubscribe = yes

    passdb {
        driver        = passwd
        #args          = /etc/passwd
    }

    userdb {
        driver        = passwd
        args          = /etc/passwd
    }

    protocol lda {
    }

    protocol pop3 {
        pop3_client_workarounds = outlook-no-nuls oe-ns-eoh
    }

    protocol imap {
        mail_plugins          = quota imap_quota antispam
        imap_client_workarounds = delay-newmail tb-extra-mailbox-sep tb-lsub-flags
    }
    ## - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    service auth {
        unix_listener auth-userdb {
            mode        = 0600
            user        = $mail_uid
            group       = $mail_gid
        }
    }

    service imap-login {
        inet_listener imap {
            port        = 143
        }
        inet_listener imaps {
            port        = 993
            ssl         = yes
        }
    }

    service pop3-login {
        inet_listener pop3 {
            port        = 110
        }
        inet_listener pop3s {
            port        = 995
            ssl         = yes
        }
    }
###############################
```

The settings above can help prevent the following notices: `IMAP Error. Wrong startup greeting (localhost:110)` (this can mean not the right listeners are configured). `IMAP Error. AUTHENTICATE PLAIN: Authentication failed.` (this one I solved by editing userdb and passdb). The last error I haven't been able to trace yet: `IMAP Error. Empty startup greeting (localhost:110)`.

Some problems can appear with Roundcube, because we copied the Roundcube directory to the web root. Some symlinks can be broken if they point to a relative path. In my case jQuery, jQuery UI and TinyMCE couldn't be loaded:

```bash
# To the directory /usr/share/javascript/jquery-ui, first make sure there's
# no symlink pointing to this, then you may create the target directory:
rm /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui
mkdir /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui
cp -rf * /var/subdomains/roundcube.swimmer.zone/plugins/jqueryui

# Then go to /usr/share/javascript/jquery
rm /var/subdomains/roundcube.swimmer.zone/programs/js
mkdir /var/subdomains/roundcube.swimmer.zone/programs/js
cp -rf * /var/subdomains/roundcube.swimmer.zone/programs/js

# And /usr/share/tinymce/www
rm /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce
mkdir /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce
cp -rf * /var/subdomains/roundcube.swimmer.zone/programs/js/tiny_mce
```

After following the steps above it has to be possible to login, though not the right identities are installed yet. So it's only possible to login as ****@localhost.

## Todo

1. Configure mail server: `wrong startup greeting (localhost:110)`
2. Configure databases
3. Make new snapshot when the system is configured the right way

## To Conclude

If we've executed all these steps, we have a working web server with PHP and PostgreSQL and maybe a mail server with protocols incoming and outgoing e-mail and a web interface to make it accessible.
