import { html } from '../html.js'
import { Movie } from '../movie/index.js'

const List = ({ movies }) => {
  const movieItems = movies.map(
    movie =>
      html`
        <li key=${movie.title}><${Movie} ...${movie} /></li>
      `
  )

  return html`
    <ul>
      ${movieItems}
    </ul>
  `
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  )
}

export { List }
