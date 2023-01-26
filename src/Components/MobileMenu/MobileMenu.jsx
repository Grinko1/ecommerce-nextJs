import { useState } from 'react';
import PullOutCart from '../PullOutCart/PullOutCart';
import PullOutMobileMenu from '../PullOutMobileMenu/PullOutMobileMenu';
import style from './MobileMenu.module.scss';
import cn from 'classnames'
import Link from 'next/link';

const MobileMenu = () => {
    const [activeCart, setActiveCart] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className={cn(style.mobileMenu,style.show)}>
      
             <div className={style.item} onClick={() => setOpenMenu(!openMenu)}>
             <img src="/icons/icon_menu.png" alt=""/>
             <span>Меню</span>
             </div>
             <div className={style.item} onClick={() => setActiveCart(!activeCart)} >
             <img src="/icons/cart.png" alt=""/>
             <span>Корзина</span>
             </div>
             <Link href='/favorite'>
             <div className={style.item}>
             <img src="/icons/favorite.png" alt=""/>
             <span>Избранное</span>
             </div>
             </Link>
             
        <PullOutCart active={activeCart} setActiveMenu={setActiveCart}/>
        
         <PullOutMobileMenu active={openMenu} setActiveMenu={setOpenMenu}/>
        </div>
    );
};

export default MobileMenu;