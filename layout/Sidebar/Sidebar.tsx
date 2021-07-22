import React from 'react';
import {SidebarProps} from "./Sidebar.props" ;
import { Menu } from "../Menu/Menu";
import Search from "../../components/Search/Search";

export const Sidebar = ({...props }: SidebarProps) : JSX.Element => {
  return (
    <div {...props}>
      <Search/>
      <Menu />
    </div>
  );
}