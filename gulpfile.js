var gulp = require("gulp");
    uglify = require("gulp-uglify");
    rename = require("gulp-rename");
    sass = require('gulp-sass');


gulp.task("scripts", function(){
    gulp.src(["assets/js/**/*.js","!assets/js/**/*.min.js"])
    .pipe(rename({suffix:".min"}))
    .pipe(uglify())
    .pipe(gulp.dest("assets/js"));
})

gulp.task('scss', function () {
    gulp.src(['assets/scss/**/*.scss', "!assets/scss/**/*.min.scss"])
    .pipe(rename({suffix:".min"}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./assets/css'));
  });

gulp.task("watch", function() {
    gulp.watch("assets/js/**/*.js", ["scripts"])
    gulp.watch("assets/scss/**/*.scss", ["scss"])
})

gulp.task("default", ["scripts", "scss", "watch"]);