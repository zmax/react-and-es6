var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task('build', function() {
    return browserify({
        entries: './src/app.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0', 'stage-1']})
    .bundle()
    .on('error', function(err) {
        console.error(err.message);
        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('watch', ['build'], function() {
    livereload.listen();
    // !! './src/...' is not working
    gulp.watch('src/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
