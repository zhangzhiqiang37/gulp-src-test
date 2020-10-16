const gulp = require('gulp');
const gulpDebug = require('gulp-debug');

gulp.task('srcRelativeTest', function (cb) {
  gulp.src(['../src/*.js', '!../src/test1.js'])
    .pipe(gulpDebug());
  cb();
});
