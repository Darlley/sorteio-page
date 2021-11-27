import { useState } from 'react'

import Image from 'next/image'
import flagbr from '../public/flagbr.svg'

import styles from '../styles/Languages.module.scss'

export const Languages = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={`ms-lg-5 ${styles.languages}`} onClick={() => setOpen(!open)}>
      <div className={styles.languagesContainer}>
        <div>
          <Image src={flagbr} width={25} heigh={25} />
        </div>
        <div>
          <p>BR</p>
        </div>
        <div className={styles.languagesIcon}>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>

      <div className={`${styles.languagesContainer} ${open ? styles.open : ''}`}>
        <ul>
          <li>
            <Image src={flagbr} width={20} heigh={20} />
            <input type="radio" />
          </li>
        </ul>
      </div>
    </div>
  )
}
