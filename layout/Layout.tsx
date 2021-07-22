import React, {FunctionComponent} from 'react';
import {LayoutProps} from "./Layout.props";
import {Sidebar} from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import style from './Layout.module.css'
import {AppContextProvider, IAppContext} from "../context/app.context";
import Up from "../components/Up/Up";

 const Layout = ({children}: LayoutProps) : JSX.Element => {
  return (
    <div className={style.wrapper}>
      <Header className={style.header} />
      <Sidebar className={style.sidebar} />
      <main className={style.body}>
        {children}
      </main>
      <Footer className={style.footer}/>
      <Up/>
    </div>
  );
}

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>)=> {
  return function withLayoutComponent( props: T) : JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component{...props}/>
        </Layout>
      </AppContextProvider>
    )
  }
}