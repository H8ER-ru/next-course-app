import React, {useState} from 'react';
import {ProductProps} from "./Product.props";
import cn from "classnames";
import style from './Product.module.css'
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import Divider from "../Divider/Divider";
import Image from "next/image";
import {Review} from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Product = ({ product, className, ...props}: ProductProps): JSX.Element => {

  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)

  return (
    <>
      <Card className={style.product}>
        <div className={style.logo}>
          <Image
            width={70}
            height={70}
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}/>
        </div>
        <div className={style.title}>
          {product.title}
        </div>
        <div className={style.price}>
          {priceRu(product.price)}
          {product.oldPrice &&
          <Tag
              className={style.oldPrice}
              color="green" >
            {priceRu(product.price - product.oldPrice)}
          </Tag>}
        </div>
        <div className={style.credit}>
          {priceRu(product.credit)}/<span className={style.mounth}>мес</span>
        </div>
        <div className={style.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating}/>
        </div>
        <div className={style.tags}>
          {product.categories.map(item => <Tag key={item} className={style.category} color="ghost">{item}</Tag>)}
        </div>
        <div className={style.priceTitle}>цена</div>
        <div className={style.creditTitle}>кредит</div>
        <div className={style.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
        <Divider className={style.hr}/>
        <div className={style.description}>{product.description}</div>
        <div className={style.feature}>
          {product.characteristics.map(item => (
            <div
              key={item.name}
              className={style.characteristic}>
            <span className={style.characteristicName}>
              {item.name}
            </span>
              <span className={style.characteristicDots}>

            </span>
              <span className={style.characteristicValue}>
              {item.value}
            </span>
            </div>
          ))}
        </div>
        <div className={style.advBlock}>
          <div className={style.advantages}>
            <div className={style.advBlockTitle}>Преимущества</div>
            {product.advantages}
          </div>
          {product.disadvantages &&
          <div className={style.disadvantages}>
              <div className={style.advBlockTitle}>Недостатки</div>
            {product.disadvantages}
          </div>}
        </div>
        <Divider className={cn(style.hr, style.hr2)}/>
        <div className={style.actions}>
          <Button appearance="primary">Узнать подробнее</Button>
          <Button
            className={style.reviewButton}
            appearance="ghost"
            onClick={() => setIsReviewOpened(true)}
            arrow={isReviewOpened ? "down" : "right"}>Читать отзывы</Button>
        </div>
      </Card>
      <Card color="blue" className={cn(style.reviews, {
        [style.opened]: isReviewOpened,
        [style.closed]: !isReviewOpened
      })}>
        {product.reviews && product.reviews.map((review) => {
          return (
            <div key={review._id}>
              <Review review={review}/>
              <Divider/>
            </div>
          )
        })}
        <ReviewForm productId={product._id}/>
      </Card>
    </>

  )
}

export default Product