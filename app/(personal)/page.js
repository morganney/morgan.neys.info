'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const Gol = dynamic(() => import('./components/gol/module.js'), { ssr: false })

export default function Home() {
  return (
    <>
      <h1>
        <code>morgan.neys.info</code>
      </h1>
      <div className={styles.grid}>
        <div>
          <p>
            Hi, you&apos;ve reached my personal website. I&apos;m a husband, father and{' '}
            <Link href="/resume">software engineer</Link> originally from the San
            Francisco Bay Area and now residing in Texas.
          </p>
          <p>
            When I&apos;m not spending time with my <Link href="/family">family</Link>, I
            enjoy working on my <a href="https://github.com/morganney">GitHub</a>{' '}
            projects, or listening to <Link href="/music">music</Link> while I exercise.
            At times I&apos;ve been compelled to do some{' '}
            <a href="https://github.com/knightedcodemonkey/metrics">writing</a>. I&apos;m
            a realist who hopes for{' '}
            <a href="https://www.thevenusproject.com/resource-based-economy/">change</a>{' '}
            and am in awe of the{' '}
            <a href="https://en.wikipedia.org/wiki/Riemann_hypothesis">profound</a>.
          </p>
          <blockquote className={styles.blockquote}>
            <p>
              And now these three remain: faith, hope and love. But the greatest of these
              is love.
            </p>
            <footer>
              1 Corinthians 13:13 <cite>NIV</cite>
            </footer>
          </blockquote>
        </div>
        <div id="gol">
          <Gol />
        </div>
      </div>
    </>
  )
}
