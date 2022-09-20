import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CenterTextWrapper from 'components/style/CenterTextWrapper';
import OutLink from 'components/elements/OutLink';
import PageWrapper from 'components/document/PageWrapper';

export default function Home() {
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
              <div style={{ textAlign: 'center' }}>
              <span>
                <OutLink href="https://github.com/ttse76">Github</OutLink>&nbsp;&nbsp;&nbsp;&nbsp;<OutLink href="https://www.linkedin.com/in/timothy-tse-723269103/">LinkedIn</OutLink>
              </span>
              </div>
            </Col>
          </Row>
        </CenterTextWrapper>
      </Container>
    </PageWrapper>
  )
}
