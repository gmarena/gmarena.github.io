'use strict';

// Dependencies (to be NPM installed)
var gulp = require('gulp'),
    sass = require('gulp-sass');

// Sass Compile
gulp.task('sass', function() {
    gulp.src('./_harp/_sass/main.scss')
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['./_harp/_sass/**']
        }))
        .pipe(gulp.dest('./_harp'));    
});

// Watch files
gulp.task('watch', function() {
    gulp.watch(['./_harp/_sass/main.scss'], ['sass']);
    gulp.watch(['./_harp/_sass/*/*.scss'], ['sass']);
});

// Run: gulp sass
gulp.task('compile', ['sass', 'watch']);