# Website

The home of the EPFL Hackers.

## Disclaimer

The source code for the website has been quite rushed. It does NOT represent the current state of Node.js best practices.
We'll hopefully teach you better practices during the workshops :)

## Setup

The configuration repository that contains our Facebook and MailChimp API keys is thus private.  
We haven't yet made possible to run the website without a local clone of that repository, but if you want to help with the website, free to [ping Romac on Twitter](https://twitter.com/_romac), and we'll figure something out.

You will need the following software to be able to run this website:

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org)
- [bower](http://bower.io): `npm install bower -g`
- [Node.js](http://nodejs.org)
- [Ruby 1.9+](https://www.ruby-lang.org/)
- [compass](http://compass-style.org/): `gem install compass`
- [foreman](https://github.com/ddollar/foreman): `gem install foreman`

Then open a console and enter the following commands:

    $ git clone https://github.com/HackEPFL/website.git
    $ cd website/
    $ npm install
    $ cd public/ && bower install && cd ..

### Development

    $ foreman start

The website should now be accessible at [http://localhost:5100]().

### Production
    
    $ compass compile -e production --force public/
    $ npm start

The website should now be accessible at [http://localhost:4000]().

## License

The source code is licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php).  
All artworks are licensed under the [Creative Commons BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/) license.  

[Entypo pictograms](http://www.entypo.com) by Daniel Bruce are licensed under the [Creative Commons BY-SA 3.9](http://creativecommons.org/licenses/by-sa/3.0/), the font is licensed under the [SIL Open Font License](http://scripts.sil.org/OFL).
