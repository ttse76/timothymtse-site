import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import styles from 'styles/components/elements/ResumeItem.module.css';

export default function ResumeItem({ 
  company,
  startMonth,
  startYear,
  endMonth,
  endYear,
  highlights,
  role,
  eventKey}) {
    const time = endMonth ? `${role} (${startMonth} ${startYear} - ${endMonth} ${endYear})` : `${role} (${startMonth} ${startYear} - Present)`
    const onToggle = useAccordionButton(eventKey);

    return (
      <Card className={styles.card}>
        <Card.Header className="p-0 pb-3">
          <div id="accordionToggle">
            <span className="tim-link" onClick={onToggle}>{company}</span>
            <br/>
            <span style={{}}>{time}</span>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body className={`${styles.cardBody} p-0`}>
            <p>{highlights}</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
}