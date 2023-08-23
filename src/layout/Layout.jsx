import React from 'react';
import { Outlet } from 'react-router-dom';
import NavStyle from './NavStyle';
import Topnav1 from './Topnav';
import FooterStyle from './FooterStyle';

const Layout = () => {
  return (
    <>
      <Topnav1 />
      <NavStyle />
      <Outlet />
      <FooterStyle />
    </>
  );
};

export default Layout;
