import OutLink from "components/elements/OutLink";

export default function Navigation({ links }) {
  const navLinks = links.map((link, i) => <OutLink key={`nav${i}`} href={link.url} newTab={link.newTab}>{link.text}</OutLink>)
  .reduce((prevVal, nextVal) => prevVal === null ? nextVal : <span>{prevVal}&nbsp;&nbsp;|&nbsp;&nbsp;{nextVal}</span>);

  return (
    <div style={{ textAlign: 'center' }}>
      <nav>
        {navLinks}
      </nav>
    </div>
  );
}