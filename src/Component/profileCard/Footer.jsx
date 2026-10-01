function Footer({ company, links }) {
  return (
    <footer>
      <h3>{company}</h3>

      {links.map((link) => (
        <a href="#">{link}</a>
      ))}
    </footer>
  );
}

export default Footer;