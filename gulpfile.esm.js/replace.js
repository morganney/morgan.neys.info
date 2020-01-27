import gulp from 'gulp'
import greplace from 'gulp-replace'

const replace = () => {
  return gulp
    .src('./public/**/*.js')
    .pipe(greplace('es-react@16.12.0', 'es-react@16.12.0/dev'))
    .pipe(gulp.dest('./public'))
}

export { replace }
