import React, { useState } from 'react';
import './components/navbar.css';
import { FaHome, FaBars, FaUser, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: '/Home',
      name: 'Home',
      icon: <FaHome />,
    },
    {
      path: '/About',
      name: 'About',
      icon: <FaUser />,
    },
    {
      path: '/Contact',
      name: 'Contact',
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      <div>
        <div className="seminavbar">
          <div>
            <h4 className='logo' style={{marginLeft:'99px'}}>FITNESS FREAK<img className='hu'></img></h4>
          </div>
          {/* Add a little gap here, you can adjust the margin as needed */}
          {/* <div style={{ marginLeft: '40px' }}>
            <FaBars onClick={toggle} /> */}
          </div>
        </div>
      {/* </div> */}

      <div className="container">
        <div style={{ width: isOpen ? '14%' : '50px' }} className="sidebar">
          <div className="top_section">
            <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
              <FaBars className='tsveer' onClick={toggle} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
