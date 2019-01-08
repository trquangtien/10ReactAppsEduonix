import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          My React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/github" className="nav-link" activeClassName="active">
                Github
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/reduxstagram" className="nav-link" activeClassName="active">
                Reduxstagram
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/simple-redux" className="nav-link" activeClassName="active">
                Simple Redux
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/simple-store" className="nav-link" activeClassName="active">
                Simple Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie-find" className="nav-link disabled" activeClassName="active">
                Movie Find
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://example.com"
                id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">
                  Action
                </a>{' '}
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
