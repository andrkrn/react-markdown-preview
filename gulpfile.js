var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('css', function () {
  return gulp.src('src/css/*.css')
    .pipe(watch('src/css/*.css'))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['webserver', 'css'])
