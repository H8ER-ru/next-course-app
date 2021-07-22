import React, {ForwardedRef, forwardRef} from 'react'
import {CardProps} from "./Card.props"
import cn from 'classnames'
import style from './Card.module.css'

const Card = forwardRef(({children, className, color = 'white', ...props}: CardProps, ref:ForwardedRef<HTMLDivElement>) : JSX.Element => {
  return (
    <div className={cn(style.card, className, {
      [style.blue]: color = 'blue'
    })}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Card;