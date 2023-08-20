import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <nav>
        <Link href="/" id="home">
          <span>MN</span>
        </Link>
      </nav>
      <h1>Not Found ¯\_(ツ)_/¯</h1>
    </>
  )
}
