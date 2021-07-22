import React, {useState} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import cn from "classnames";
import style from './ReviewForm.module.css'
import {Input} from "../Input/Input";
import Rating from "../Rating/Rating";
import {TextArea} from "../TextArea/TextArea";
import Button from "../Button/Button";
import CloseIcon from './close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewResponse} from "./ReviewForm.interface";
import axios from "axios";
import {API} from "../../helpers/api";

const ReviewForm = ({className, productId, ...props}: ReviewFormProps): JSX.Element => {

  const { register, control, handleSubmit, formState: {errors} , reset} = useForm<IReviewForm>()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewResponse>(API.review.createDemo,
        {...formData, productId})
      if (data.message) {
        setIsSuccess(true)
        reset()
      } else {
        setError('Что-то пошло не так')
      }
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn(style.reviewForm)}
        {...props}>
        <Input
          {...register('name',
            {required:
              {
                value: true,
                message: 'Введите имя'
              }
            }
          )}
          error={errors.name}
          placeholder="Имя"/>
        <Input
          {...register('title',
            {
              required: {
                value: true,
                message: 'Введите заголовок'
              }
            })
          }
          error={errors.title}
          placeholder="Заголовок отзыва"
          className={style.title}/>
        <div className={style.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name='rating'
            rules={{
              required: {
                value: true,
                message: 'Поставьте оценку'
              }
            }}
            render={({field}) => (
              <Rating
                error={errors.rating}
                isEditable
                ref={field.ref}
                setRating={field.onChange}
                rating={field.value}/>
            )}/>

        </div>
        <TextArea
          {...register('description' ,{
            required: {
              value: true,
              message: 'Введите ваш отзыв'
            }
          })}
          error={errors.description}
          placeholder="Текст отзыва"
          className={style.description}/>
        <div className={style.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={style.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess &&
        <div className={cn(style.success, style.panel)}>
            <div className={style.successTitle}>Ваш отзыв отправлен</div>
            <div>Спасибо , ваш отзыв будет опубликован после проверки</div>
            <CloseIcon
                onClick={() => setIsSuccess(false)}
                className={style.close}/>
        </div>
      }
      {error &&
        <div className={cn(style.error, style.panel)}>
          {error}
          <CloseIcon
              onClick={() => setError(undefined)}
              className={style.close}/>
        </div>
      }
    </form>
  );
};

export default ReviewForm;