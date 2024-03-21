import Link from 'next/link'

export const metadata = {
  title: "Morgan Ney's Playlist",
}
export default function MusicLayout({ children }) {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link href="/">
              <h1>
                <code>morgan.neys.info</code>
              </h1>
            </Link>
          </li>
          <li>
            <h2>playlist</h2>
          </li>
        </ol>
      </nav>
      {children}
    </>
  )
}
