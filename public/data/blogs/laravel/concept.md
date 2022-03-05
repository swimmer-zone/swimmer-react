# Laravel

## Table of contents

* [Introduction](#introduction)
* [Web Server](#web-server)
* [FTP Server](#ftp-server)
* [Laravel Project](#laravel-project)

## Introduction

I set up a new VPS, this time with Laravel as framework and composer. Instead of Apache, I thought let's try Nginx now.

## Web Server

So, let's begin with a couple of commands to set up the LEMP stack on the VPS, I chose for a VPS based on Debian:

```bash
passwd
root
adduser swimmer
apt-get install nginx
systemctl enable nginx.service

apt-get install mariadb-server mariadb-client
mysql_secure_installation
```

At this point a couple of questions need to be answered:

```
Enter current password for root (enter for none): Just press the Enter
Set root password? [Y/n]: Y
New password: Enter password
Re-enter new password: Repeat password
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```

Restart MariaDB server and install PHP:

```bash
systemctl restart mariadb.service
apt install php-fpm php-common php-mbstring php-xmlrpc php-soap php-gd php-xml php-mysql php-cli php-mcrypt php-zip

nano /etc/php/7.0/fpm/php.ini

# Edit file
    memory_limit = 256M
    upload_max_filesize = 64M
    cgi.fix_pathinfo = 0
# /Edit file
```

## FTP Server

```bash
apt install vsftpd ftp
nano /etc/vsftpd.conf

# Edit file
    write_enable = YES
# /Edit file

systemctl restart vsftpd
```

## Laravel Project

Install composer and create a Laravel project:

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

cd /var/www
composer create-project laravel/laravel swimmer --prefer-dist
```

Update the virtual host and restart Nginx:

```bash
nano /etc/nginx/sites-available/laravel

# Edit file
    server {
        listen 80;
        listen [::]:80;
        root /var/www/public;
        index  index.php index.html index.htm;
        server_name  laravel.swimmer.zone;

        location / {
            try_files $uri $uri/ /index.php?$query_string; 
               }

        location ~ .php$ {
             try_files $uri = 404;
             fastcgi_split_path_info  ^(.+.php)(/.+)$;
             fastcgi_index            index.php;
             fastcgi_pass             unix:/var/run/php/php7.1-fpm.sock;
             include                  fastcgi_params;
             fastcgi_param   PATH_INFO       $fastcgi_path_info;
             fastcgi_param   SCRIPT_FILENAME $document_root$fastcgi_script_name;
        }
    }
# /Edit file

ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/

systemctl restart nginx.service
```
