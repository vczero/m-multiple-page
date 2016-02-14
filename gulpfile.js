/*
* 框架打包代码
*
* */
var gulp = require('gulp');
var uglify = require('gulp-uglify');

/**
 * 1)拷贝
 *
 * */
gulp.task('move2dist', function() {
  return gulp.src(['src/*/*'],{dot: true}).pipe(gulp.dest('dist'));
});


/**
 * 2)压缩JavaScript
 *
 * */
//压缩fast.js
gulp.task('min_fast', ['move2dist'], function() {
  gulp.src('dist/fast.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

//压缩UI组件
gulp.task('min_ui_mod', ['move2dist'], function() {
  gulp.src('dist/ui.mod/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/ui.mod/'));
});

//压缩核心代码
gulp.task('min_core', ['move2dist'], function() {
  gulp.src('dist/core/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/core/'));
});

//压缩公共
gulp.task('min_common', ['move2dist'], function() {
  gulp.src('dist/common/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/common/'));
});

//压缩第三方库
gulp.task('min_3rd', ['move2dist'], function() {
  gulp.src('dist/3rd/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/3rd/'));
});


//gulp.task('default', ['move2min', 'min_fast', 'min_ui_mod']);

gulp.task('default', ['move2dist', 'min_fast', 'min_ui_mod', 'min_core', 'min_common', 'min_3rd']);
