import React from 'react';
import {ReviewProps} from "./Review.props";
import cn from 'classnames'
import UserIcon from './user.svg'
import style from './Review.module.css'
import { format } from 'date-fns'
import ru from 'date-fns/locale/ru'
import Rating from "../Rating/Rating";

export const Review = ({review, className, ...props}: ReviewProps) : JSX.Element => {

  const {name, title, description, createdAt, _id, rating} = review

  return (
    <div className={style.review} {...props}>
      <UserIcon className={style.user}/>
      <div className={style.title}>
        <span className={style.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={style.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
      </div>
      <div className={style.rating}>
        <Rating rating={rating}/>
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  )
}