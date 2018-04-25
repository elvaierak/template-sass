const gulp = require('gulp'),
      sass = require('gulp-sass'),
      rm = require('gulp-rm'),
      browserSync = require('browser-sync').create()

const blobs = {
  sass: 'src/sass/**/*.sass',
  css: 'src/css/**/*.css',
  html: 'src/**/*.html'
}

gulp.task('style:clean', () => {
  return gulp.src(blobs.css, { read: false })
    .pipe(rm())
})

gulp.task('style:bundle', () => {
  return gulp.src(blobs.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
})

gulp.task('watch', () => {
  browserSync.init({
    server: './src'
  })
  
  gulp.watch(blobs.sass,
             gulp.series('style:clean', 'style:bundle'))
  
  gulp.watch(blobs.sass).on('change', browserSync.reload)
  gulp.watch(blobs.html).on('change', browserSync.reload)
})
