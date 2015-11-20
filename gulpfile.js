'use strict'

let gulp = require('gulp')
  , autoprefixer = require('autoprefixer')
  , postcss = require('gulp-postcss')
  , nested = require('postcss-nested')
  , atImport = require('postcss-import')
  , browserify = require('gulp-browserify')

const paths = {
  build: './assets/build',
  css: './assets/styles/*.css',
  js: './assets/js/*.js'
}

gulp.task('default', () => {
  gulp.watch(paths.css, ['css'])
  gulp.watch(paths.js, ['js'])
})

gulp.task('css', () => {
  let processors = [atImport, nested, autoprefixer]
  gulp.src(paths.css)
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.build))
})

gulp.task('js', () => {
  gulp.src(paths.js)
    .pipe(browserify())
    .pipe(gulp.dest(paths.build))
})