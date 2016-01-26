Leadformance 2015 website 
===========
This is the repo for the new website aka website 2.0 

![npm](https://img.shields.io/badge/npm-2.14.3-brightgreen.svg)
![node](https://img.shields.io/badge/node-4.1.0-brightgreen.svg)
![deps](https://img.shields.io/badge/dependencies-uptodate-brightgreen.svg)
![gulp](https://img.shields.io/badge/gulp-3.9.0-brightgreen.svg)
![version](https://img.shields.io/badge/version-0.0.1-orange.svg)

####LOOK AT THE RESULT : [![demo](https://img.shields.io/badge/see-demo-red.svg)](http://leadformance.github.io/Website-2.0/)

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

####Flexboxgrid
[flexboxgrid.com](http://flexboxgrid.com)

The sass version
[https://github.com/kristoferjoseph/flexboxgrid/](https://github.com/kristoferjoseph/flexboxgrid/tree/sass)

Grid based on the `flex` display property.

Note that this grid core code has been modified here. That's why it is not in vendors/.