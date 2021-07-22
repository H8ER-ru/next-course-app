import React from 'react';
import {DividerProps} from "./Divider.props";
import cn from "classnames";
import style from './Devider.module.css'

const Divider = ({className, ...props}: DividerProps): JSX.Element => {
  return (
    <hr className={cn(className, style.hr)} {...props}/>
  );
};

export default Divider;