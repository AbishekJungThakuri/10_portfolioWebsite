import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

import logo from '../../assets/logo.svg';
import nav_underline from '../../assets/nav_underline.svg';

export const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector('.navbar').style.top = '8px';
      } else {
        document.querySelector('.navbar').style.top = '-100px';
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
  }, [prevScrollPos]);



  
  // Navbar handler
  // var prevScrollpos = window.scrollY;
  // window.onscroll = function () {
  //   var currentScrollPos = window.scrollY;
  //   if (prevScrollpos > currentScrollPos) {
  //     document.querySelector('.navbar').style.top = '8px';
  //   } else {
  //     document.querySelector('.navbar').style.top = '-10vh';
  //   }
  //   prevScrollpos = currentScrollPos;
  // };


  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={nav_underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={nav_underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#service">
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? <img src={nav_underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <img src={nav_underline} alt="" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={nav_underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};
