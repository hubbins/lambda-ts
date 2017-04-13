const gulp = require("gulp");
const zip = require('gulp-zip');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist"));
});

// zip depends on build
gulp.task("zip", ["build"], function () {
    return gulp.src("dist/*.js")
        .pipe(zip("lambda.zip"))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", [ "build", "zip" ]);
