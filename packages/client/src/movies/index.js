import { ReactDOM } from 'https://unpkg.com/es-react@16.12.0'

import { html } from './html.js'
import { List } from './list/index.js'

const Movies = () => {
  const movies = [
    {
      title: 'TODO',
      category: 'work'
    }
  ]

  return html`
    <${List} movies=${movies} />
  `
}

ReactDOM.render(
  html`
    <${Movies} />
  `,
  document.getElementById('movies')
)
