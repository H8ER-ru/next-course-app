import {TextAreaProps} from "./TextArea.props";
import cn from "classnames";
import style from './TextArea.module.css'
import {ForwardedRef, forwardRef} from "react";

export const TextArea = forwardRef(({error, className, ...props}: TextAreaProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(className,style.textAreaWrapper)}>
      <textarea
        className={cn(style.textArea, {
          [style.error] : error
        })}
        {...props}/>
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </div>

  )
})