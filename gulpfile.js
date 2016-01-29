var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var processhtml = require('gulp-processhtml');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var scsslint = require('gulp-scss-lint');
var jshint = require('gulp-jshint');
var del = require('del');
var http = require('http');
var st = require('st');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var argv = require('yargs').argv;
var fileinclude = require('gulp-file-include');
var ftp = require( 'vinyl-ftp' );

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var imageminSvgo = require('imagemin-svgo');
var header = require('gulp-header');

var size = require('gulp-size');
var count = require('gulp-count');
var notify = require("gulp-notify");

var ghPages = require('gulp-gh-pages');

var preprocessors = [
    autoprefixer,
    mqpacker
];

// using data from package.json
// for css output header generation
var pkg = require('./package.json');
var bannerCss = ['/*',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');
// for css output header generation
var secrets = require('./secret.json');
var bannerHtml = [
  '<!DOCTYPE HTML>',
  '<!-- ',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' -->',
  ''].join('\n');

  var realFavicon = require ('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicon', function(done) {
    realFavicon.generateFavicon({
        masterPicture: 'src/images/favicon.jpg',
        dest: 'dist/images/favicon',
        iconsPath: 'images/favicon',
        design: {
            ios: {
                pictureAspect: 'noChange',
                appName: 'Romain Petit'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#2b5797',
                onConflict: 'override',
                appName: 'Romain Petit'
            },
            androidChrome: {
                pictureAspect: 'noChange',
                themeColor: '#ffffff',
                manifest: {
                    name: 'Romain Petit',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: FAVICON_DATA_FILE
    }, function() {
        done();
    });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.


// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
    realFavicon.checkForUpdates(currentVersion, function(err) {
        if (err) {
            throw err;
        }
    });
});


gulp.task('default', [
    'images-png',
    'images-svg',
    'generate-favicon',
    'sass-lint',
    'move-fonts',
    'sass',
    'css',
    'jslint',
    'jsmin',
    'html',
    'css-size',
    'images-size',
    'move-manifest',
    'destroy-temp'
]);

var isVerbose = gutil.env.verbose
// To run in verbose mode : gulp --verbose

gulp.task('upload', [
    'deploy',
    'deploy-ftp'
]);

gulp.task('sass-lint', function(cb) {
    var ifWarnings = function(file) {
        return (file.scsslint.warnings);
    };

    var ifErrors = function(file) {
        return (file.scsslint.errors);
    };

    return gulp.src('src/sass/**/*.scss')
        .pipe(scsslint({
            'config': '.scss-lint.yml'
        }))
        .pipe(gulpif(ifWarnings,
            notify({
                message: "Go check <%= file.relative %>",
                title: "<%= file.scsslint.warnings %> Warnings to fix",
            })
        ))
        .pipe(gulpif(ifErrors,
            notify({
                message: "Check out <%= file.relative %>",
                title: "That's BAD"
            })
        ));

        cb(err);
});

gulp.task('fileinclude', ['sass-lint'], function() {
  gulp.src('src/*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('_htmlCombined/'));
});

gulp.task('images-png', ['fileinclude'], function(cb) {
    return gulp.src(['src/images/**/*.png', 'src/images/**/*.jpg'])
        .pipe(isVerbose ?
            size({
                title: "Png images original size "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            count('## png images detected')
        : gutil.noop())
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(isVerbose ?
            count('## png images minified')
        : gutil.noop())
        .pipe(gulp.dest('dist/images'))
        .pipe(isVerbose ?
            size({
                title: "Png images final size -- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                gzip: true,
                title: "Png images final size -- "
            })
        : gutil.noop());
    cb(err); // Callback showing errors, if any
});

gulp.task('images-svg', ['images-png'], function (cb) {
    return gulp.src('src/images/*.svg')
        .pipe(isVerbose ?
            size({
                title: "Svg images raw size ---- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            count('## svg images detected')
        : gutil.noop())
        .pipe(imageminSvgo()())
        .pipe(isVerbose ?
            count('## svg images minified')
        : gutil.noop())
        .pipe(gulp.dest('dist/images'))
        .pipe(isVerbose ?
            size({
                title: "Svg images final size -- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                gzip: true,
                title: "Svg images final size -- "
            })
        : gutil.noop());
    cb(err); // Callback showing errors, if any
});

gulp.task('move-fonts', ['images-svg'], function(cb) {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(isVerbose ?
            count('## fonts')
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                title: "Fonts final size ------- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                gzip: true,
                title: "Fonts final size ------- "
            })
        : gutil.noop());
    cb(err); // Callback showing errors, if any
});

gulp.task('sass', ['move-fonts'], function(cb) {
    return gulp.src('src/sass/*.scss')

        .pipe(sass({
            includePaths: require('node-bourbon').includePaths,
            errLogToConsole: true
        }))
        .on('error', notify.onError(function (error) {
           return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        }))
        .pipe(postcss(preprocessors))
        .pipe(gulp.dest('_cssCompiled'))
        .pipe(isVerbose ?
            count('## scss files compiled to css')
        : gutil.noop())
    cb(err); // Callback showing errors, if any
});

gulp.task('css', ['sass'], function(cb) {
    return gulp.src('_cssCompiled/*.css')
        .pipe(isVerbose ?
            count('## css files to concat')
        : gutil.noop())
        .pipe(postcss(preprocessors))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('_cssCombined/'))
        .pipe(minify())
        .pipe(rename('styles.min.css'))
        .pipe(header(bannerCss, { pkg : pkg } ))
        .pipe(gulp.dest('dist/css'));
    cb(err); // Callback showing errors, if any
});

gulp.task('jslint', ['css'], function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jsmin', ['jslint'], function(cb) {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(isVerbose ?
            size({
                title: "Js original size ------- "
            })
        : gutil.noop())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(isVerbose ?
            size({
                title: "Js final size ---------- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                gzip: true,
                title: "Js final size ---------- "
            })
        : gutil.noop());
    cb(err); // Callback showing errors, if any
});

gulp.task('html', ['jsmin'], function(cb) {
    return gulp.src('_htmlCombined/*.html')
        .pipe(isVerbose ?
            size({
                title: "Html original size ----- "
            })
        : gutil.noop())
        .pipe(processhtml())
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(header(bannerHtml, { pkg : pkg } ))
        .pipe(isVerbose ?
            size({
                title: "Html final size -------- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                gzip: true,
                title: "Html final size -------- "
            })
        : gutil.noop())
        .pipe(gulp.dest('dist/'))
        .pipe(livereload());
    cb(err); // Callback showing errors, if any
});

gulp.task('move-manifest', ['html'], function(cb) {
    return gulp.src('src/sass/vendor/README.md')
        // Todo : fill the manifest with infos from build
        // .pipe(header(bannerHtml, { pkg : pkg } ))
        .pipe(gulp.dest('dist/'))
    cb(err); // Callback showing errors, if any
});

gulp.task('move-sitemap', ['move-manifest'], function(cb) {
    return gulp.src('robots.txt')
        // Todo : fill the manifest with infos from build
        // .pipe(header(bannerHtml, { pkg : pkg } ))
        .pipe(gulp.dest('dist/'))
    cb(err); // Callback showing errors, if any
});

gulp.task('css-size', ['move-sitemap'], function (cb) {
    return gulp.src('dist/css/styles.min.css')
        .pipe(isVerbose ?
            size({
                showFiles: true,
                title: "Final total CSS size --- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                showFiles: true,
                gzip: true,
                title: "Final total CSS size --- "
            })
        : gutil.noop())
    cb(err); // Callback showing errors, if any
});

gulp.task('images-size', ['css-size'], function (cb) {
    return gulp.src('dist/images/*')
        .pipe(isVerbose ?
            count('## images files')
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                showFiles: false,
                title: "Final total img size --- "
            })
        : gutil.noop())
        .pipe(isVerbose ?
            size({
                showFiles: false,
                gzip: true,
                title: "Final total img size --- "
            })
        : gutil.noop());
    cb(err); // Callback showing errors, if any
});

gulp.task('destroy-temp', ['images-size'], function() {
        return del(['_cssCombined/', '_cssCompiled/', '_cssCombined/', '_htmlCombined']);
});

var d = new Date()

gulp.task('deploy', ['default'], function() {
  return gulp.src(['./dist/**/*', './dist/*'])
    .pipe(ghPages({
        message: "Deploy from Gulp on " + d + "."
    }));
});


gulp.task( 'deploy-ftp', ['deploy'], function () {


    var conn = ftp.create( {
       host:     secrets.servers.production.host,
       user:     secrets.servers.production.user,
       password: secrets.servers.production.password,
       parallel: 21,
       log: gutil.log
    } );

    var globs = [
        'dist/**'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( secrets.servers.production.remotepath ) ) // only upload newer files
        .pipe( conn.dest( secrets.servers.production.remotepath ) );

} );

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8080, done);
});

gulp.task('watch', ['server'], function() {
    livereload.listen({ basePath: 'dist' });

    var watcher = gulp.watch('src/**/*.{scss,css,js,html}', ['default']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
