import React from 'react'
import {ButtonIconProps, icons} from "./ButtonIcon.props"
import style from './ButtonIcon.module.css'
import cn from 'classnames'

const ButtonIcon = ({appearance, icon, className, ...props}: ButtonIconProps) : JSX.Element => {

  const IconComp = icons[icon]

  return (
    <button
      className={cn(style.button, className,{
        [style.primary] : appearance === 'primary',
        [style.white] : appearance === 'white'
      })}
      {...props}
    >
    <IconComp/>
    </button>
  )
}

export default ButtonIcon