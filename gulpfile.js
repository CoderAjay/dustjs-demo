var gulp = require('gulp');
var dust = require('gulp-dust');
var concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src('dust/*.dust')
               .pipe(dust())
               .pipe(concat('all-template.js'))
               .pipe(gulp.dest('./public/templates'));
});
