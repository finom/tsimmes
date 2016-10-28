const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const watch = require('gulp-watch');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const lint = (file) =>
  gulp.src(file)
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .on('error', notify.onError('Error: <%= error.message %>'));

gulp.task('lint', () => lint('bala.js'));
gulp.task('lint-gulp', () => lint('gulpfile.js'));

gulp.task('uglify', () =>
  gulp.src('bala.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'))
    .on('error', notify.onError('Error: <%= error.message %>'))
);

gulp.task('default', ['lint', 'lint-gulp', 'uglify'], () => {
  watch('gulpfile.js', () => gulp.run(['lint-gulp']));
  watch('bala.js', () => gulp.run(['lint', 'uglify']));
});
