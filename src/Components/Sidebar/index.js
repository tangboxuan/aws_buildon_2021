import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SidebarElements';
  
  const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to='about'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              About
            </SidebarLink>
            <SidebarLink
              to='low-balling'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Low-balling Feature
            </SidebarLink>
            <SidebarLink
              to='sentiment'
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Sentiment Analysis
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='figma'>To Figma UI</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
  };
  
  export default Sidebar;
  