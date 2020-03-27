import React  from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

export function Nav() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" activeClassName='is-active'>
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dialogs" className="nav-link" activeClassName='is-active'>
                Message
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="news" className="nav-link" activeClassName='is-active'>
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/music" className="nav-link" activeClassName='is-active'>
                Music
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link" activeClassName='is-active'>
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className="nav-link" activeClassName='is-active'>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  
}
