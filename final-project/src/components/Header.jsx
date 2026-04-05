function Header() {
  return (
    <header style={{ background: "#222", color: "white", padding: "15px", textAlign: "center" }}>
      <h1>Simple Company</h1>
      <nav>
        <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Home</a>
        <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>About</a>
        <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Services</a>
        <a href="#" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;