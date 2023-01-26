

import style from './Layout.module.scss'

import Header from "@/Components/Header/Header"
import { Component } from 'react';
import Footer from '@/Components/Footer/Footer';
import MobileMenu from '@/Components/MobileMenu/MobileMenu';

export const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <div className={style.container}>
                {children}
      
        </div>
        <div className={style.mobileMenu}>
          <MobileMenu/>
       </div>
        <Footer/>
            
        </div>
    );
};

export const withLayout = () => {
    return function withLayoutComponent(props){
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}