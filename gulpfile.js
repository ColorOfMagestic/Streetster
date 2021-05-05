const {src, dest, watch, parallel, series } = require('gulp');
const plumber = require("gulp-plumber");
const less = require('gulp-less');
const sourcemap = require("gulp-sourcemaps");
const csso = require('gulp-csso');
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const del = require('del');

function cleanDist() {
    return del('dist')
}


function styles() {
    return src('app/less/style.less')
        .pipe(sourcemap.init())
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer({
                overrideBrowserslist: ['last 10 version'],
                grid: true
            })
          ]))
        .pipe(csso())
        .pipe(sourcemap.write("."))
        .pipe(rename("style.min.css"))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function watching() { 
    watch(['app/less/**/*.less'], styles);
    watch(['app/js/**/*.js','!app/js/main.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server : {
            baseDir: "app/"
        },
        browser: 'firefox',
    });
}

function scripts() {
    return src([
    'app/js/*.js'
    ]) 
    .pipe(concat('main.min.js'))
    .pipe(uglify())  
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())

}

function createWebp() {
    return src('app/img/**/*.{jpg,png,svg}')
    .pipe(webp())
    .pipe(dest('app/img'))
}

function images() {
    return src('app/img/**/*.{jpg,png,svg,webp}')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/img'))
}


function build() {
    return src([
        'app/css/style.min.css',
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}


exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.webp = createWebp;
exports.images = images;
exports.cleanDist = cleanDist;


exports.build = series(cleanDist, images, createWebp, build);
exports.default = parallel(styles, scripts, browsersync, watching);

