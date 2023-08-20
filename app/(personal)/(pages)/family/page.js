'use client'

import dynamic from 'next/dynamic'
import styles from './page.module.css'

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '250px',
      }}
    >
      <span className="spinner"></span>
    </div>
  )
}
const WordCloud = dynamic(() => import('react-d3-cloud'), {
  ssr: false,
  loading: Loading,
})

export default function Family() {
  const core = [
    'Trisha',
    'Morgan',
    'Hannah',
    'Emma',
    'Rebecca',
    'Grandma',
    'Grandpa',
    'Love',
    'Family',
    'Friends',
    'Happiness',
    'Together',
  ]
  const words = [
    ...core,
    'Fun',
    'Smile',
    'Kayla',
    'Bugs',
    'Buddy',
    'Elle',
    'Cookie',
    'Pepper',
    'Chickens',
    'Poop',
    'Dolls',
    'Food',
    'Park',
    'Cabin',
    'TV',
    'Tablets',
    'Hugs',
    'Kisses',
    'Owie',
    'Sick',
    'Swim',
    'Games',
    'Church',
    'Share',
  ].map(w => ({
    text: w.toLowerCase(),
    value: core.includes(w) ? Math.random() * 17 + 15 : Math.random() * 17 + 10,
  }))

  return (
    <>
      <h1>Family 👨‍👩‍👧‍👧</h1>
      <p className={styles.para}>
        My family consists of my wife Trisha, and our three daughters, Hannah (9), Emma
        (6), and Rebecca (4). We also have three cats, two dogs, and about 36 chickens.
        Grandma and Grandpa live next door.
      </p>
      <div className={styles.wordCloud}>
        <WordCloud
          data={words}
          width={320}
          height={320}
          fontSize={d => d.value}
          fontWeight="bold"
          font="Roboto"
        />
      </div>
    </>
  )
}
