import {InputProps} from "./Input.props";
import cn from "classnames";
import style from './Input.module.css'
import {ForwardedRef, forwardRef} from "react";

export const Input = forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(style.inputWrapper, className )}>
      <input
        className={cn(style.input, {
          [style.error] : error
        })}
        ref={ref}
        {...props}/>
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </div>

  )
})