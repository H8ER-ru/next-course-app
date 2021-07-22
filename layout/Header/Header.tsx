import React from 'react';
import {HeaderProps} from "./Header.props";

const Header = ({...props}: HeaderProps) : JSX.Element=> {
  return (
    <header {...props}>
      header
    </header>
  );
};

export default Header;