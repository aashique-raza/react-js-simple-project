import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://pngfre.com/wp-content/uploads/nike-logo-1-1-1024x1024.png"
          alt="logo"
        />
      </div>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">gallery</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <div className="login">
        <a href="#">login</a>
      </div>
    </nav>
  );
}

export default Nav;
