import { getBasePath } from '../util.js'

const setupYouTube = async () => {
  const [html, css] = await Promise.all([
    fetch(`${getBasePath()}youTube/template.html`).then(resp => resp.text()),
    fetch(`${getBasePath()}youTube/styles.css`).then(resp => resp.text()),
  ])
  const parser = new DOMParser()
  const template = parser.parseFromString(html, 'text/html').querySelector('template')
  const style = document.createElement('style')

  style.textContent = css
  template.content.prepend(style)

  return class YouTube extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })

      shadow.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
      const iframe = this.shadowRoot.querySelector('iframe')

      iframe.setAttribute('src', `https://www.youtube.com/embed/${this.dataset.id}`)
    }
  }
}

export const YouTube = await setupYouTube()
