# VPS Tutorial

So far, this website has been hosted on a dynamic hostinc account. Now I've ordered a VPS (Virtual Private Server). Most common options are Static hosting; Dynamic hosting; VPS; Dedicated server or a Colocated server.

Dynamic hosting is pretty much the same as static hosting, but containing PHP and database support, mostly MySQL. With a colocated server, you have your own physical server, but when hardware is defective, you'll have to drive to the datacenter yourself. A dedicated server is pretty much the same thing, but with this, the hoster will take care of delivery and maintenance. A VPS is a dedicated server hosting various virtual machines, with a maximum of 5 in my case. You'll need a command-line interface (Putty) to install an operating system (Linux) and the rest of the server applications. The applications I need, you'll find below:

## Table of contents

* [VPS Reinstall](#vps-reinstall)
* [Console](#console)
* [Midnight Commander](#midnight-commander)
* [Nano](#nano)
* [Apache](#apache)
* [PHP](#php)
* [PostgreSQL](#postgresql)
* [Pure-FTPd](#pure-ftpd)

## VPS Reinstall

If there's an operating system on the VPS, this one has to be shutdown first. If you choose reimage, you'll get a list with available distributions. I chose Ubuntu 9.04 (Jaunty Jackalope). This tutorial will also be useful if you choose Debian. Maybe some files will be located elsewhere. This tutorial assumed you are logged in as root. If you aren't, some of the commands like `apt-get` can't be executed without putting `sudo` in front of it.

```bash
shutdown
reimage
# Choose
I wish to reinstall vpsxxx
# Remember password
boot
```

## Console

To login on the virtual machine, I'll change the password immediately, because the given password won't be easy to 
remember:

```bash
console
# Login with the acquired password
passwd
# Enter the new password twice
```

We can use the console to add new applications.

## Midnight Commander

With Midnight Commander you have an interface like Windows Explorer to browse through your files.

```bash
apt-get install mc
```

## Nano

Nano is a text editor that will come in handy when editing configuration files. It may be already installed. In Midnight Commander you can use Alt+4 to edit files.

```bash
apt-get install nano
```

## Apache

The web server.

```bash
apt-get install apache2
```

By default, Mod Rewrite isn't installed. With the default settings, `.htaccess` isn't supported:

```bash
a2enmod rewrite
```

To support `.htaccess`,`/etc/apache2/sites-available/default` has to be edited:

```apache
<virtualhost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www

    <directory>
        Options FollowSymLinks
        AllowOverride All
    </directory>

    <directory "/var/www">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </directory>

    ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/

    <directory "/usr/lib/cgi-bin">
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
```

## PHP

Dynamic websites require PHP. With PHPSysInfo you can view server specifications through your browser using an HTML or XML file. If an application uses too much memory, you can easily troubleshoot it with PHPSysInfo. How you can install other modules, like GD, you'll see further on in this article.

```bash
apt-get install php5
apt-get install phpsysinfo
```

## PostgreSQL

PostgreSQL is a database, MySQL's big brother, which you can use as well of course. However, in this tutorial I'll only explain PostgreSQL. I'll show how to add an user and a database too. You can use this user to login into PHPPgAdmin, the web interface of PostgreSQL. 

```bash
apt-get install postgresql
# Install databasemanager
apt-get install phppgadmin
# Create user
su - postgres
psql template1
CREATE USER tom WITH PASSWORD 'myPassword';
CREATE DATABASE jerry;
GRANT ALL PRIVILEGES ON DATABASE jerry to tom;
q
```

## Pure-FTPd

You can use a database to administrate user accounts for the FTP server (Pure-FTPd). This way you can create FTP accounts on your website too. You can choose `pure-ftpd` or other predefined packages, containing MySQL: `pure-ftpd-mysql`, or in my case, PostgreSQL:

```bash
apt-get install pure-ftpd-postgresql
```

If you've configured everything right, you can create a table `accounts` in your database, using PHPPgAdmin. And then use this table to create virtual FTP accounts:

```sql
CREATE TABLE accounts (
    id character varying(30) NOT NULL,
    group_id character varying(30) NOT NULL,
    home_dir character varying(200) NOT NULL,
    username character varying(30) NOT NULL,
    password character varying(50) NOT NULL,
    expired boolean DEFAULT false
);
```

To make the virtual accounts work, you need a normal account with the right privileges:

```bash
groupadd pureftpd
useradd -g pureftpd -d /var/www tom
chown pureftpd:tom /var/www
passwd tom
# Enter password
```

It's advisable to create a backup of the following files. First edit `/usr/local/pgsql/data/pg_hba.conf`:

```apache
local   all     postgres    ident                       sameuser
local   all     all         ident                       sameuser
host    all     all         127.0.0.1/32                md5
host    all     all         ::1/128                     md5
host    system  system      127.0.0.1 255.255.255.255   md5
local   all     all         ident                       sameuser
# host  all     all         127.0.0.1 255.255.255.255   md5 

# host  all     tronix      0.0.0.0 0.0.0.0             md5 
# host  sameuser all        0.0.0.0 0.0.0.0             md5 
# host  all     all         0.0.0.0 0.0.0.0             reject
```

Then `/etc/postgresql/8.3/main/postgresql.conf`:

```bash
listen_addresses = 'localhost'
# If you want other users to be able to login on your server, 
# you can enter the ip address of the server, or '*'
```

`/etc/pure-ftpd/db/postgresql.conf`:

```apache
PGSQLServer     localhost
PGSQLPort       5432
PGSQLUser       postgres
PGSQLPassword   xxx
PGSQLDatabase   swimmer_zone
PGSQLCrypt      md5
PGSQLGetPW      SELECT password FROM accounts WHERE username='L'
PGSQLGetUID     SELECT id FROM accounts WHERE username='L'
PGSQLGetGID     SELECT group_id FROM accounts WHERE username='L'
PGSQLGetDir     SELECT home_dir FROM accounts WHERE username='L'
```

`/etc/default/pure-ftpd-common`:

```apache
STANDALONE_OR_INETD=standalone
```

Pure-FTPd saves its settings in small files, the name of the file is the name of the setting and the contents are the value of this setting. You can create these files like below. To give everyone access only to their own home directory:

```bash
echo "yes" > /etc/pure-ftpd/conf/ChrootEveryone
```

You can enter home directories in the database. The following directive allows you to create them automatically, when they don't exist yet:

```bash
echo "yes" > /etc/pure-ftpd/conf/CreateHomeDir
```

Use the directive below to check permissions on files or directories:

```bash
ls -l /var/www
```

If the home directory is created, it also gets the right permissions `group_id` for groups, or `id` for users.
