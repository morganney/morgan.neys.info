import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Morgan Ney',
  description:
    'Personal website of Morgan Ney, a husband, father, and web developer originally from the San Francisco Bay Area and now residing in Texas.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script>
        {`
          import('https://esm.sh/lights-out@1.0.0-alpha.3').then(({ LightsOut }) => {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            const darkMode = localStorage.getItem('theme') === 'dark' || mql.matches;
            const lightsOut = new LightsOut({
              filterSelectors: [
                ...LightsOut.defaultFilterSelectors,
                '#gol span',
              ],
            });

            document.documentElement.classList.toggle('dark', darkMode);
            mql.addEventListener('change', (e) => {
              document.documentElement.classList.toggle('dark', e.matches);
              localStorage.setItem('theme', e.matches ? 'dark' : 'light');
              lightsOut.toggle(e.matches);
            });
            lightsOut.toggle(darkMode);
          });
      `}
      </Script>
      <body className={inter.className}>
        <main>{children}</main>
        <footer>
          <address>
            <a href="tel:+19035214816">
              <span>(903) 521-4816</span>
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
