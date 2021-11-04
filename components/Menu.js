import Link from 'next/link'
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap'

import styles from '../styles/Menu.module.scss'

import Image from 'next/image'
import logo from '../public/logo.png'

import { Languages } from './Languages'

export default function Menu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <Container className={styles.container}>
          <Navbar.Brand href="/">
            <Image src={logo} width={119} height={16} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/" className={styles.navLink}>
                Inicio
              </Nav.Link>
              <Nav.Link eventKey={2} href="/#precos">
                Preços
              </Nav.Link>
              <Nav.Link eventKey={2} href="/#about">
                Como sortear?
              </Nav.Link>

              <Languages />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
