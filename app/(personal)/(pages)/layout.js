import Link from 'next/link'

export default function PagesLayout({ children }) {
  return (
    <>
      <nav>
        <Link href="/" id="home">
          <span>MN</span>
        </Link>
      </nav>
      {children}
    </>
  )
}
