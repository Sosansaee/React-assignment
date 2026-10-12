function Navbar({ logo, menuItems }) {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">{logo}</h2>

      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar