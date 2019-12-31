import { exec } from 'child_process'

const clean = () => {
  return exec('rm -rf public')
}

export { clean }
