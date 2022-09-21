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
      title: 'Discord Tunes',
      description: `A framework to create your own music playing bot for discord. Currently only supports YouTube.`,
      links: [
        ['View on GitHub', 'https://github.com/ttse76/discord-tunes']
      ]
    },
    {
      title: 'Video Library',
      description: `A YouTube-like site to help organize 
      videos on your local device or host your own video site. Currently a work in progress.`,
      links: [
        ['View on GitHub', 'https://github.com/ttse76/video-library']
      ]
    }
  ];

  return {
    props: {
      projects
    }
  }
}