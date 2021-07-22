import React from 'react';
import { HhDataProps } from "./HhData.props";
// @ts-ignore
import cn from 'classnames'
import style from './HhData.module.css'
import Card from "../Card/Card";
import RateIcon from './rate.svg'
import {priceRu} from "../../helpers/helpers";

const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) : JSX.Element => {
  return (
    <div className={style.hh}>
      <Card className={style.count}>
        <div className={style.title}>Всего вакансий</div>
        <div className={style.countValue}>{count}</div>
      </Card>
      <Card className={style.salary}>
        <div>
          <div className={style.hhStatTitle}>Начальный</div>
          <div className={style.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={style.hhStatTitle}>Средний</div>
          <div className={style.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
            <RateIcon/>
          </div>
        </div>
        <div>
          <div className={style.hhStatTitle}>Профессионал</div>
          <div className={style.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
            <RateIcon className={style.filled}/>
          </div>
        </div>

      </Card>
    </div>
  );
};

export default HhData