import React, {useContext} from 'react';
import {AppContext} from "../../context/app.context";
import {firstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import Link from "next/link";
import cn from 'classnames'
import style from './Menu.module.css'
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import {motion} from "framer-motion";


export const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const router = useRouter()

  const animationVariants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  }
  const animationVariantsChildren = {
    visible: {
      opacity: 1,
      height: 30
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  }

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if(m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened
      }
      return m
    }))
  }

  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <a >
                <div className={cn(style.firstLevel, {
                  [style.firstLevelActive]: m.id == firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={style.secondBlock}>
        {menu.map(m => {
          if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])){
            m.isOpened = true
          }
          return(
            <div key={m._id.secondCategory} onClick={() => openSecondLevel(m._id.secondCategory)}>
              <div className={style.secondLevel}>
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={animationVariants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={style.secondLevelBlock}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
    return (
      <>
        {pages.map(p => (
          <motion.div
            key={p._id}
            variants={animationVariantsChildren}
          >
            <Link
              href={`/${route}/${p.alias}`}>
              <a className={cn(style.thirdLevel, {
                [style.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
              })}>
                {p.category}
              </a>
            </Link>
          </motion.div>
        ))}
      </>
    )
  }

  return (
    <div className={style.menu}>
      {buildFirstLevel()}
    </div>
  );
};
