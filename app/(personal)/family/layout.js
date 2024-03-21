import Link from 'next/link'

export const metadata = {
  title: "Morgan Ney's Family",
}
export default function FamilyLayout({ children }) {
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
            <h2>family</h2>
          </li>
        </ol>
      </nav>

      {children}
    </>
  )
}
