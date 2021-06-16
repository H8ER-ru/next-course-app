import React from 'react';
import {TagProps} from "./Tag.props";
// @ts-ignore
import cn from "classnames"
import style from './Tag.module.css'

const Tag = ({ size='small', color='ghost', children, href, className, ...props}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(style.tag, className, {
        [style.small]: size == 'small',
        [style.big]: size == 'big',
        [style.primary]: color == 'primary',
        [style.ghost]: color == 'ghost',
        [style.red]: color == 'red',
        [style.grey]: color == 'grey',
        [style.green]: color == 'green',
      })}
      {...props}
    >{
      href
      ? <a href={href}>{children}</a>
        :
        <>{children}</>
    }
    </div>
  )
}

export default Tag