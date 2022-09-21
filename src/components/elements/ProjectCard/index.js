import Card from 'react-bootstrap/Card';

import styles from 'styles/components/elements/ProjectCard.module.css';

export default function ProjectCard({ title, description, links }) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}