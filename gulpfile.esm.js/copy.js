import gulp from 'gulp'
import log from 'fancy-log'

const copy = file => {
  const dest = gulp.dest('./public')

  if (typeof file === 'string') {
    const base = /assets/.test(file) ? 'assets' : 'src'

    log(`copying file: ${file}`)

    return gulp.src(file, { base: `packages/client/${base}` }).pipe(dest)
  }

  return gulp.src(['./packages/client/assets/**/*', './packages/client/src/**/*.js']).pipe(dest)
}

export { copy }
