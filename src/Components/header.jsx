import globe from "../assets/globe2.png";

function Header({ setShowForm }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={globe} alt="Globe logo" />
          <h1>My Travel Journal</h1>
        </div>

        <button
          className="add-btn"
          onClick={() => setShowForm(true)}
        >
          + Add Destination
        </button>
      </nav>
    </header>
  );
}

export default Header;