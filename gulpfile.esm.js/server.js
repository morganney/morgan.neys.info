import nodemon from 'gulp-nodemon'

const server = done => {
  const stream = nodemon({
    script: 'packages/server/src/index.js'
  })

  stream.on('start', () => {
    done()
  })
}

export { server }
