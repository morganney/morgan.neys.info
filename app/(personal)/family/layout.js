import Link from 'next/link'

export const metadata = {
  title: "Morgan Ney's Family",
}
export default function FamilyLayout({ children }) {
  return (
    <>
      <section>
        <nav>
          <Link href="/" id="home">
            <span>MN</span>
          </Link>
        </nav>
        <h1>Family 👨‍👩‍👧‍👧</h1>
      </section>
      {children}
    </>
  )
}
