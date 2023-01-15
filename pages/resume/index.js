import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";
import ResumeItem from 'components/elements/ResumeItem';
import Accordion from 'react-bootstrap/Accordion';

import styles from 'styles/pages/Resume.module.css';

export default function Resume({ resume, skills }) {
  const items = resume.map((resumeItem, index) => {
    return <ResumeItem {...resumeItem} eventKey={index} key={index} />
  });

  const paragraphStyle = {
    textAlign: 'justify'
  }

  return (
    <PageWrapper title="Resume" backButton={true}>
      <Row className="pt-5 justify-content-md-center">
        <Col lg={8}>
          <h1 className="section-header pb-2">Hello, World!</h1>
          <p className={styles.paragraph}>
            My name is Timothy Tse. I am a software engineer based in northern New Jersey,
            just outside of New York City. I have over 5 years of experience
            working with companies accross many different industries, working on teams both big
            and small, with extensive experience and knowlege in both frontend and backend systems,
            working with the most popular technologies on the market.
          </p>
          <br />
          <p className={styles.paragraph}>
            In addition to programming, I have been heavily involved in software design and architecture,
            working with both engineers and managers to design and develop major features for enterprise applications.
          </p>
          <br />
          <p style={paragraphStyle}>
            I am also open to select freelance web development projects as well. For inquries, feel free to email me <Link href="/email"><a className={styles.paragraphLink}>here!</a></Link>
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
      highlights: [
        'Full stack role working on both the main application and the internal administration application',
        'Developed and deployed procedures for Microsoft SQL database',
        'Developed enchancements to internal application to assist customer service in tracking and monitoring high risk accounts'
      ]
    },
    {
      company: 'Zip',
      startMonth: 'March',
      startYear: '2021',
      endMonth: 'April',
      endYear: '2022',
      role: 'Software Engineer II',
      highlights: [
        'Member of the credit risk team',
        'Worked on a agile team utilizing test driven development',
        'Reworked new user approval by implementing a machine learning based model',
        'Built and deployed Python based api using the FastAPI framework',
        'Served in the on call rotation responding and troubleshooting alerts',
        'Prevented outage due to defensive coding in module I developed'
      ]
    },
    {
      company: 'Datacor',
      startMonth: 'September',
      startYear: '2017',
      endMonth: 'March',
      endYear: '2021',
      role: 'Software Engineer',
      highlights: [
        'Member of the Datacor CRM team, a vertical SaaS application managing sales and logistics for chemical companies',
        'Full stack role working with a Java backend and a front end with JavaScript and an in house framwork',
        'Built out sales analysis module in React calculating sales trends based on placed orders',
        'Assisted customers with technical support issues',
        'Prepared and presented edcuational seminars about Datacor CRM'
      ]
    }
  ];

  const skills = [
    'C#/.NET',
    'React/Redux',
    'NextJS',
    'NodeJS',
    'Go/Golang',
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