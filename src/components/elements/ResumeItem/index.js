import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Link from 'next/link';

import styles from 'styles/components/elements/ResumeItem.module.css';
import { AccordionContext } from 'react-bootstrap';

export default function ResumeItem({ 
  company,
  startMonth,
  startYear,
  endMonth,
  endYear,
  highlights,
  role,
  companyLink,
  eventKey}) {
    const { activeEventKey } = useContext(AccordionContext);
    const time = endMonth ? `${role} (${startMonth} ${startYear} - ${endMonth} ${endYear})` : `${role} (${startMonth} ${startYear} - Present)`

    const onToggle = useAccordionButton(eventKey);

    const listHighlights = highlights.map((highlight, i) => <li key={i}>{highlight}</li>)

    return (
      <Card className={styles.card}>
        <Card.Header className={`${styles.cardHeader} p-0 pb-3`}>
          <div id="accordionToggle">
            <span>
              <Link href={companyLink}><a className={styles.companyName} target={'_blank'}>{company}</a></Link>
              &nbsp;&nbsp;
              <span className={`tim-link ${styles.toggle}`} onClick={() => onToggle()}>{activeEventKey === eventKey ? 'See Less' : 'See More'}</span>
            </span>
            <br/>
            <span style={{ fontStyle: 'italic' }}>{time}</span>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body className={`${styles.cardBody} p-0`}>
            <ul>{listHighlights}</ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
}