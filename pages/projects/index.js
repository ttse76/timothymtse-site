import PageWrapper from "components/document/PageWrapper";
import ProjectCard from "components/elements/ProjectCard";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects({ projects }) {
  const projectCards = projects.map(project => {
    return (
      <Col xl={3} lg={6} md={6} key={project.title} className="pb-2">
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
      description: `Built from scratch with Next.JS, self deployed on a custom cloud server.`,
      links: [
        ['View on GitHub', 'https://github.com/ttse76/timothymtse-site']
      ]
    },
    {
      title: 'Stable Diffusion Discord Bot',
      description: `A Discord Bot to interact with the Stable Diffusion API.`,
      links: [
        ['View on GitHub', 'hhttps://github.com/ttse76/stable-diffusion-discord']
      ]
    },
    {
      title: 'Stable Diffusion Request Builder',
      description: 'A JavaScript based request builder for the Stable Diffusion API',
      links: [
        ['View on GitHub', 'https://github.com/ttse76/stable-diffusion-api-request-builder'],
        ['Available on NPM', 'https://www.npmjs.com/package/stable-diffusion-api-request-builder']
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