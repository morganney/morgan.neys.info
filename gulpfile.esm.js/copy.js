import gulp from 'gulp'
import log from 'fancy-log'
import replace from 'gulp-replace'
import gulpIf from 'gulp-if'

const copy = file => {
  const dest = gulp.dest('./public')
  const replacements = replace('es-react@16.12.0', 'es-react@16.12.0/dev')
  const isDev = process.env.NODE_ENV === 'development'

  if (typeof file === 'string') {
    const base = /assets/.test(file) ? 'assets' : 'src'

    log(`copying file: ${file}`)

    return gulp
      .src(file, { base: `packages/client/${base}` })
      .pipe(gulpIf(isDev, replacements))
      .pipe(dest)
  }

  return gulp
    .src(['./packages/client/assets/**/*', './packages/client/src/**/*.js'])
    .pipe(gulpIf(isDev, replacements))
    .pipe(dest)
}

export { copy }
