var gulp = require("gulp");
    uglify = require("gulp-uglify");
    rename = require("gulp-rename");
    sass = require('gulp-sass');
    autoprefixer = require("gulp-autoprefixer");
    plumber = require("gulp-plumber");
    browserSync = require("browser-sync");
    reload = browserSync.reload;


gulp.task("scripts", function(){
    gulp.src(["assets/js/**/*.js","!assets/js/**/*.min.js"])
    .pipe(plumber())
    .pipe(rename({suffix:".min"}))
    .pipe(uglify())
    .pipe(gulp.dest("assets/js"))
    .pipe(reload({stream:true}));
})

gulp.task('scss', function () {
    gulp.src(['assets/scss/**/*.scss', "!assets/scss/**/*.min.scss"])
    .pipe(rename({suffix:".min"}))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(reload({stream:true}));
  });

gulp.task("html", function() {
    gulp.src("**/*.html")
    .pipe(reload({stream:true}));
})

gulp.task("browser-sync", function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    })
})

gulp.task("watch", function() {
    gulp.watch("assets/js/**/*.js", ["scripts"])
    gulp.watch("assets/scss/**/*.scss", ["scss"])
    gulp.watch("**/*.html", ["html"])
})

gulp.task("default", ["scripts", "scss", "html", "browser-sync", "watch",]);