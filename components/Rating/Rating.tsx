import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from 'react';
import {RatingProps} from "./Rating.props";
import style from './Rating.module.css'
import StarIcon from './star.svg'
import cn from 'classnames'

const Rating = forwardRef(({ error, isEditable ,setRating, rating, className, ...props}: RatingProps, ref:ForwardedRef<HTMLDivElement>) :JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  function changeDisplay(rating: number) {
    if(!isEditable || !setRating){
      return
    }
    setRating(rating)
  }

  function onClick(number: number) {
    
  }

  function handleSpace(number: number, e: React.KeyboardEvent<SVGElement>) {
    if(e.code != 'Space' && setRating) {
      setRating(number)
    }
  }

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return(
        <span
          className={cn(style.star, {
            [style.filled]: index < currentRating,
            [style.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay( index + 1)}
          onMouseLeave={() => changeDisplay( rating)}
          onClick={() => onClick(index + 1)}
        >
           <StarIcon
             tabIndex={isEditable ? 0 : -1}
             onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1 , e)}
           />
        </span>
      )
    })
    setRatingArray(updatedArray)
  }

  return (
    <div
      ref={ref}
      className={style.ratingWrapper}
      {...props}>
      {ratingArray.map((rating, index) => <span key={index}>{rating}</span>)}
      {error && <span className={style.errorMessage}>{error.message}</span>}
    </div>
  )
})

export default Rating;