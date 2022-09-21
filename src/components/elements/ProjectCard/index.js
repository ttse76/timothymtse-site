import Card from 'react-bootstrap/Card';

export default function ProjectCard({ title, description, links }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}