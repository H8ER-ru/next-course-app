import React, {useEffect, useReducer} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import style from './TopPageComponent.module.css'
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import {TopLevelCategory} from "../../interfaces/toppage.interface";
import HhData from "../../components/HhData/HhData";
import Advantages from "../../components/Advantages/Advantages";
import {SortEnum} from "../../components/Sort/Sort.props";
import Sort from "../../components/Sort/Sort";
import {SortReducer} from "./sort.reducer";
import Product from "../../components/Product/Product";

export const TopPageComponent = ({page, products, firstCategory} : TopPageComponentProps) : JSX.Element => {

  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(SortReducer, {products, sort: SortEnum.Rating})

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort})
  }

  useEffect(() => {
    dispatchSort({type: "reset", initialState: products})
  }, [products])

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='grey' size='small'>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div>
        {sortedProducts && sortedProducts.map(item => (
          <Product key={item._id} product={item}/>
        ))}
      </div>
      <div className={style.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        {products && <Tag color='red' size='small'>hh.ru</Tag>}
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 &&
        <>
            <Htag tag='h2'>Преимущества</Htag>
            <Advantages advantages={page.advantages} />
        </>
      }
      {page.seoText &&
        <div
          className={style.seo}
          dangerouslySetInnerHTML={{__html: page.seoText}}
        />
      }
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(tag => (
        <Tag key={tag} color='primary'>{tag}</Tag>
      ))}
    </div>
  )
}