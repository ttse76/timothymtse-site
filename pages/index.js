import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CenterTextWrapper from 'components/style/CenterTextWrapper';
import Navigation from 'components/elements/Navigation';
import PageWrapper from 'components/document/PageWrapper';

export default function Home({ links }) {
  return (
    <PageWrapper>
      <CenterTextWrapper>
        <Row>
          <Col>
            <h1 className="page-header fade-in">Timothy Tse</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="sub-header">Software Engineer based in Northern New Jersey</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="nav-header">
              <Navigation links={links} />
            </div>
          </Col>
        </Row>
      </CenterTextWrapper>
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
    },
    {
      "text": "Projects",
      "url": "/projects",
      "newTab": false
    },
    {
      "text": "Email",
      "url": "/email",
      "newTab": false
    }
  ];

  return {
    props: {
      links: links
    }
  }
}
