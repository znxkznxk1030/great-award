import React from "react";
import { Link } from "react-router-dom";
import { menulist } from "./model-navbar";
import "./style-navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menulist,
      isMenuToggleOn: false,
    };
  }

  toggleMenu(e) {
    e.stopPropagation();

    this.setState(({ isMenuToggleOn }) => ({
      isMenuToggleOn: !isMenuToggleOn,
    }));
  }

  render() {
    return (
      <header>
        <div className="container">
          <Link to="/">
            <h1 className="logo">
              great<span>awards</span>
            </h1>
          </Link>
          <nav
            className={
              "site-nav " +
              (this.state.isMenuToggleOn ? "site-nav--open " : " ")
            }
          >
            <ul>
              {this.state.menulist.map((menu, index) => {
                return (
                  <li key={index}>
                    <Link to={menu.link}>
                      <a href="">
                        <i
                          className={" fa " + menu.icon + " site-nav--icon "}
                        ></i>
                        {menu.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="menu-toggle" onClick={this.toggleMenu.bind(this)}>
            <div
              className={
                "hamburger " +
                (this.state.isMenuToggleOn ? "hamburger--open " : " ")
              }
            ></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
