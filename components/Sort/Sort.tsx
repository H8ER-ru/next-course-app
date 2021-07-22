import React from 'react';
import {SortEnum, SortProps} from "./Sort.props";
import SortIcon from './sort.svg'
import style from './Sort.module.css'
import cn from 'classnames'

const Sort = ({sort, setSort, className, ...props}:SortProps): JSX.Element => {
  return (
    <div className={cn(style.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [style.active] : sort === SortEnum.Rating
        })}
      >
        <SortIcon className={style.sortIcon}/> По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [style.active] : sort === SortEnum.Price
        })}
      >
        <SortIcon className={style.sortIcon}/> По цене
      </span>
    </div>
  );
};

export default Sort;