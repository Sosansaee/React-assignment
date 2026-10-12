
function Footer({ company, links }) {
  return (
    <footer className="footer">
      <h3>{company}</h3>

      <div className="footer-links">
        {links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </div>

      <p>© 2026 {company}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
