import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CenterTextWrapper from 'components/style/CenterTextWrapper';
import LinkBox from 'components/elements/LinkBox';
import PageWrapper from 'components/document/PageWrapper';

export default function Home({ links }) {
  return (
    <PageWrapper>
      <Container>
        <CenterTextWrapper>
          <Row>
            <Col>
              <h1 className="page-header">Timothy M. Tse</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Software Engineer based in Northern New Jersey</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <LinkBox links={links} />
            </Col>
          </Row>
        </CenterTextWrapper>
      </Container>
    </PageWrapper>
  )
};

export async function getStaticProps() {
  const links = [
    {
      "text": "GitHub",
      "url": "https://github.com/ttse76",
      "newTab": true
    },
    {
      "text": "LinkedIn",
      "url": "https://www.linkedin.com/in/timothy-tse-723269103/",
      "newTab": true
    },
    {
      "text": "Resume",
      "url": "/resume",
      "newTab": false
    }
  ];

  return {
    props: {
      links: links
    }
  }
}
