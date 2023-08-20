import './globals.css'

export const metadata = {
  title: 'Morgan Ney - Resume - Web Engineer',
  description:
    'Resume of web engineer Morgan Ney. Specializing in JavaScript, HTML, CSS, TypeScript, Node.js, Webpack, Rollup, Vite, Storybook, and GitHub Actions.',
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
