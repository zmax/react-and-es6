var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
// var rename = require('gulp-rename');

gulp.task('build', function() {
    return browserify({
        entries: './src/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    // .pipe(source('index.js'))
    // .pipe(rename('index.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('watch', ['build'], function() {
    livereload.listen();
    gulp.watch('./src/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
