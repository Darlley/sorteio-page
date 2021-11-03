import styles from '../styles/Home.module.scss'

import Image from 'next/image'
import thumb from '../public/thumb.png'
import sorteioThumb from '../public/sorteio-thumb.png'
import sorteioThumb2 from '../public/sorteio-thumb-2.png'
import sorteioIcon from '../public/sorteio-icon.png'
import chromeIcon from '../public/chrome-brands.png'

import Menu from '../components/Menu'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Menu />
      <header className={styles.header}>
        <div className={styles.thumb}>
          <Image src={thumb} alt="Thumbnail" width={1441} height={650} />

          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Agora somos sorteio.com</h2>
            <p className={styles.cardText}>
              A novidade da mudança também chegou por aqui. O sorteio.com está
              novinho em folha, mas com a mesma confiança de sempre.
            </p>
            <a className={`btn ${styles.cardBtn}`}>
              <i className="bi bi-star"></i>
              Quero sortear
            </a>
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
                    <i className="bi bi-alarm"></i>
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
                    <span>Seguro</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Não precisa de cadastro! Nossa conexão é feita utilizando
                      a API oficial do Instagram
                    </p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-emoji-sunglasses"></i>
                    <span>Usado por influencers</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Somos a plataforma de sorteios mais queridinha dos
                      influenciadores do Brasil
                    </p>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <div className={styles.cardItemTitle}>
                    <i className="bi bi-chat-dots"></i>
                    <span>100% dos comentários</span>
                  </div>
                  <div className={styles.cardItemDescription}>
                    <p>
                      Carregamos 100% dos comentários válidos, deixando seu
                      sorteio mais confiável e autêntico possível!
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
                  <Image src={sorteioThumb} width={145} height={145} />
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
                  <Image src={sorteioThumb2} width={145} height={145} />
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
              <span>💫</span>
              <h3>Carregamento VIP</h3>
              <p>
                Com o carregamento VIP você pode sortear posts com quantos comentários quiser e ainda deixar o carregamento acontecer em nuvem, podendo desligar o computador e ir fazer qualquer outra coisa…
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-lg"></i>
                  <div>
                    Execução do sorteio totalmente em nuvem
                    <span className={styles.sorteio__subitem}>[Não perde o carregamento se desligar o computador];</span>
                  </div>
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Até 7 dias após a compra para sortear o mesmo post quantas vezes quiser;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Acesso instantâneo aos sorteios em carregamento;
                </li>
                <li>
                  <i className="bi bi-check-lg"></i> Carregamento de mais de 20 mil comentários.
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
            <div className={styles.sectionUsers_title}>
              <span>💕</span>
              <h2>Quem usou, amou!</h2>
              <p>
                Veja só quantos influenciadores com mais de 300 mil seguidores
                já passaram pela gente!
              </p>
            </div>

            <Slider />
          </section>
        </div>
        <section id="precos" className={styles.cta}>
          <div className={styles.ctaContainer}>
            <h2>Conheça os nossos preços</h2>
            <p>
              Adquira o carregamento VIP e faça sorteios de forma rápida e
              segura! E se você tem mais de 300 mil seguidores, aproveite as
              vantagens exclusivas soteio.com para influenciadores digitais.
            </p>
            <a href="#" className={`btn ${styles.ctaBtn}`}>
              Quero conhecer
            </a>
          </div>
        </section>
        <div className={styles.container}>
          <section className={styles.extensaoSection}>
            <div>
              <h2>Nossa extensão é oficial!</h2>
              <p>
                Existem duas maneiras de fazer o sorteio gratuito: ou você
                conecta com o Facebook ou baixa nossa extensão oficial no
                Chrome. Não tem segredo nenhum, e o melhor, no próximo sorteio
                não é necessário fazer nada disso novamente. É só chegar, e
                sortear!
              </p>

              <a href="#" className={`btn ${styles.extensaoBtn}`}>
                <Image src={chromeIcon} width={28} heigh={28} />
                Instalar extensão oficial
              </a>
            </div>
          </section>
        </div>
        <section id="about" className={styles.aboutSection}>
          <h2>Como funciona?</h2>

          <div className={styles.aboutContainer}>
            <div className={styles.aboutChild}>
              <h3>Prático, rápido e muuuuuuito seguro!</h3>
              <p>
                Com o sorteio.com não tem segredo, é só digitar o seu
                @instagram, e-mail, seguir o passo a passo e pronto! Seu sorteio
                tá no jeito.
              </p>
              <p>
                <strong>Ainda tem dúvidas sobre sortear?</strong>
                <br />
                Sem crise, entre em contato com nosso atentimento pelo chat ou
                e-mail. Nossa equipe está sempre preparada para te ajudar ;)
              </p>
              <a href="#" className={`btn ${styles.aboutBtn}`}>
                <i className="bi bi-instagram"></i>
                Sortear no Instagram
              </a>
            </div>
            <div className={styles.aboutChild}>
              <iframe
                className={styles.aboutIframe}
                src="https://www.youtube.com/embed/cEvTJzQ2h6g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
