const setupSongDetails = async () => {
  const [html, css] = await Promise.all([
    fetch('/songDetails/template.html').then(resp => resp.text()),
    fetch('/songDetails/styles.css').then(resp => resp.text()),
  ])
  const parser = new DOMParser()
  const template = parser.parseFromString(html, 'text/html').querySelector('template')
  const style = document.createElement('style')

  style.textContent = css
  template.content.prepend(style)

  return class SongDetails extends HTMLElement {
    constructor() {
      super()
      const shadow = this.attachShadow({ mode: 'open' })

      shadow.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
      this.shadowRoot.querySelector('details').addEventListener(
        'toggle',
        evt => {
          const details = evt.target

          if (details.open) {
            const youtube = document.createElement('you-tube')

            youtube.setAttribute('data-id', this.id)
            details.appendChild(youtube)
          } else {
            const youtube = this.shadowRoot.querySelector(
              `you-tube[data-id="${this.id}"]`
            )

            if (youtube) {
              youtube.remove()
            }
          }
        },
        false
      )
    }
  }
}

export const SongDetails = await setupSongDetails()
