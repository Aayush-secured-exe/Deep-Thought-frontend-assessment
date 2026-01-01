import "../navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
        </div>
      </div>

      <div className="navbar-right">
        <img src="/Home.svg" className="nav-icon" alt="home" />
        <img src="/Tools.svg" className="nav-icon" alt="tools" />

        <div className="notification">
          <img src="/Bell.svg" className="nav-icon" alt="bell" />
          <span className="red-dot"></span>
        </div>

        <img src="/Profile.svg" className="profile-img" alt="profile" />

        <div className="more-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
