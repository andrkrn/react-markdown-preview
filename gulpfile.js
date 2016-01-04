var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('sass', function () {
  return gulp.src('src/css/*.scss')
    .pipe(watch('src/css/*.scss'))
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['webserver', 'sass'])
