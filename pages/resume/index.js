import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";
import ResumeItem from 'components/elements/ResumeItem';

export default function Resume({ resume }) {

  const items = resume.map((resumeItem, index) => {
    return <ResumeItem {...resumeItem} eventKey={index} key={index} />
  });

  return (
    <PageWrapper title="Resume">
      <Container>
        <Row>
          <Col>
            <h1 className="page-header">Resume</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Accordion>
              {items}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  )
}

export async function getStaticProps() {
  const resume = [
    {
      company: 'Viewpost',
      startMonth: 'July',
      startYear: '2022',
      role: 'Full Stack Developer',
      highlights: [
        'Member of the Viewpost development team'
      ]
    }
  ];

  return {
    props: {
      resume
    }
  }
}