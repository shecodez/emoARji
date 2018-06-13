import React from "react";

const Header = () => {
  return (
    <header className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            <i className="fa fa-smile material-icons" aria-hidden="true" />
            EmoARji
            <i
              className="fa fa-frown material-icons right"
              aria-hidden="true"
            />
          </a>

          <ul className="left">
            <li>
              <a href="#!">
                <i className="fa fa-bars material-icons" />
              </a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href="#!">
                <i className="fa fa-lock material-icons" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
