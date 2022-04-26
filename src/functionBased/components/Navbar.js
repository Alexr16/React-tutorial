import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
  {
    id: 3,
    path: '/*',
    text: 'NotMatch',
  }];

  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
          )}

        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          {links.map((link) => (
            <li
              key={link.id}
              style={{
                padding: '1rem',
                listStyle: 'none',
              }}
            >
              <NavLink
                style={({ isActive }) => ({
                  display: 'block',
                  textDecoration: 'none',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                })}
                onClick={() => closeMenu()}
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
