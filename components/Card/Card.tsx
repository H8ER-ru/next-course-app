import React from 'react';
import {CardProps} from "./Card.props";
// @ts-ignore
import cn from 'classnames'
import style from './Card.module.css'

const Card = ({children, className, color = 'white', ...props}: CardProps) : JSX.Element => {
  return (
    <div className={cn(style.card, className, {
      [style.blue]: color = 'blue'
    })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;