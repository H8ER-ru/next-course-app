import React from 'react';
import {PtagProps} from "./Ptag.props";
// @ts-ignore
import cn from "classnames"
import style from './Ptag.module.css'

const Ptag = ({children, size = 'small', className, ...props} : PtagProps) : JSX.Element => {
  return (
    <p className={cn(style.p, className, {
      [style.small]: size == 'small',
      [style.medium]: size == 'medium',
      [style.big]: size == 'big'
    })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;