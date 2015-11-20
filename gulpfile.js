'use strict'

let gulp = require('gulp')
  , autoprefixer = require('autoprefixer')
  , postcss = require('gulp-postcss')
  , nested = require('postcss-nested')
  , atImport = require('postcss-import')

const paths = {
  build: './assets/build',
  css: './assets/styles/*.css'
}

gulp.task('default', () => {
  gulp.watch(paths.css, ['css'])
})

gulp.task('css', () => {
  let processors = [atImport, nested, autoprefixer]
  gulp.src(paths.css)
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.build))
})