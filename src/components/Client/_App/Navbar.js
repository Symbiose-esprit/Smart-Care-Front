import React from "react";
import Link from "../../../utils/ActiveLink";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <div id="navbar" className="navbar-area sticky-top">
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Home
                    </a>
                  </Link>
                </li>

                {/* <li className="nav-item">
                                    <Link href="/home/Home" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Admin</a>
                                    </Link>
                                </li> */}

                <li className="nav-item">
                  <Link
                    href="/client/doctor/departments"
                    activeClassName="active"
                  >
                    <a onClick={toggleNavbar} className="nav-link">
                      Predict illness
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Services
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/client/services/services"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Services
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/services/service-details"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Doctor Call
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/doctor/departments"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Predict your illness
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/blockchain/ETHswap"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Payment
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/appointments/schedule"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Schedule
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/client/other/faq" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          FAQ's
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Doctors
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/client/doctor/doctors"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Doctors
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/doctor/doctor-details"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Doctor Details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Blog
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/client/blog/blog" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/blog/blog-details"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Blog Details
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/client/other/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Contact
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/client/other/about" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      About
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="nav-link dropdown-toggle"
                    >
                      Login
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/client/login/sign-up"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Sign Up
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/client/login/sign-in"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Sign In
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="nav-srh">
              <form>
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  placeholder="Search..."
                />

                <button className="search-icon icon-search">
                  <i className="icofont-search-1"></i>
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
