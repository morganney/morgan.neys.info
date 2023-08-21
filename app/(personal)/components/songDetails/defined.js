import { SongDetails } from './module.js'

const define = async () => {
  if (!customElements.get('song-details')) {
    customElements.define('song-details', SongDetails)
  }

  const ctor = await customElements.whenDefined('song-details')

  return ctor
}

export default await define()
