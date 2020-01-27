import { html } from '../html.js'

const Movie = ({ title, category }) => {
  return html`
    <article>
      <h3>${title}</h3>
      <h4>${category}</h4>
    </article>
  `
}

export { Movie }
