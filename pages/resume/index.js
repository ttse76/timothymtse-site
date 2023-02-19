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
      description: `Viewpost is a B2B payments network working to simplify, streamline, and secure the way some of
      the largest companies in the world pay and get paid.
      Customers are able to pay their vendors through the Viewpost system and Viewpost handles getting
      the payment to the vendors via ACH, virtual credit card, or paper check.`,
      highlights: [
        'Full stack developer working on both front end and back end systems',
        'Designed and implemented new features to our internal customer service system which helped customer service agents more efficiently help customers',
        'Developed enchancements to internal application to assist customer service in tracking and monitoring high risk accounts',
        'Enchanced system to audit companies on the network with additional reporting tools',
        'Developed custom SQL procedures for data aggregation and processing'
      ],
      companyLink: 'https://www.viewpost.com/'
    },
    {
      company: 'Zip',
      startMonth: 'March',
      startYear: '2021',
      endMonth: 'April',
      endYear: '2022',
      role: 'Software Engineer II',
      description: `Zip is a BNPL system allowing customers to split their purchases into 4 interest free installments.
      Users can pay with Zip either through the integrated checkout, or pay anywhere with the Zip app.`,
      highlights: [
        'Designed, engineered, and deployed FastAPI based API onto a Microsoft Azure based cloud system',
        'Designed, engineered, and deployed new risk assessment pipeline alongside an in house data team which saw a significate reduced risk exposure',
        'Designed, enginnered, and deployed a major part of a rewards pipeline assessing rewards eligibility for purchases',
        'Spearheaded a documentation initiative to define more clearly the input and output of each API endpoint and microservice',
        'Prevented major outage casued by a third party vendor with defensive coding',
        'Worked cross team alongside product managers, engineering managers, and data engineers',
        'Served in an on call rotation to maintain maximum uptime'
      ],
      companyLink: 'https://zip.co/us'
    },
    {
      company: 'Datacor',
      startMonth: 'September',
      startYear: '2017',
      endMonth: 'March',
      endYear: '2021',
      role: 'Software Engineer',
      description: `Datacor is a vertical SaaS company specializing in sales and logistics software for
      chemical companies, with two products that are integreated with each other to have a complete
      system to manage sales and inventory.`,
      highlights: [
        'Designed and contributed full stack projects for a web based CRM',
        'Designed and implemented a React based sales analysis module designing the modal and backend analysis calculations based on the Rates-of-Change model from ITR Economics',
        'Reworked and tested backend sales aggregation systems',
        "Prepared and presented training seminars for Datacor's annual users conference"
      ],
      companyLink: 'https://www.datacor.com/'
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