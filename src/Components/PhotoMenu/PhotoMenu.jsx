
import Link from 'next/link';
import style from './PhotoMenu.module.scss';
import cn from 'classnames'

const PhotoMenu = () => {
    return (
        <div className={style.photomenu}>
            <div className={style.left}>
                <div className={style.photoBig}>
                <img className={style.photo_big} src="/img/tshirts.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/top'>
                    <img className={cn(style.pinkName_bg, style.tshirts)} src="/icons/tshirt.png" alt=""/>
                   <span className={style.tshirts}>футболки</span> 
                    </Link>
                 
                    </div>
                </div>   
                              <div className={style.photoSmall}>
                <img className={style.photo_small} src="/img/pants.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/bottom'>
                    <img className={cn(style.pinkName_bg, style.dresses)} src="/icons/dress.png" alt=""/>
                    <span className={cn(style.dresses)}>низ</span> 
                    </Link>
 
                    </div>
                
                </div>
                <div className={style.photoSmall_1}>
                <img className={style.photo_small} src="/img/jackets.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/top'>
                    <img className={cn(style.pinkName_bg, style.suits)} src="/icons/dress.png" alt=""/>
                    <span className={cn( style.suits)}>верх</span> 
                    </Link>
            
                    </div>
                </div>
               
            </div>
            <div className={style.right}>
            <div className={style.photoBig}>
                <img className={style.photo_big} src="/img/hoodie.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/jackets'>
                    <img className= {cn(style.pinkName_bg, style.hoodie)} src="/icons/hoodie.png" alt=""/>
                    <span className= {cn(style.rotateHoodie, style.hoodie)}>худи</span>
                    </Link>
                 
                    </div>
                </div>
                <div className={style.photoSmall}>
                <img className={style.photo_small} src="/img/dresses.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/dresses'>
                    <img className={cn(style.pinkName_bg, style.dresses)} src="/icons/dress.png" alt=""/>
                    <span className={cn(style.dresses)}>платья</span> 
                    </Link>
 
                    </div>
                
                </div>
                <div className={style.photoSmall_1}>
                <img className={style.photo_small} src="/img/suits.png" alt=""/>
                <div className={style.pinkName}>
                    <Link href='/products/suits'>
                    <img className={cn(style.pinkName_bg, style.suits)} src="/icons/dress.png" alt=""/>
                    <span className={cn( style.suits)}>костюмы</span> 
                    </Link>
            
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PhotoMenu;