
function Navbar({ logo, menuItems }) {
  return (
    <nav>
      <h2>{logo}</h2>

      <ul>
        {menuItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;