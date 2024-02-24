import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'youtube-vid/styles'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Morgan Ney',
  description:
    'Personal website of Morgan Ney, a husband, father, and web developer originally from the San Francisco Bay Area and now residing in Texas.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <footer>
          <address>
            <a href="tel:+19038782665">
              <span>(903) 878-2665</span>
            </a>
            <a href="mailto:morganney@gmail.com">
              <span>morganney@gmail.com</span>
            </a>
            <span>432 CR 1236 Quitman, TX 75783</span>
          </address>
        </footer>
      </body>
    </html>
  )
}
