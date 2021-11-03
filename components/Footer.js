import Image from 'next/image'
import logo from '../public/logo.png'
import selo from '../public/selo-icon.png'
import chromeIcon from '../public/chrome-brands.png'
import facebookIcon from '../public/facebookIcon.png'

import styles from '../styles/Footer.module.scss'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <nav>
        <div>
          <Image 
            src={logo}
            width={119}
            height={16}
          />
          <p>Copyright © 2021 Sorteio.com.<br />Todos os direiros reservados.</p>
        </div>

        <ul className={styles.footer__menu}>
          <li className={styles.footer__menuItem}>Sorteios
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>Começar um sorteio</li>
            </ul>
          </li>
          <li className={styles.footer__menuItem}>Produtos
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>Preços</li>
            </ul>
          </li>
          <li className={styles.footer__menuItem}>Suporte
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>Como sortear?</li>
              <li className={styles.footer__submenuItem}>Fale conosco</li>
            </ul>
          </li>
        </ul>

        <div>
          <span>Não perca as novidades!</span>
        </div>
      </nav>

      <section>
        <div className={styles.footerSectionLeft}>
          <div>
            <Image 
              src={selo}
              width={63}
              heigth={63}
            />
          </div>
          <div>
            <h3>Quer melhor experiência com sorteios?</h3>
            <p>Recomendamos que instale nossa extensão oficial para navegador ou conecte-se com o Facebook.</p>
          </div>
        </div>
        <div className={styles.footerSectionRight}>
          <a href="#" className={`btn ${styles.footerBtnGoogle}`}>
            <Image 
              src={chromeIcon}
              width={28}
              heigh={28}
            />
            Instalar extensão
          </a>
          <a href="#" className={`btn ${styles.footerBtnFecebook}`}>
            <Image 
              src={facebookIcon}
              width={28}
              heigth={28}
            />
            Conectar-se com Facebook
          </a>
        </div>
      </section>

      <div className={styles.footerEnding}>
        <div>
          <span>Termos de serviço</span>
          <span>Política de privacidade</span>
        </div>
        <div>
          PT
        </div>
      </div>
    </footer>
  )
}