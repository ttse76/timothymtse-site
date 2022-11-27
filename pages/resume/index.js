import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";
import ResumeItem from 'components/elements/ResumeItem';
import Accordion from 'react-bootstrap/Accordion';

export default function Resume({ resume, skills }) {
  const items = resume.map((resumeItem, index) => {
    return <ResumeItem {...resumeItem} eventKey={index} key={index} />
  });

  return (
    <PageWrapper title="Resume" backButton={true}>
      <Row className="pt-5 justify-content-md-center">
        <Col lg={8}>
          <h1 className="section-header pb-2">Hello, World!</h1>
          <p style={{textAlign: 'justify'}}>
            My name is Timothy Tse. I am a software engineer based in northern New Jersey,
            just outside of New York City. I have over 5 years of experience
            working with companies accross many different industries, working on teams both big
            and small, with extensive experience and knowlege in both frontend and backend systems,
            working with the most popular technologies on the market.
          </p>
        </Col>
      </Row>
      <Row className="pt-5 justify-content-md-center">
        <Col lg={8}>
          <h1 className="section-header pb-2">Experience</h1>
          <Accordion>
            {items}
          </Accordion>
        </Col>
      </Row>
      <Row className="pt-5 justify-content-md-center">
        <Col lg={8}>
          <h1 className="section-header">Education</h1>
          <div>
            <p>Rensselaer Polytechnic Institute</p>
            <p style={{ fontStyle: 'italic' }}>B.S. Computer Science</p>
          </div>
        </Col>
      </Row>
      <Row className="pt-5 justify-content-md-center">
        <Col lg={8}>
          <h1 className="section-header">Skills</h1>
          <p>A brief list of languages and technologies I have worked with:</p>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: '0'
          }}>
            {skills.map(skill => <li key={skill}>- {skill}</li>)}
          </ul>
        </Col>
      </Row>
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
      helping businesses make electronic payments. As a full stack developer, I work on both the backend and frontend systems,
      primarily focusing on internal customer service tools.`
    },
    {
      company: 'Zip',
      startMonth: 'March',
      startYear: '2021',
      endMonth: 'April',
      endYear: '2022',
      role: 'Software Engineer II',
      highlights: `Zip is a BNPL app allowing users to split any payment into 4 installments. As a software engineer at Zip, I was
      on the decisioning team which was responsible for the fraud and risk system on the platform. Notable projects I worked on include
      reworking credit limit calulations, adding promotions and discounts, and deploying a python-fastapi microservice.`
    },
    {
      company: 'Datacor',
      startMonth: 'September',
      startYear: '2017',
      endMonth: 'March',
      endYear: '2021',
      role: 'Software Engineer',
      highlights: `Datacor is a vertical SaaS company, specializing in logisics and sales software for chemical companies. As a software
      engineer at Datacor, I was a member of the team developing and maintaining Datacor CRM, a CRM designed for chemcial companies. 
      Notable projects I worked on included building a sales view module using React, reworking price calculations, as well as 
      preparing and presenting seminars and workshops at Datacor's annual user conference`
    }
  ];

  const skills = [
    'C#/.NET',
    'React/Redux',
    'NextJS',
    'NodeJS',
    'Express',
    'JavaScript',
    'Java',
    'Python',
    'MongoDB',
    'SQL',
    'Docker'
  ];

  return {
    props: {
      resume,
      skills
    }
  }
}