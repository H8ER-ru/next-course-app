import React from 'react';
import {SidebarProps} from "./Sidebar.props" ;
import { Menu } from "../Menu/Menu";
import Search from "../../components/Search/Search";
import Logo from '../Logo.svg'
import style from './Sidebar.module.css'

export const Sidebar = ({...props }: SidebarProps) : JSX.Element => {
  return (
    <div className={style.sidebar} {...props}>
      <Logo/>
      <Search/>
      <Menu />
    </div>
  );
}