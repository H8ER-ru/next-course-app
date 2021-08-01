import React, {useEffect, useState} from 'react'
import {HeaderProps} from "./Header.props"
import cn from "classnames"
import Logo from '../Logo.svg'
import style from './Header.module.css'
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import {motion} from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import {useRouter} from "next/router";

const Header = ({className,...props}: HeaderProps) : JSX.Element=> {

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const router = useRouter()
  useEffect(() => {
    setIsOpened(false)
  }, [router])


  const variants = {
    opened: {
      opacity: 1,
      x:0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '100%'
    }
  }

  return (
    <header className={cn(className, style.header)} {...props}>
      <Logo/>
      <ButtonIcon
        onClick={() => setIsOpened(true)}
        appearance='white'
        icon='menu'
      />
      <motion.div
        variants={variants}
        initial={'closed'}
        animate = { isOpened ? 'opened': 'closed'}
        className={style.mobileMenu}>
        <Sidebar />
        <ButtonIcon
          onClick={() => setIsOpened(false)}
          className={style.menuClose}
          appearance='white'
          icon='close'/>
      </motion.div>
    </header>
  );
};

export default Header;