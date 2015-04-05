'use strict';

// Dependencies (to be NPM installed)
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    staticPath = './public/js/';

gulp.task('javascript', function() {
    // Transform the regular node stream to gulp stream (buffered)
    var browserified = transform( function (filename) {
        var b = browserify({
            entries: filename,
            debug: true
        });
        return b.bundle();
    });

    return gulp.src(staticPath + 'src/main.js')
        .pipe(browserified)
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('../'))
        .pipe(gulp.dest(staticPath + 'js'));
});

// Watch files
gulp.task('watch', function() {
    gulp.watch([staticPath + 'src/*.js'], ['javascript']);
});
// Run: gulp sass
gulp.task('run', ['javascript', 'watch']);