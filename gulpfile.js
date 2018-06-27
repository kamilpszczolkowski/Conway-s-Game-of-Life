var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var source = 'scss/**/*.scss';
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src(source)
        .pipe(sourcemaps.init())
        .pipe(sass({
                errLogToConsole: true,
                outputStyle: 'expanded'
            })
                .on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
        ;
});

gulp.task('watch', function () {
    browserSync.init({
        server: ""
    });
    gulp.start('sass');
    gulp.watch(source, ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});