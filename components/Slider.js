import {useRef} from 'react'
import Image from 'next/image';

import styles from '../styles/Slider.module.scss';

import perfilImg1 from '../public/elipse_card.png'; 
import slideSetaEsquerda from '../public/slide-seta-esquerda.png'; 
import slideSetaDireita from '../public/slide-seta-direita.png'; 

export default function Slider() {
  const slider = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault();

    slider.current.scrollLeft -= slider.current.offsetWidth;
  }
  const handleRightClick = (e) => {
    e.preventDefault();

    slider.current.scrollLeft += slider.current.offsetWidth;
  }
  return (
    <div className={styles.slider}>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonsContainerButton} onClick={handleLeftClick} onTouchStart={handleLeftClick}>
          <Image 
            src={slideSetaEsquerda}
            width={60}
            height={60}
          />
        </button>
        <button className={styles.buttonsContainerButton} onClick={handleRightClick} onTouchStart={handleRightClick}>
          <Image 
              src={slideSetaDireita}
              width={60}
              height={60}
            />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
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
                <Image 
                  src={perfilImg1}
                  width={132}
                  height={132}
                />
              </div>
              <h3>@alecacaushow</h3>
              <p>1,3Mi seguidores no Istagram</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}
