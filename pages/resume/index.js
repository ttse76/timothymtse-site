import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";
import ResumeItem from 'components/elements/ResumeItem';
import Accordion from 'react-bootstrap/Accordion';

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
      highlights: `I am currently a member of the Viewpost development team. Viewpost is b2b payment network
      helping businesses make electronic payments. As a full stack developer, I work on both the backend and frontend systems.`
    },
    {
      company: 'Zip Co',
      startMonth: 'March',
      startYear: '2021',
      endMonth: 'April',
      endYear: '2022',
      role: 'Sotware Engineer II',
      highlights: `Zip is a BNPL app allowing users to split any payment into 4 installments. As a software engineer at Zip, I was
      on the decisioning team which was responsible for the fraud and risk system on the platform. Notable projects I worked on include
      reworking credit limit calulations, adding promotions and discounts, and deploying a python-fastapi microservice.`
    },
    {
      company: 'Datacor',
      startMonth: 'September',
      startYear: '2017',
      endMonth: '2021',
      role: 'Software Engineer',
      highlights: `Datacor is a vertal SaSS company, specializing in logisics and sales software for chemical companies. As a software
      engineer at Datacor, I was a member of the team developing and maintaining Datacor CRM, a CRM designed for chemcial companies. 
      Notable projects I worked on included building a sales view module using React, reworking price calculations, as well as 
      preparing and presenting seminars and workshops at Datacor's annual user conference`
    }
  ];

  return {
    props: {
      resume
    }
  }
}