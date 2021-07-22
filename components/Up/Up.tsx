import React, {useEffect} from 'react';
import style from './Up.module.css'
import UpIcon from './Up.svg'
import {useScrollY} from "../../hook/useScroll";
import {useAnimation} from "framer-motion";
import {motion} from "framer-motion";

const Up = (): JSX.Element => {

  const control = useAnimation()
  const y = useScrollY()

  useEffect(() => {
    control.start({opacity: y/document.body.scrollHeight })
  }, [y, control])

  const scrollToTop = () => {
    window && window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      initial={{opacity: 0}}
      animate={control}
      onClick={scrollToTop}
      className={style.up}>
      <UpIcon/>
    </motion.button>
  );
};

export default Up;