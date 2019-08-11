'use strict';
var gulp = require ('gulp');
var scss = require ('gulp-sass');

var  src = {
    scss: 'src/scss/*.scss',
    js: ['src/js/*.js', '!src/js/*.min.js']
};

gulp.task('scss', function () {
    return gulp.src(src.scss)
        .pipe(scss({"bundleExec": true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
    gulp.watch(src.scss, gulp.series(['scss']));
    gulp.watch(src.js, gulp.series(['minify']))
});

gulp.task('default', gulp.series(['scss','watch']));
