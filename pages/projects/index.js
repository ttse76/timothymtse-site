import PageWrapper from "components/document/PageWrapper";
import ProjectCard from "components/elements/ProjectCard";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects({ projects }) {
  const projectCards = projects.map(project => {
    return (
      <Col lg={3} key={project.title} className="pb-2">
        <ProjectCard {...project} />
      </Col>
    );
  });
  
  return (
    <PageWrapper title="Projects" backButton={true}>
      <Row className="pt-5 justify-content-md-center">
        {projectCards}
      </Row>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const projects = [
    {
      title: 'This Site',
      description: `This site was build with NextJS, React, and bootstrap.`,
      links: [
        ['View on GitHub', 'https://github.com/ttse76/timothymtse-site']
      ]
    },
    {
      title: 'Rolodex',
      description: `A simple app I am building as a credit card points enthusiast 
      to keep track of credit cards and loyalty programs`,
      links: [
        ['View on Github', 'https://github.com/ttse76/rolodex']
      ]
    },
    {
      title: 'Discord Tunes',
      description: `A framework to create your own music playing bot for discord. Currently only supports YouTube.`,
      links: [
        ['View on GitHub', 'https://github.com/ttse76/discord-tunes']
      ]
    }
  ];

  return {
    props: {
      projects
    }
  }
}