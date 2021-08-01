import React from 'react'
import {ButtonProps} from "./Button.props"
import style from './Button.module.css'
import ArrowIcon from './arrow.svg'
import cn from 'classnames'
import {motion} from "framer-motion";

const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) : JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale : 1.05 }}
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
    </motion.button>
  )
}

export default Button