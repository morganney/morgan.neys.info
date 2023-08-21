import Link from 'next/link'

export const metadata = {
  title: "Morgan Ney's Playlist",
}
export default function MusicLayout({ children }) {
  return (
    <>
      <section>
        <nav>
          <Link href="/" id="home">
            <span>MN</span>
          </Link>
        </nav>
        <h1>Playlists 📻</h1>
      </section>
      {children}
    </>
  )
}
