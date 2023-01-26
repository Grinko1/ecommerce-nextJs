import Link from 'next/link';
import { useState } from 'react';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import style from './ModalEmptyFavorite.module.scss';
import cn from 'classnames'

const ModalEmptyFavorite = () => {
    const [active, setActive] = useState(true)

 
    return (
        <div className={ cn(style.favoriteModal,{[style.active] : active == true})} onClick={() => setActive(false)}>
        <div className={style.modalContent} onClick={e => e.stopPropagation()}>
            <div className={style.modalClose}>
                <Link href='/'>
                  <img className={style.closeIcon} src="/icons/close-icon.png" alt="" onClick={() => setActive(false)}/>
                </Link>

            </div>
            <div className={style.modalHeader}>
                <img className={style.canlikeImg} src="/icons/can-like.png" alt=""/>
            </div>
            <div className={style.modal_main}>
            <img className={style.icon} src="/icons/favorite-heart.png" alt=""/>
            <div className={style.text}>
            Похоже тебе еще ничего не запало
               <br/> в сердечко....
     
            </div>
            <Link href='/'>
            <BtnWatchAll img={'/icons/watch-all.png'} text={'на главную'} />
            </Link>
          
            </div>
            
     


        </div>

    </div>
    );
};

export default ModalEmptyFavorite;