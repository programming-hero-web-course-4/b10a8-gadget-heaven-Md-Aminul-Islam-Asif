import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 fixed top-0 w-full z-10 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">GadgetHeaven</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
          <li><NavLink to="/stats" activeClassName="active">Stats</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
