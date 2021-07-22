import React from 'react'
import {ButtonProps} from "./Button.props"
import style from './Button.module.css'
import ArrowIcon from './arrow.svg'
import cn from 'classnames'

const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) : JSX.Element => {
  return (
    <button
      className={cn(style.button, className,{
        [style.primary] : appearance === 'primary',
        [style.ghost] : appearance === 'ghost'
      })}
      {...props}
    >
      {children}
      {arrow != 'none' &&
        <span className={cn(style.arrow, {
          [style.down]: arrow == "down"
        })}>
            <ArrowIcon />
        </span>
      }
    </button>
  )
}

export default Button