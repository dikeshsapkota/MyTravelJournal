import globe from "../assets/globe2.png";

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={globe} alt="Globe logo" />
        <h1>My Travel Journal</h1>
      </nav>
    </header>
  );
}

export default Header;