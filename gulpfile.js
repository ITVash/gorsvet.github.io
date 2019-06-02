var gulp = require('gulp');
var bs = require('browser-sync');
var less = require('gulp-less');

gulp.task('less', () => {
  return gulp.src('./app/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', () => {
  gulp.watch('app/less/style.less', 'less');
});

gulp.task('serv', () => {
  bs({
    server: {
      baseDir: './app'
    },
    notify: false
  });
  gulp.watch('./app/less/style.less', gulp.series('less'));
  gulp.watch('app/*.html').on('change', bs.reload);
});
