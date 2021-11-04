import { useRef } from 'react'
import Image from 'next/image'

import styles from '../styles/Slider.module.scss'

import instagramAlecacaushow from '../public/instagram-alecacaushow.png'
import instagramToguro from '../public/instagram-toguro.png'
import instagramBunitotrader from '../public/instagram-bunitotrader.png'
import instagramDeiveleonardo from '../public/instagram-deiveleonardo.png'
import instagramThiagonigro from '../public/instagram-thiagonigro.png'
import instagramDarlley from '../public/instagram-darlley.jpg'

import slideSetaEsquerda from '../public/slide-seta-esquerda.png'
import slideSetaDireita from '../public/slide-seta-direita.png'

export default function Slider() {
  const slider = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()

    slider.current.scrollLeft -= slider.current.offsetWidth
  }
  const handleRightClick = e => {
    e.preventDefault()

    slider.current.scrollLeft += slider.current.offsetWidth
  }
  return (
    <div className={styles.slider}>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.buttonsContainerButton}
          onClick={handleLeftClick}
          onTouchStart={handleLeftClick}
        >
          <Image src={slideSetaEsquerda} width={60} height={60} />
        </button>
        <button
          className={styles.buttonsContainerButton}
          onClick={handleRightClick}
          onTouchStart={handleRightClick}
        >
          <Image src={slideSetaDireita} width={60} height={60} />
        </button>
      </div>
      <div className={styles.slideCards} ref={slider}>
      <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramDarlley} width={132} height={132} />
              </div>
              <h3>@darlleybbf</h3>
              <p>671 seguidores no Instagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramAlecacaushow} width={132} height={132} />
              </div>
              <h3>@alecacaushow</h3>
              <p>1,3Mi seguidores no Istagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramToguro} width={132} height={132} />
              </div>
              <h3>@toguro</h3>
              <p>4,4Mi seguidores no Instagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramBunitotrader} width={132} height={132} />
              </div>
              <h3>@bunitotrader</h3>
              <p>275K seguidores no Instagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramDeiveleonardo} width={132} height={132} />
              </div>
              <h3>@deiveleonardo</h3>
              <p>9,7Mi seguidores no Instagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}>
          <a href="#">
            <div className={styles.slideCardIconOpen}>
              <i className="bi bi-arrow-up-right-square"></i>
            </div>
            <div className={styles.slideCardContent}>
              <div className={styles.slideCardContentImage}>
                <Image src={instagramThiagonigro} width={132} height={132} />
              </div>
              <h3>@thiago.nigro</h3>
              <p>5,5Mi seguidores no Instagram</p>
            </div>
          </a>
        </div>

        <div className={styles.slideCard}></div>
      </div>
    </div>
  )
}
