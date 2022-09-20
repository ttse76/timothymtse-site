import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";

export default function Resume() {

  return (
    <PageWrapper title="Resume">
      <Container>
        <Row>
          <Col>
            <h1 className="page-header">Resume</h1>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}