import Link from 'next/link';

import style from '../styles/Menu.module.scss';

export default function Menu(){
  return (
    <>
    <nav className={`${style.menu} navbar navbar-light container-fluid`}>
      <div className={style.logo}>
        <Link className="navbar-brand" href="/">
          Sorteio.com
        </Link>
      </div>
      <div className={style.item}>
        <Link className="navbar-brand" href="#incio">
          Inicio
        </Link>
        <Link className="navbar-brand" href="#precos">
          Preços
        </Link>
        <Link className="navbar-brand" href="#sortear">
          Como sortear?
        </Link>
        <button className={style.languages}>
          PT
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>
    </nav>
    </>
  )
}