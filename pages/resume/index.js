import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageWrapper from "components/document/PageWrapper";
import ResumeItem from 'components/elements/ResumeItem';
import Accordion from 'react-bootstrap/Accordion';

import styles from 'styles/pages/Resume.module.css';

export default function Resume({
  resume,
  skills,
  theatre
}) {
  const items = resume.map((resumeItem, index) => {
    return <ResumeItem {...resumeItem} eventKey={index} key={index} />
  });

  const m0 = { marginBottom: '0px' };
  const showTitle = { fontStyle: 'italic', fontWeight: 'bold' };

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
            <p style={{ ...m0, fontWeight: 'bold', fontSize: '1.5rem' }}>{"Rensselaer Polytechnic Institute '17"}</p>
            <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
              <li>Degree: B.S. Computer Science</li>
              <li>Member of the Tau Nu chapter of Phi Gamma Delta</li>
              <ul>
                <li>Director, House Corporation of Phi Gamma Delta @ RPI (2023 - Present)</li>
                <li>Secretary, Board of Chapter Advisors (2018-2019)</li>
              </ul>
            </ul>
          </div>
          <div>
            <p style={{ ...m0, fontWeight: 'bold', fontSize: '1.5rem' }}>{"Montclair Kimberley Academy '13"}</p>  
            <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
              <li>High School Diploma</li>
              <li>Theatre</li>
              <TheatreCredits credits={theatre} />
            </ul>
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

const TheatreCredits = ({ credits }) => {
  const showTitle = { fontStyle: 'italic', fontWeight: 'bold' };
  const comps = credits.map((credit, i) => {
    return (<ul style={{ listStyle: 'none', paddingBottom: '15px' }} key={`show${i}`}>
      <li style={showTitle}>{credit.showTitle}</li>
      <li>{credit.theatreName}, {credit.location}</li>
      <li>Role: {credit.role}</li>
      <li>{credit.description}</li>
      <ul></ul>
    </ul>);
  });

  return <div>{comps}</div>
};

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
        "Designed and engineered projects to enhance the efficiency and precision of our risk assessment and risk management systems, enabling customer service teams to swiftly and accurately identify potential fraudulent activities within the system, bolstering our ability to safeguard customers and protect against fraudulent transactions, fostering a secure and trustworthy electronic payment environment.",
        "Strategically developed and rigorously tested SQL procedures, optimizing data aggregation processes for improved efficiency, thereby streamlining the overall system performance.",
        "Genericized React components, fostering code reusability and promoting a more efficient development workflow, contributing significantly to maintainable and scalable codebase.",
        "Introduced valuable enhancements to an internal application, enabling customer service teams to effectively track and monitor high-risk accounts, leading to enhanced risk management and improved customer satisfaction.",
        "Bolstered the system's capabilities by implementing additional reporting tools, allowing for comprehensive auditing of companies within the network, fostering a higher level of data-driven decision-making and compliance.",
        "Implemented a cutting-edge tool to bolster customer support operations by enabling the swift identification and flagging of suspicious merchants from financial transactions. This initiative significantly improved fraud detection and prevention, ensuring a more secure and seamless experience for our valued customers, while also streamlining the workflow for support teams."
    ],
      companyLink: 'https://www.viewpost.com/',
      techStack: [
        'C#',
        'React',
        'JavaScript',
        'SQL',
        'Splunk',
        'TeamCity'
      ]
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
        "Contributed as a vital member of the decisioning team overseeing micro-services dedicated to fraud and risk analysis for the Zip BNPL platform, with a primary focus on the back end. Demonstrated expertise in working within an agile test-driven development environment, strategically aligned with a robust microservice architecture.",
        "Led the end-to-end design, engineering, and deployment of a FastAPI-based API onto a Microsoft Azure cloud infrastructure which increased efficiency of our risk assessment pipeline",
        "Spearheaded the successful design, engineering, and implementation of a machine learning-driven risk assessment pipeline in collaboration with the in-house data team. The results showcased a substantial reduction in risk exposure while increasing limits for low risk customers",
        "Engineered a segment of a new rewards pipeline, evaluating rewards eligibility for prospective new customers' purchases boosting customer acquisition and engagement rates",
        "Drove a comprehensive documentation initiative, systematically defining the input and output specifications for each API endpoint and microservice. This initiative fostered greater clarity, cohesion, and efficiency across the entire system.",
        "Proactively averted a major outage that could have been caused by a third-party vendor through the skillful application of defensive coding techniques, ensuring uninterrupted service delivery to users.",
        "Regularly collaborated with product managers, engineering managers, and data engineers on diverse system-wide projects, facilitating cohesive development and fostering an environment of synergy and innovation."
      ],
      companyLink: 'https://zip.co/us',
      techStack: [
        'C#',
        'Azure',
        'CosmosDB',
        'Datadog',
        'Opsgenie',
        'Python',
        'FastAPI'
      ]
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
        "Played a pivotal role in developing and executing full-stack projects for Datacor CRM, showcasing innovative and user-friendly solutions.",
        "Successfully conceptualized and implemented a cutting-edge sales analysis module using React, designing the modal and backend analysis calculations based on the sophisticated Rates-of-Change model from ITR Economics, empowering our customers with data-driven insights on their sales.",
        "Revamped and rigorously tested backend sales aggregation systems, optimizing their performance and ensuring seamless data flow.",
        "Prepared and delivered engaging training seminars to our customers during Datacor's annual user conference, providing valuable insights and empowering them with the latest tools and techniques to maximize their experience with the Datacor CRM system."
    ],
      companyLink: 'https://www.datacor.com/',
      techStack: [
        'Java',
        'JavaScript',
        'React',
        'SQL',
        'Microsoft Access',
        'Apache',
        'Ant'
      ]
    }
  ];

  const theatre = [
    {
      showTitle: "You Can't Take it With You",
      theatreName: 'Deetjen Theatre',
      location: 'Montclair, NJ',
      role: 'Production Manager, Booth Operator',
      description: 'Special show put on by alumni who were involved in theatre while at MKA.'
    },
    {
      showTitle: "Grease",
      theatreName: 'Weiss Auditorium',
      location: 'Montclair, NJ',
      role: 'Production Stage Manager, Fly Operator',
      description: 'MKA Winter Musical, 3 sold out performances'
    },
    {
      showTitle: "The Drowsy Chaperone",
      theatreName: 'Weiss Auditorium',
      location: 'Montclair, NJ',
      role: 'Production Stage Manager, Fly Operator',
      description: 'MKA Winter Musical, 3 sold out performances'
    },
    {
      showTitle: "Once Upon A Mattress",
      theatreName: 'Weiss Auditorium',
      location: 'Montclair, NJ',
      role: 'Fly Operator',
      description: 'MKA Winter Musical, 3 sold out performances'
    },
    {
      showTitle: "A Funny Thing Happened on the Way to the Forum",
      theatreName: 'Weiss Auditorium',
      location: 'Montclair, NJ',
      role: 'Spot Operator',
      description: 'MKA Winter Musical, 3 sold out performances'
    }
  ];

  const skills = [
    'C#/.NET',
    'React/Redux',
    'NextJS',
    'Node.js',
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
      skills,
      theatre
    }
  }
}