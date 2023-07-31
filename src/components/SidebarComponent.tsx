// import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const SidebarComponent: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Sidebar collapsed={collapsed}>
      <Menu>
        <MenuItem component={<Link to="/" />}>Notes</MenuItem>
        <MenuItem component={<Link to="/add" />}>Create Note</MenuItem>
        <MenuItem component={<Link to="/archive" />}>Archive</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
