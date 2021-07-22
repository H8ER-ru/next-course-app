import React from 'react';
import {AdvantagesProps} from "./Advantages.props";
import CheckIcon from './advantage.svg'
import style from './Advantages.module.css'

const Advantages = ({ advantages }: AdvantagesProps) :JSX.Element => {
  return (
    <ul>
      {advantages.map(advantage => (
        <li
          className={style.advantage}
          key={advantage._id}>
            <CheckIcon/>
            <div className={style.title}>{advantage.title}</div>
            <hr className={style.vline}/>
            <div>{advantage.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Advantages;