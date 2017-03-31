Symfony Live 2017 - Symfony Webpack demo app
===========================================

Pre-requisites
--------------

- Composer
- NPM

Installation
------------

```bash
$ git clone https://github.com/alOneh/sf-live-2017-symfony-webpack
$ cd sf-live-2017-symfony-webpack
$ composer install --no-interaction
$ npm install
```

Usage
-----

There is no need to configure a virtual host in your web server to access the application.
Just use the built-in web server:

```bash
$ php bin/console server:run
```

This command will start a web server for the Symfony application. Now you can
access the application in your browser at <http://localhost:8000>. You can
stop the built-in web server by pressing `Ctrl + C` while you're in the
terminal.

To start the Webpack Dev Server:

```bash
$ npm run watch
```

To build assets with Webpack:

```bash
$ npm run build
```

Advanced usage
--------------

This Webpack configuration is very simple, no configuration split between dev and prod env.
You can find an advanced configuration [here](https://github.com/alOneh/sf-live-2017-symfony-webpack/tree/webpack-advanced).

TODO
----
- [ ] Docker integration for Symfony and Webpack
