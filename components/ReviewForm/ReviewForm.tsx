import React from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import style from './ReviewForm.module.css'
import {Input} from "../Input/Input";
import Rating from "../Rating/Rating";
import {TextArea} from "../TextArea/TextArea";
import Button from "../Button/Button";
import CloseIcon from './close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "./ReviewForm.interface";

const ReviewForm = ({className, productId, ...props}: ReviewFormProps): JSX.Element => {

  const { register, control, handleSubmit } = useForm<IReviewForm>()

  const onSubmit = (data: IReviewForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn(style.reviewForm)}
        {...props}>
        <Input {...register('name')} placeholder="Имя"/>
        <Input
          {...register('title')}
          placeholder="Заголовок отзыва"
          className={style.title}/>
        <div className={style.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            render={({field}) => (
              <Rating
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                rating={field.value}/>
            )}/>

        </div>
        <TextArea
          {...register('description')}
          placeholder="Текст отзыва"
          className={style.description}/>
        <div className={style.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={style.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      <div className={style.success}>
        <div className={style.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо , ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={style.close}/>
      </div>
    </form>
  );
};

export default ReviewForm;