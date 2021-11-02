import styles from '../styles/Home.module.scss'

import Image from 'next/image'
import thumb from '../public/thumb.png'
import sorteioThumb from '../public/sorteio-thumb.png'
import sorteioIcon from '../public/sorteio-icon.png'

import Menu from '../components/Menu'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Menu />
      </div>
      <header className={styles.header}>
        <div className={styles.thumb}>
          <Image src={thumb} alt="Thumbnail" width={1441} height={650} />

          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Agora somos sorteio.com</h2>
            <p className={styles.cardText}>
              A novidade da mudança também chegou por aqui. O sorteio.com está
              novinho em folha, mas com a mesma confiança de sempre.
            </p>
            <button className={styles.cardButtom}>
              <i className="bi bi-star"></i>
              Quero sortear
            </button>
            <a href="#" className={styles.cardLink}>
              <i className="bi bi-chevron-left"></i>
              Usar a versão antiga
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.sectionContainer}>
            <div>
              <div className={styles.mainContainerTitle}>
                <h2>
                  Mudamos o nome e evoluímos ainda mais o processo de sorteio.
                </h2>
                <p>
                  O visual é novo, mas a qualidade é a de sempre! Continuamos
                  sendo a melhor plataforma de sorteios do Brasil. Tem dúvidas?!
                  Confira as vantagens de usar o sorteio.com.
                </p>
              </div>

              <div className={styles.cardContainer}>
                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-shield-check"></i>
                    <span>Rápido</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Com nossa extensão oficieal e conexão com o Facebook, seu
                      sorteio vai ser carregado com muita velocidade.
                    </p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-shield-check"></i>
                    <span>Rápido</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Com nossa extensão oficieal e conexão com o Facebook, seu
                      sorteio vai ser carregado com muita velocidade.
                    </p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-shield-check"></i>
                    <span>Rápido</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Com nossa extensão oficieal e conexão com o Facebook, seu
                      sorteio vai ser carregado com muita velocidade.
                    </p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-shield-check"></i>
                    <span>Rápido</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Com nossa extensão oficieal e conexão com o Facebook, seu
                      sorteio vai ser carregado com muita velocidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.sorteio}>
          <h2>
            Aqui tem sorteio VIP e gratuito.
            <br />
            Venha conhecer
          </h2>

          <div className={styles.sorteio__col}>
            <div className={styles.sorteio__item}>
              <div className={styles.itemContainer}>
                <div>
                  <Image src={sorteioThumb} width={150} height={150} />
                </div>

                <div className={styles.itemContainerDiv2}>
                  <span>
                    <Image src={sorteioIcon} width={20} height={20} />
                    @Sorteio
                  </span>

                  <div className={styles.itemDescription}>
                    <div>
                      <i className="bi bi-chat"></i>
                    </div>
                    <div>
                      <p>Numero de comentários</p>
                      <span>492</span>
                    </div>
                  </div>
                  <div className={styles.itemDescription}>
                    <div>
                      <i className="bi bi-hourglass"></i>
                    </div>
                    <div>
                      <p>Tempo de carregamento</p>
                      <span>9 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.itemContainer}>
                <i className="bi bi-check-circle"></i>
                <div>
                  <p>
                    <strong>Seu sorteio será gratuito!</strong>
                  </p>
                  <p>Nossos sorteios são gratuitos até 20 mil comentários.</p>
                </div>
              </div>
            </div>

            <div className={styles.sorteio__item}>
              <span>🎉</span>
              <h3>Carregamento gratuito</h3>
              <p>
                Escolha uma públicação com até 20 mil comentários e sorteie ela
                gratuitamente! Para fazer isso é muito fácil: basta conectar seu
                Isntagram com o Facebook ou baixar nossa extensão oficieal para
                Google Chrome.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-lg"></i> 100% dos comentários
                  válidos carregados;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Suporte dedicado;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Conexão segura usand API
                  oficial do Instagram;
                </li>
              </ul>
              <a href="#">
                Veja mais em Como Funciona
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>

          <div className={styles.sorteio__col}>
            <div className={styles.sorteio__item}>
              <div className={styles.itemContainer}>
                <div>
                  <Image src={sorteioThumb} width={150} height={150} />
                </div>

                <div className={styles.itemContainerDiv2}>
                  <span>
                    <div>
                      <Image src={sorteioIcon} width={20} height={20} />
                    </div>
                    @Sorteio
                  </span>

                  <div className={styles.itemDescription}>
                    <div>
                      <i className="bi bi-chat"></i>
                    </div>
                    <div>
                      <p>Numero de comentários</p>
                      <span>492</span>
                    </div>
                  </div>
                  <div className={styles.itemDescription}>
                    <div>
                      <i className="bi bi-hourglass"></i>
                    </div>
                    <div>
                      <p>Tempo de carregamento</p>
                      <span>9 minutos</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.itemContainer}>
                <i className="bi bi-check-circle"></i>
                <div>
                  <p>
                    <strong>Seu sorteio será gratuito!</strong>
                  </p>
                  <p>Nossos sorteios são gratuitos até 20 mil comentários.</p>
                </div>
              </div>
            </div>

            <div className={styles.sorteio__item}>
              <span>🎉</span>
              <h3>Carregamento gratuito</h3>
              <p>
                Escolha uma públicação com até 20 mil comentários e sorteie ela
                gratuitamente! Para fazer isso é muito fácil: basta conectar seu
                Isntagram com o Facebook ou baixar nossa extensão oficieal para
                Google Chrome.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-lg"></i> 100% dos comentários
                  válidos carregados;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Suporte dedicado;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Conexão segura usand API
                  oficial do Instagram;
                </li>
              </ul>
              <a href="#">
                Veja mais em Como Funciona
                <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </section>
        <div className={styles.container}>
          <section className={styles.sectionUsers}>
            <span>💕</span>
            <h2>Quem usou, amou!</h2>
            <p>Veja só quantos influenciadores com mais de 300 mil seguidores já passaram pela gente!</p>
            <Slider />
          </section>
        </div>
      </main>
    </>
  )
}
