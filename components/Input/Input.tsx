import {InputProps} from "./Input.props";
import cn from "classnames";
import style from './Input.module.css'
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <input
      className={cn(className, style.input)}
      ref={ref}
      {...props}/>
  )
})