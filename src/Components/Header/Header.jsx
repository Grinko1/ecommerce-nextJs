import Link from 'next/link';
import { useState } from 'react';
import style from './Header.module.scss';
import cn from 'classnames'
import PullOutCart from '../PullOutCart/PullOutCart';
import NavMenu from '../NavMenu/NavMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import MobileHeader from './MobileHeader';
import InputSearch from '../InputSerch/InputSearch';
import { useSelector } from 'react-redux';

const Header = () => {

        const [isOpenSearch, setIsOpenSearch] = useState(false)
        const [activeMenu, setActiveMenu] = useState(false)
       
        const {cartItems} = useSelector(state => state.cartItems)
        const {favoriteItems} = useSelector(state => state.favoriteItems)
       
       
       
        const openSearch = () => {
         setIsOpenSearch(true)
        }
       
           return (
             <>
             <div className={style.headerMobile}>
            <MobileHeader/>
             </div>
            <div className={style.headerDesktop}>
            <header className={style.header}>
                 <div className={style.headerLeft}>
                     <div className={cn(style.headerBlock , style.pink)}>
                       <img src="/icons/map.png" alt="" className={style.headerIcon}/>
                     <p>Рижская,22</p>
                       </div>
                       <div className={cn(style.headerBlock , style.pink)}>
                       <img src="/icons/phone.png" alt="" className={style.headerIcon} />
                     <p>+71234567890</p>
                       </div>
                 </div>
                  
                   <div className={style.headerBlock}>
                     <Link href='/'>
                     <img src="/icons/logo.png" alt="" className={style.logoImg}/>
                     </Link>
                   
                   </div>
                 
                  
                 <div className={style.headerRight}>
                     <div className={style.headerBlock} onClick={openSearch}>
                       <img src="/icons/search.png" alt="" className={cn(style.headerIcon, style.pink)}/>
                       <p>Поиск</p>
                   </div>
                         <div className={style.headerBtns}>
                         <div className={style.cart}>
                             <Link href='/favorite'>
                             <span>{favoriteItems.length}</span>
                             <img src="/icons/favorite.png" alt="" className={style.headerIcon}/>
                             </Link>
                             </div>
                          <div className={style.cart}>
                             <span>{cartItems.length}</span>
                             <img src="/icons/bag.png" alt="" className={style.headerIcon} onClick={() => setActiveMenu(!activeMenu)} />
                           </div>
                    </div>
                   
                 
                 <PullOutCart active={activeMenu} setActiveMenu={setActiveMenu}/>
               
                 
              
                   </div>
                 
               </header> 
              {
                 isOpenSearch ? 
                 <InputSearch setIsOpenSearch={setIsOpenSearch} />
                 :
                 <NavMenu/>
               }
              {/* <NavMenu/> */}
            </div>
            
               
               </>
    );
};

export default Header;