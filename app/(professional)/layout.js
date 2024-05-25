import './globals.css'

export const metadata = {
  title: 'Morgan Ney - Resume - Software Engineer',
  description:
    'Resume of software engineer Morgan Ney. Experienced in JavaScript, Node.js, and general web development. Specialized in front-end development and JavaScript build toolchains.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
