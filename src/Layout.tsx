import React from 'react';
import { Outlet, Link } from 'react-router-dom'; 

const Layout: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/blogs">Add to Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
