import { useEffect, useState } from 'react';
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
    const [collapsed, setCollapsed] = useState(true);
    const [toggleText, setToggleText] = useState('See More');

    const onToggle = useAccordionButton(eventKey);

    useEffect(() => {
      setToggleText(collapsed ? 'See More' : 'See Less');
    }, [collapsed]);

    return (
      <Card className={styles.card}>
        <Card.Header className={`${styles.cardHeader} p-0 pb-3`}>
          <div id="accordionToggle">
            <span>
              <span className={`${styles.companyName}`}>{company}</span>
              &nbsp;&nbsp;
              <span className={`tim-link ${styles.toggle}`} onClick={() => { onToggle(); setCollapsed(!collapsed)}}>{toggleText}</span>
            </span>
            <br/>
            <span style={{ fontStyle: 'italic' }}>{time}</span>
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