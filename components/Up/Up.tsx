import React, {useEffect} from 'react';
import style from './Up.module.css'
import {useScrollY} from "../../hook/useScroll";
import {useAnimation} from "framer-motion";
import {motion} from "framer-motion";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

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
    <motion.div
      initial={{opacity: 0}}
      animate={control}
      className={style.up}>
      <ButtonIcon
        onClick={scrollToTop}
        appearance='primary'
        icon='up'/>
    </motion.div>
  );
};

export default Up;