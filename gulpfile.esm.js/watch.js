import gulp from 'gulp'

import { copy } from './copy'

const watch = done => {
  gulp.watch(['packages/client/**/**/*.{js,css}']).on('change', copy)

  done()
}

export { watch }
