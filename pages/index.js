import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CenterTextWrapper from 'components/style/CenterTextWrapper';

export default function Home() {
  return (
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
      </CenterTextWrapper>
    </Container>
  )
}
