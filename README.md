# personal-page
Source served on http://romainpetit.com - My personal page

# Contributing :
1. **Fork this repo**

   and stay on master branch 

1. **Install required gulp modules**

   `$ npm install`

    *Windows:*
    May require to run console as admin.

    *Mac:*
    Sudo may be required. `$ sudo npm install`
    
1. **Run a project build**
 
   `$ gulp`
   
1. Watch project modifications, use livereload and start a local server *(optional)*
 
   `$ gulp watch`
1. **Open the result in your browser**
   
   *Without local server* : `open dist/index.html`
   
   *With local server* : `open http://localhost:8080/`

1. **Open src/ as workspace in your IDE and make your changes**

1. **Run a project build**
 
   `$ gulp`   
   
   and watch result in browser. This is automatically triggered if you ran `$ gulp watch`
   
1. **Once changes are done deploy the result**

   `$ gulp deploy`  
   
1. **Commit your changes**

   
#Troubleshooting :

####If you want more details on the tasks being run, use
`$ gulp --verbose`

####You need to have Ruby installed. If not, run 
`$ npm install ruby-sass`
 
####Error during gulp lint task
You need to have the scss_lint ruby gem.

`sudo gem install scss_lint`

####Livereload not working
install the Livereload extension on your browser.
Turn it on on your tab, re-run `$gulp watch` and reload manually once.

# Dependencies : 

####Sanitize.scss
[https://www.npmjs.com/package/sanitize.scss](https://www.npmjs.com/package/sanitize.scss)
sanitize.css ported to sass

It is located in `src/sass/0-vendors/sanitize.scss` and called in `src/sass/app.scss` 
