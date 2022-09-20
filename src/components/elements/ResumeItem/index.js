import Accordion from 'react-bootstrap/Accordion';

export default function ResumeItem({ 
  company,
  startMonth,
  startYear,
  endMonth,
  endYear,
  highlights,
  role,
  eventKey}) {
    const time = endMonth ? `${company} (${startMonth} ${startYear} - ${endMonth} ${endYear})` : `${company} (${startMonth} ${startYear} - Present)`
    return (
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <div style={{ display: 'block' }}>
            <span>{time}</span><br/>
            <span>{role}</span>
          </div>
          </Accordion.Header>
        <Accordion.Body>
          {highlights}
        </Accordion.Body>
      </Accordion.Item>
    );
}