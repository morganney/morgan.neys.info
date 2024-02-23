'use client'

import { useEffect } from 'react'
import styles from './page.module.css'

export default function Music() {
  useEffect(() => {
    const loadYtv = async () => {
      await import('youtube-vid/defined')
    }

    loadYtv()
  }, [])

  return (
    <>
      <p>
        For me nothing beats the 80s and 90s music. Today&apos;s music is soft on lyrics
        and is superficial. I&apos;m sure we all feel the same about the music we grew up
        on.
      </p>
      <section className={styles.songs} id="eighties">
        <h2>80s</h2>
        <ul className={styles.list}>
          <li>
            <youtube-vid id="kd9TlGDZGkI">
              <span slot="icon">🎸</span>
              <span slot="title">Walk of Life &mdash; Dire Straits</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="wJzNZ1c5C9c">
              <span slot="icon">🎹</span>
              <span slot="title">Keep on Loving You &mdash; REO Speedwagon</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="qQIO3pBFfXI">
              <span slot="icon">🎹</span>
              <span slot="title">In Too Deep &mdash; Genesis</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="FTQbiNvZqaY">
              <span slot="icon">🎸</span>
              <span slot="title">Africa &mdash; Toto</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="8Pa9x9fZBtY">
              <span slot="icon">🎸</span>
              <span slot="title">Sultans of Swing &mdash; Dire Straits (78)</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="s6TtwR2Dbjg">
              <span slot="icon">🎤</span>
              <span slot="title">Heaven &mdash; Bryan Adams</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="Epj84QVw2rc">
              <span slot="icon">🎵</span>
              <span slot="title">Come Undone &mdash; Duran Duran</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="xuZA6qiJVfU">
              <span slot="icon">🎸</span>
              <span slot="title">Drive &mdash; The Cars</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="MzGnX-MbYE4">
              <span slot="icon">🎸</span>
              <span slot="title">People Are People &mdash; Depeche Mode</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="mh8MIp2FOhc">
              <span slot="icon">🎸</span>
              <span slot="title">I&apos;ll Be There For You &mdash; Bon Jovi</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="4N1iwQxiHrs">
              <span slot="icon">🎸</span>
              <span slot="title">Your Love &mdash; The Outfield</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="wTP2RUD_cL0">
              <span slot="icon">🎸</span>
              <span slot="title">Money For Nothing &mdash; Dire Straights</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="AAZQaYKZMTI">
              <span slot="icon">🎸</span>
              <span slot="title">White Wedding &mdash; Billy Idol</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="WyF8RHM1OCg">
              <span slot="icon">🎸</span>
              <span slot="title">Here I Go Again &mdash; White Snake</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="VdphvuyaV_I">
              <span slot="icon">🎸</span>
              <span slot="title">Rebel Yell &mdash; Billy Idol</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="JIrm0dHbCDU">
              <span slot="icon">🎸</span>
              <span slot="title">Strangelove &mdash; Depeche Mode</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="YIHMPc6ZCuI">
              <span slot="icon">🎸</span>
              <span slot="title">So Far Away &mdash; Dire Straits</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="IGVZOLV9SPo">
              <span slot="icon">🎤</span>
              <span slot="title">Love Is A Battlefield &mdash; Pat Benatar</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="CBTOGVb_cQg">
              <span slot="icon">🎸</span>
              <span slot="title">Angel &mdash; Aerosmith</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="bDgOwX72fLI">
              <span slot="icon">🎹</span>
              <span slot="title">Mandolin Rain &mdash; Bruce Hornsby, The Range</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="kU8OJAOMbPg">
              <span slot="icon">🎵</span>
              <span slot="title">In Your Eyes &mdash; Peter Gabriel</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="pekhxxngQ3s">
              <span slot="icon">🎵</span>
              <span slot="title">No One Is To Blame &mdash; Howard Jones</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="Adw772km7PQ">
              <span slot="icon">🎵</span>
              <span slot="title">Back In The High Life Again &mdash; Steve Winwood</span>
            </youtube-vid>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
      <section className={styles.songs} id="nineties">
        <h2>90s</h2>
        <ul className={styles.list}>
          <li>
            <youtube-vid id="W05cPXpUHGI">
              <span slot="icon">🎸</span>
              <span slot="title">I Will Buy You A New Life &mdash; Everclear</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="EkwD5rQ-_d4">
              <span slot="icon">🎸</span>
              <span slot="title">Possum Kingdom &mdash; The Toadies</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="u1xrNaTO1bI">
              <span slot="icon">🎸</span>
              <span slot="title">Personal Jesus &mdash; Depeche Mode</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="AVYYpNaSs2Y">
              <span slot="icon">🎵</span>
              <span slot="title">All I Want &mdash; Toad The Wet Sprocket</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="-oqAU5VxFWs">
              <span slot="icon">🎤</span>
              <span slot="title">Mr. Jones &mdash; Counting Crows</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="gRYZijLZR-Q">
              <span slot="icon">🎸</span>
              <span slot="title">Jumper &mdash; Third Eye Blind</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="rE1oIhSgTgI">
              <span slot="icon">🎸</span>
              <span slot="title">How&apos;s It Going To Be &mdash; Third Eye Blind</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="8-r-V0uK4u0">
              <span slot="icon">🎸</span>
              <span slot="title">
                Bullet With Butterfly Winds &mdash; The Smashing Pumpkins
              </span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="LHQqqM5sr7g">
              <span slot="icon">🎸</span>
              <span slot="title">
                Undone &ndash;&ndash; The Sweater Song &mdash; Weezer
              </span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="MW6E_TNgCsY">
              <span slot="icon">🎸</span>
              <span slot="title">Santa Monica &mdash; Everclear</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="beINamVRGy4">
              <span slot="icon">🎸</span>
              <span slot="title">Semi-Charmed Life &mdash; Third Eye Blind</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="4aeETEoNfOg">
              <span slot="icon">🎸</span>
              <span slot="title">1979 &mdash; The Smashing Pumpkins</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="EqWRaAF6_WY">
              <span slot="icon">🎸</span>
              <span slot="title">My Hero &mdash; Foo Fighters</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="ENXvZ9YRjbo">
              <span slot="icon">🎸</span>
              <span slot="title">Say It A&apos;nt So &mdash; Weezer</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="lYBIRHi5-o8">
              <span slot="icon">🎸</span>
              <span slot="title">Down &mdash; 311</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="gYdlqjiQPAc">
              <span slot="icon">🎸</span>
              <span slot="title">Low &mdash; Cracker</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="A-oh-tP6RvA">
              <span slot="icon">🎤</span>
              <span slot="title">Barely Breathing &mdash; Duncan Sheik</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="PBwAxmrE194">
              <span slot="icon">🎤</span>
              <span slot="title">C.R.E.A.M. &mdash; Wu&ndash;Tang Clan</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="xmUZ6nCFNoU">
              <span slot="icon">🎸</span>
              <span slot="title">Today &mdash; The Smashing Pumpkins</span>
            </youtube-vid>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
      <section className={styles.songs} id="millenium">
        <h2>2000s</h2>
        <ul className={styles.list}>
          <li>
            <youtube-vid id="yKNxeF4KMsY">
              <span slot="icon">🎸</span>
              <span slot="title">Yellow &mdash; Coldplay</span>
            </youtube-vid>
          </li>
          <li>
            <youtube-vid id="k4V3Mo61fJM">
              <span slot="icon">🎸</span>
              <span slot="title">Fix You &mdash; Coldplay</span>
            </youtube-vid>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
    </>
  )
}
