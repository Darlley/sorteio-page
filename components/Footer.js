import Link from 'next/link'

import Image from 'next/image'
import logo from '../public/logo.png'
import selo from '../public/selo-icon.png'
import chromeIcon from '../public/chrome-brands.png'
import facebookIcon from '../public/facebookIcon.png'
import sorteioIcon from '../public/sorteio-icon.png'

import styles from '../styles/Footer.module.scss'
import { Languages } from './Languages'

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
          <li className={styles.footer__menuItem}>
            Sorteios
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>
                <Link href="/">
                  <a>Começar um sorteio</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.footer__menuItem}>Produtos
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>
                <Link href="/">
                  <a>Preços</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.footer__menuItem}>Suporte
            <ul className={styles.footer__submenu}>
              <li className={styles.footer__submenuItem}>
                <Link href="/">
                  <a>Como sortear?</a>
                </Link>  
              </li>
              <li className={styles.footer__submenuItem}>
                <Link href="/">
                  <a>Fale conosco</a>
                </Link>  
              </li>
            </ul>
          </li>
        </ul>

        <div className={styles.section__instagram}>
          <span>Não perca as novidades!</span>
          <div className={styles.followInstagram}>
            <div className={styles.followInstagram__containerImagem}>
              <Image src={sorteioIcon} width={30} height={30} />
            </div>
            <div className={styles.followInstagram__containerDescription}>
              <p>Siga a gente</p>
              <p><span>@sorteio</span></p>
            </div>
            <div className={styles.followInstagram__containerButtom}>
              <Link href="/"><a>Seguir</a></Link>
            </div>
          </div>
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
          <Languages />
        </div>
      </div>
    </footer>
  )
}