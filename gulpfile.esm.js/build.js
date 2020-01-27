import gulp from 'gulp'

import { copy } from './copy'
import { clean } from './clean'

const build = gulp.series(clean, copy)

export { build }
