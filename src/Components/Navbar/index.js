import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
        <NavLogo to='/'>ReType</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='low-balling'>Low-balling Feature</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='sentiment'>Sentiment Analysis</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='figma'>To Figma UI</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
