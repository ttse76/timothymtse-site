import Head from "next/head";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function PageWrapper({ children, title = "Timothy M. Tse", backButton = false }) {
  
  const back = backButton ? <Nav>
    <Nav.Link href="/"><span style={{fontSize: '2rem'}} className="tim-link">&larr; back</span></Nav.Link>
  </Nav>: <></>;
  
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        {back}
        {children}
      </Container>
    </div>
  );
}