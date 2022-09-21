import PageWrapper from "components/document/PageWrapper";
import ProjectCard from "components/elements/ProjectCard";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects({ projects }) {
  const projectCards = projects.map(project => {
    return (
      <Col lg={3} key={project.title}>
        <ProjectCard {...project} />
      </Col>
    );
  });
  
  return (
    <PageWrapper title="Projects" backButton={true}>
      <Row>
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
    }
  ];

  return {
    props: {
      projects
    }
  }
}