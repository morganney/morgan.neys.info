import Image from 'next/image'

import carnival from '../../../public/carnival-sm.webp'

import styles from './page.module.css'

const secsPerYear = 365 * 24 * 60 * 60
const getAge = birthday => {
  const secsAlive = (Date.now() - birthday.getTime()) / 1000

  return Math.floor(secsAlive / secsPerYear)
}

export default function Family() {
  return (
    <>
      <p>
        My family consists of my wife Trisha, and our three daughters, Hannah, Emma, and
        Rebecca. We also have three cats, two dogs, and around 30 chickens. Grandma and
        Grandpa live next door.
      </p>
      <ul className={styles.family}>
        <li>
          <article>
            <header>
              <h3>Hannah Lynn</h3>
            </header>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/carnival.webp"
                  media="(width > 600px)"
                />
                <source
                  type="image/jpeg"
                  srcSet="/carnival.jpeg"
                  media="(width > 600px)"
                />
                <Image
                  src={carnival}
                  srcSet="/carnival-sm.webp, /carnival-sm.jpeg"
                  alt="Picture of Hannah"
                  priority
                />
              </picture>
            </figure>
            <dl>
              <dt>Age</dt>
              <dd>{getAge(new Date('9/7/2014'))} ~ Virgo</dd>
              <dt>Favorite color</dt>
              <dd>Green</dd>
              <dt>Interests</dt>
              <dd>Horses, Books, Arts &amp; Crafts</dd>
            </dl>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>Emma Lee</h3>
            </header>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/carnival.webp"
                  media="(width > 600px)"
                />
                <source
                  type="image/jpeg"
                  srcSet="/carnival.jpeg"
                  media="(width > 600px)"
                />
                <Image
                  src={carnival}
                  srcSet="/carnival-sm.webp, /carnival-sm.jpeg"
                  className={styles.emma}
                  alt="Picture of Emma"
                />
              </picture>
            </figure>
            <dl>
              <dt>Age</dt>
              <dd>{getAge(new Date('1/1/2017'))} ~ Capricorn</dd>
              <dt>Favorite color</dt>
              <dd>Blue</dd>
              <dt>Interests</dt>
              <dd>Stuffed Animals, Electric Car, Legos</dd>
            </dl>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>Rebecca Grace</h3>
            </header>
            <figure>
              <picture>
                <source
                  type="image/webp"
                  srcSet="/carnival.webp"
                  media="(width > 600px)"
                />
                <source
                  type="image/jpeg"
                  srcSet="/carnival.jpeg"
                  media="(width > 600px)"
                />
                <Image
                  src={carnival}
                  srcSet="/carnival-sm.webp, /carnival-sm.jpeg"
                  className={styles.rebecca}
                  alt="Picture of Rebecca"
                />
              </picture>
            </figure>
            <dl>
              <dt>Age</dt>
              <dd>{getAge(new Date('5/2/2019'))} ~ Taurus</dd>
              <dt>Favorite color</dt>
              <dd>Rainbow</dd>
              <dt>Interests</dt>
              <dd>Emma, Hannah, Bedroom Toys</dd>
            </dl>
          </article>
        </li>
      </ul>
    </>
  )
}
