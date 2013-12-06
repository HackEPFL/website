# Hackers at EPFL 2.0

The new version of [our website](https://hackersatepfl.com).  

This repository only contains static files. Once we'll be happy with the new design, we'll integrate it into our [existing Node.js app](https://github.com/hackepfl/website).

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## Quickstart

1. Fork the repository, and rename it.
2. git clone https://github.com/you/hackepfl-redesign
3. Run `bower install` to install the latest version of Foundation

Then when you're working on your project, just run the following command:

```bash
compass watch
```

And you're set!

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here
