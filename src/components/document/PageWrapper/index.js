import Head from "next/head";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import styles from 'styles/components/document/PageWrapper.module.css';

export default function PageWrapper({ children, title = "Timothy Tse", backButton = false }) {
  const back = backButton ? <Nav>
    <Nav.Link href="/"><span style={{fontSize: '2rem'}} className="tim-link">&larr; back</span></Nav.Link>
  </Nav>: <></>;

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container className={styles.pageContainer}>
        <div className={styles.contentWrap}>
          {back}
          {children}
        </div>
        <footer className={styles.footer}>
          <p className={styles.copyright}>&copy; {currentYear} Timothy Tse</p>
        </footer>
      </Container>
    </div>
  );
}