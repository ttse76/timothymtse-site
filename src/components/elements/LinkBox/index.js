import OutLink from 'components/elements/OutLink';

export default function LinkBox({ links }) {
  const outLinks = links.map(link => {
    return <OutLink key={link.text} href={link.url} newTab={link.newTab}>{link.text}</OutLink>;
  }).reduce((prevVal, nextVal) => prevVal === null ? nextVal : <span>{prevVal}&nbsp;&nbsp;&nbsp;&nbsp;{nextVal}</span>);

  return (
    <div style={{ textAlign: 'center' }}>
      {outLinks}
    </div>
  );
}