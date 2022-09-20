export default function OutLink({ children, href, newTab = true}) {
  if (newTab) {
    return (
      <a className="tim-link" href={href} target="_blank" rel="noreferrer">{children}</a>
    )
  }

  return <a className="tim-link" href={href}>{children}</a>
}