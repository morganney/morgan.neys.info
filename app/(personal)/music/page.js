'use client'

import { useEffect } from 'react'
import styles from './page.module.css'

export default function Music() {
  useEffect(() => {
    Promise.all([
      import('../components/youTube/defined.js'),
      import('../components/songDetails/defined.js'),
    ])
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
            <song-details id="kd9TlGDZGkI">
              <span slot="icon">🎸</span>
              <span slot="title">Walk of Life &mdash; Dire Straits</span>
            </song-details>
          </li>
          <li>
            <song-details id="wJzNZ1c5C9c">
              <span slot="icon">🎹</span>
              <span slot="title">Keep on Loving You &mdash; REO Speedwagon</span>
            </song-details>
          </li>
          <li>
            <song-details id="qQIO3pBFfXI">
              <span slot="icon">🎹</span>
              <span slot="title">In Too Deep &mdash; Genesis</span>
            </song-details>
          </li>
          <li>
            <song-details id="FTQbiNvZqaY">
              <span slot="icon">🎸</span>
              <span slot="title">Africa &mdash; Toto</span>
            </song-details>
          </li>
          <li>
            <song-details id="8Pa9x9fZBtY">
              <span slot="icon">🎸</span>
              <span slot="title">Sultans of Swing &mdash; Dire Straits (78)</span>
            </song-details>
          </li>
          <li>
            <song-details id="s6TtwR2Dbjg">
              <span slot="icon">🎤</span>
              <span slot="title">Heaven &mdash; Bryan Adams</span>
            </song-details>
          </li>
          <li>
            <song-details id="Epj84QVw2rc">
              <span slot="icon">🎵</span>
              <span slot="title">Come Undone &mdash; Duran Duran</span>
            </song-details>
          </li>
          <li>
            <song-details id="xuZA6qiJVfU">
              <span slot="icon">🎸</span>
              <span slot="title">Drive &mdash; The Cars</span>
            </song-details>
          </li>
          <li>
            <song-details id="MzGnX-MbYE4">
              <span slot="icon">🎸</span>
              <span slot="title">People Are People &mdash; Depeche Mode</span>
            </song-details>
          </li>
          <li>
            <song-details id="mh8MIp2FOhc">
              <span slot="icon">🎸</span>
              <span slot="title">I&apos;ll Be There For You &mdash; Bon Jovi</span>
            </song-details>
          </li>
          <li>
            <song-details id="4N1iwQxiHrs">
              <span slot="icon">🎸</span>
              <span slot="title">Your Love &mdash; The Outfield</span>
            </song-details>
          </li>
          <li>
            <song-details id="wTP2RUD_cL0">
              <span slot="icon">🎸</span>
              <span slot="title">Money For Nothing &mdash; Dire Straights</span>
            </song-details>
          </li>
          <li>
            <song-details id="AAZQaYKZMTI">
              <span slot="icon">🎸</span>
              <span slot="title">White Wedding &mdash; Billy Idol</span>
            </song-details>
          </li>
          <li>
            <song-details id="WyF8RHM1OCg">
              <span slot="icon">🎸</span>
              <span slot="title">Here I Go Again &mdash; White Snake</span>
            </song-details>
          </li>
          <li>
            <song-details id="VdphvuyaV_I">
              <span slot="icon">🎸</span>
              <span slot="title">Rebel Yell &mdash; Billy Idol</span>
            </song-details>
          </li>
          <li>
            <song-details id="JIrm0dHbCDU">
              <span slot="icon">🎸</span>
              <span slot="title">Strangelove &mdash; Depeche Mode</span>
            </song-details>
          </li>
          <li>
            <song-details id="YIHMPc6ZCuI">
              <span slot="icon">🎸</span>
              <span slot="title">So Far Away &mdash; Dire Straits</span>
            </song-details>
          </li>
          <li>
            <song-details id="IGVZOLV9SPo">
              <span slot="icon">🎤</span>
              <span slot="title">Love Is A Battlefield &mdash; Pat Benatar</span>
            </song-details>
          </li>
          <li>
            <song-details id="CBTOGVb_cQg">
              <span slot="icon">🎸</span>
              <span slot="title">Angel &mdash; Aerosmith</span>
            </song-details>
          </li>
          <li>
            <song-details id="bDgOwX72fLI">
              <span slot="icon">🎹</span>
              <span slot="title">Mandolin Rain &mdash; Bruce Hornsby, The Range</span>
            </song-details>
          </li>
          <li>
            <song-details id="kU8OJAOMbPg">
              <span slot="icon">🎵</span>
              <span slot="title">In Your Eyes &mdash; Peter Gabriel</span>
            </song-details>
          </li>
          <li>
            <song-details id="pekhxxngQ3s">
              <span slot="icon">🎵</span>
              <span slot="title">No One Is To Blame &mdash; Howard Jones</span>
            </song-details>
          </li>
          <li>
            <song-details id="Adw772km7PQ">
              <span slot="icon">🎵</span>
              <span slot="title">Back In The High Life Again &mdash; Steve Winwood</span>
            </song-details>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
      <section className={styles.songs} id="nineties">
        <h2>90s</h2>
        <ul className={styles.list}>
          <li>
            <song-details id="W05cPXpUHGI">
              <span slot="icon">🎸</span>
              <span slot="title">I Will Buy You A New Life &mdash; Everclear</span>
            </song-details>
          </li>
          <li>
            <song-details id="EkwD5rQ-_d4">
              <span slot="icon">🎸</span>
              <span slot="title">Possum Kingdom &mdash; The Toadies</span>
            </song-details>
          </li>
          <li>
            <song-details id="u1xrNaTO1bI">
              <span slot="icon">🎸</span>
              <span slot="title">Personal Jesus &mdash; Depeche Mode</span>
            </song-details>
          </li>
          <li>
            <song-details id="AVYYpNaSs2Y">
              <span slot="icon">🎵</span>
              <span slot="title">All I Want &mdash; Toad The Wet Sprocket</span>
            </song-details>
          </li>
          <li>
            <song-details id="-oqAU5VxFWs">
              <span slot="icon">🎤</span>
              <span slot="title">Mr. Jones &mdash; Counting Crows</span>
            </song-details>
          </li>
          <li>
            <song-details id="gRYZijLZR-Q">
              <span slot="icon">🎸</span>
              <span slot="title">Jumper &mdash; Third Eye Blind</span>
            </song-details>
          </li>
          <li>
            <song-details id="rE1oIhSgTgI">
              <span slot="icon">🎸</span>
              <span slot="title">How&apos;s It Going To Be &mdash; Third Eye Blind</span>
            </song-details>
          </li>
          <li>
            <song-details id="8-r-V0uK4u0">
              <span slot="icon">🎸</span>
              <span slot="title">
                Bullet With Butterfly Winds &mdash; The Smashing Pumpkins
              </span>
            </song-details>
          </li>
          <li>
            <song-details id="LHQqqM5sr7g">
              <span slot="icon">🎸</span>
              <span slot="title">
                Undone &ndash;&ndash; The Sweater Song &mdash; Weezer
              </span>
            </song-details>
          </li>
          <li>
            <song-details id="MW6E_TNgCsY">
              <span slot="icon">🎸</span>
              <span slot="title">Santa Monica &mdash; Everclear</span>
            </song-details>
          </li>
          <li>
            <song-details id="beINamVRGy4">
              <span slot="icon">🎸</span>
              <span slot="title">Semi-Charmed Life &mdash; Third Eye Blind</span>
            </song-details>
          </li>
          <li>
            <song-details id="4aeETEoNfOg">
              <span slot="icon">🎸</span>
              <span slot="title">1979 &mdash; The Smashing Pumpkins</span>
            </song-details>
          </li>
          <li>
            <song-details id="EqWRaAF6_WY">
              <span slot="icon">🎸</span>
              <span slot="title">My Hero &mdash; Foo Fighters</span>
            </song-details>
          </li>
          <li>
            <song-details id="lYBIRHi5-o8">
              <span slot="icon">🎸</span>
              <span slot="title">Down &mdash; 311</span>
            </song-details>
          </li>
          <li>
            <song-details id="gYdlqjiQPAc">
              <span slot="icon">🎸</span>
              <span slot="title">Low &mdash; Cracker</span>
            </song-details>
          </li>
          <li>
            <song-details id="A-oh-tP6RvA">
              <span slot="icon">🎤</span>
              <span slot="title">Barely Breathing &mdash; Duncan Sheik</span>
            </song-details>
          </li>
          <li>
            <song-details id="PBwAxmrE194">
              <span slot="icon">🎤</span>
              <span slot="title">C.R.E.A.M. &mdash; Wu&ndash;Tang Clan</span>
            </song-details>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
      <section className={styles.songs} id="millenium">
        <h2>2000s</h2>
        <ul className={styles.list}>
          <li>
            <song-details id="yKNxeF4KMsY">
              <span slot="icon">🎸</span>
              <span slot="title">Yellow &mdash; Coldplay</span>
            </song-details>
          </li>
          <li>
            <song-details id="k4V3Mo61fJM">
              <span slot="icon">🎸</span>
              <span slot="title">Fix You &mdash; Coldplay</span>
            </song-details>
          </li>
          <li>to be continued...</li>
        </ul>
      </section>
    </>
  )
}
