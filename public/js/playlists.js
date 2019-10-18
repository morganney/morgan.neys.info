const youTubeHeightToWidthRatio = 0.5625
const resizeIframe = _.debounce((width, node) => {
  node.setAttribute('height', width * youTubeHeightToWidthRatio)
}, 250, { leading: true, trailing: true })

class YouTube extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.getElementById('you-tube')

    shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    const iframe = this.shadowRoot.querySelector('iframe')
    const song = document.getElementById(`${this.dataset.id}`)
    const rect = song.getBoundingClientRect()

    iframe.setAttribute('width', '100%')
    iframe.setAttribute('height', rect.width * youTubeHeightToWidthRatio)
    iframe.setAttribute('src', `https://www.youtube.com/embed/${this.dataset.id}`)

    window.addEventListener('resize', () => {
      resizeIframe(song.getBoundingClientRect().width, iframe)
    }, false)
  }
}
class SongDetails extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const template = document.getElementById('song-details')

    shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    this.shadowRoot.querySelector('details').addEventListener('toggle', evt => {
      const detail = evt.target

      if (!detail.dataset.opened) {
        const youtube = document.createElement('you-tube')

        youtube.setAttribute('data-id', this.id)
        detail.appendChild(youtube)
        detail.dataset.opened = true
      }
    }, false)
  }
}

customElements.define('you-tube', YouTube)
customElements.define('song-details', SongDetails)
