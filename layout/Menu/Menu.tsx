import React, {useContext} from 'react';
import {AppContext} from "../../context/app.context";
import {firstLevelMenuItem, PageItem} from "../../interfaces/menu.interface";
import Link from "next/link";
// @ts-ignore
import cn from 'classnames'

import style from './Menu.module.css'
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";


export const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const router = useRouter()

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
              <div className={cn(style.secondLevelBlock, {
                [style.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
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
          <Link
            key={p._id}
            href={`/${route}/${p.alias}`}>
            <a className={cn(style.thirdLevel, {
              [style.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
            })}>
              {p.category}
            </a>
          </Link>
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
