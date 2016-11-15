const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
    return gulp.src('css/style.css')
        .pipe(sourcemaps.init())
          .pipe(autoprefixer({
              browsers: ['ie >=9', 'Chrome >= 28', 'ff >= 30', 'Opera >= 11', 'Safari >=4'],
              cascade: false
          }))
          .pipe(concat('style.min.css'))
          .pipe(cleanCSS())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('css'))
});
