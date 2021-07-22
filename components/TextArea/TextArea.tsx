import {TextAreaProps} from "./TextArea.props";
import cn from "classnames";
import style from './TextArea.module.css'
import {ForwardedRef, forwardRef} from "react";

export const TextArea = forwardRef(({className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <textarea className={cn(className, style.textArea)} {...props}/>
  )
})