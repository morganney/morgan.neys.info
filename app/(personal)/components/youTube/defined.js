import { YouTube } from './module.js'

const define = async () => {
  if (!customElements.get('you-tube')) {
    customElements.define('you-tube', YouTube)
  }

  const ctor = await customElements.whenDefined('you-tube')

  return ctor
}

export default await define()
