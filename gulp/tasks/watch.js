const gulp = require('gulp'),
      watch = require('gulp-watch'),
      browswerSync = require('browser-sync').create();

gulp.task('watch', function(){

  browswerSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    browswerSync.reload();
  })

  watch('./app/assets/**/*.css', function(){
    gulp.start('cssInject');
  })
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browswerSync.stream());
});
