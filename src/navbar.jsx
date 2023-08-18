const Navbar = function Navbar() {
  return (
    <div className="fixed-top bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex flex-row-reverse">
          <ul className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Acceso Clientes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="http://www.sinotracking.com"
                  >
                    Sinotracking
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="http://www.iopgps.com">
                    WanWay
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarLeftAlignExample"
                aria-controls="navbarLeftAlignExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Global Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
