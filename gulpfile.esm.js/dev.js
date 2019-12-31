import gulp from 'gulp'

import { copy } from './copy'
import { clean } from './clean'
import { watch } from './watch'
import { server } from './server'

const dev = gulp.series(clean, copy, server, watch)

export { dev }
