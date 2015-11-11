var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');

gulp.task('less', function(){
  return gulp.src('./app/less/style.less')
  .pipe(less())
  .pipe(gulp.dest('./app/css/'))
  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./app/less/**.less', ['less']);
  gulp.watch('./app/*.html', ['html']);
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
  .pipe(livereload());
});

gulp.task('default', ['watch', 'html', 'less']);
