import Link from 'next/link';
import { useState } from 'react';
// import InputSearch from '../InputSerch/InputSearch';
import style from './Header.module.scss';
import cn from 'classnames'

const MobileHeader = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const openSearch = () => {
        setIsOpenSearch(true)
       }
    return (
        <>
        <div className={style.mobileMenu}>
            <div className={style.mobileMenuLogo}>
                <Link href='/'>
                <img src="/icons/logo.png" alt="" className={style.logoImg}/>
                </Link>
         
            </div>
        
         <div className={style.mobileMenuRight}>
                <img src="/icons/phone.png" alt="" className={style.headerIcon} />
              <p className={style.pink}>+71234567890</p>
              <img src="/icons/search.png" alt="" className={cn(style.headerIcon, style.end)} onClick={openSearch}/>
          </div>
                
            
        </div>
        {/* {
          isOpenSearch ? 
          <InputSearch setIsOpenSearch={setIsOpenSearch} />
          :
          ''
        } */}
        </>
    );
};

export default MobileHeader;