import Card from 'react-bootstrap/Card';

import OutLink from 'components/elements/OutLink';

import styles from 'styles/components/elements/ProjectCard.module.css';

export default function ProjectCard({ title, description, links }) {
  const formattedLinks = links.map(linkInfo => {
    return (
      <li key={linkInfo[0]}>
        <OutLink href={linkInfo[1]}>{linkInfo[0]}</OutLink>
      </li>
    );
  });

  return (
    <Card className={`${styles.card}`}>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ul className={styles.linkList}>
        {formattedLinks}
      </ul>
    </Card>
  );
}