import React from "react";
import logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg"
import Store from "../assets/images/store.svg"

function Nav() {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <ul className="list-styled">
            <li>
              <img src={logo} alt="Apple" />
            </li>
            <li>
              <a className="link-styled">Store</a>
            </li>
            <li>
              <a className="link-styled">Mac</a>
            </li>
            <li>
              <a className="link-styled">İpad</a>
            </li>
            <li>
              <a className="link-styled">İphone</a>
            </li>
            <li>
              <a className="link-styled">Watch</a>
            </li>
            <li>
              <a className="link-styled">Airpods</a>
            </li>
            <li>
              <a className="link-styled">Tv & Home</a>
            </li>
            <li>
              <a className="link-styled">Entertainment</a>
            </li>
            <li>
              <a className="link-styled">Accessories</a>
            </li>
            <li>
              <a className="link-styled">Supported</a>
            </li>
            <li>
              <img src={Search} alt="search" />
            </li>
            <li>
              <img src={Store} alt="store" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
