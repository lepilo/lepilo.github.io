var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('concat', function() {
  return gulp.src('js/src/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('js/build/'));
});
gulp.task('uglify', function (cb) {
  pump([
        gulp.src('js/build/script.main.js'),
        uglify(),
        gulp.dest('js/build/script.min.js')
    ],
    cb
  );
});

gulp.task('default', ['concat', 'uglify'])