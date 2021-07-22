import React from 'react';
import {FooterProps} from "./Footer.props";
import style from './Footer.module.css'
// @ts-ignore
import cn from 'classnames'

const Footer = ({className, ...props}: FooterProps) : JSX.Element => {
  return (
    <footer
      className={cn(className, style.footer)}
      {...props}>
      <div>OwlTop © 2020 - 2021 Все права защищены</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;