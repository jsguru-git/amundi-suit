# Project

This project uses the following stack:

1. Symfony 3.4 for the API.
2. VueJS (with vuex and vue-router) for the SPA.

# Install

Download and install [Docker](https://docs.docker.com/install/) (>= 17.06) for your platform.

On Linux, you also have to install [Docker compose](https://docs.docker.com/compose/install/) (>= 1.14.0) as it does not come with by default. 
Also add your current user to the docker group and don't forget to logout/login from your current 
session.

You may now clone this project using:

```bash
$ git clone git@git.thecodingmachine.com:tcm-projects/amundi-suit.git
```

Go to the `src/web/` folder and copy/paste the file `.htaccess.dev` to a file named `.htaccess`.

Then, shutdown your local Apache and run:

```bash
$ docker login git.thecodingmachine.com:444
$ docker-compose up -d
```

Once donce, go to the `php-apache` container by running:

```bash
    $ docker-compose exec -u application php-apache bash
```

And run:

```bash
$ composer install
$ bin/console doctrine:schema:update --force
$ bin/console fos:user:create test test@mail.com test
$ yarn install && yarn run encore dev
$ yarn encore dev --watch
```

Last but not least, open your hosts (`/etc/hosts`) file and add the following lines :
    
    127.0.0.1   amundi-suit.localhost
    127.0.0.1   phpadmin.amundi-suit.localhost
    127.0.0.1   mail.amundi-suit.localhost
        
# Working with git

## Install git flow

Before going further, install git flow ([see the official documentation](https://github.com/nvie/gitflow/wiki/Installation)).

Once done, run:

```bash
$ git flow init
```

## Starting a new feature

First, update your local develop branch (status should be clean):
```bash
$ git pull origin develop
```

Then run :
```bash
$ git flow feature start yourfeaturename
```

# Candies

Go to the `php-apache` container by running:

```bash
$ docker-compose exec -u application php-apache bash
```

## Creating a database migration patch

You may now create a migration patch (it will detect changes in your entities):

```bash
$ bin/console doctrine:migrations:diff
```

**Important: removes anything in the drop function!**

Once you have finished working on your patch, you have to update your database using:

```bash
$ bin/console doctrine:migrations:migrate
```

## Clearing the cache

On development environment, run:

```bash
$ bin/console cache:clear
```

In production:

```bash
$ bin/console cache:clear --prod
```