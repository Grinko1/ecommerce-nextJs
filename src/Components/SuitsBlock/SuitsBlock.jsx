import Link from 'next/link';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import PinkHeader from '../PinkHeader/PinkHeader';
import style from './SuitsBlock.module.scss';
import cn from 'classnames'

const SuitsBlock = () => {
    return (
        <>
        <div className={style.suits}>
            <PinkHeader pinkText={'Костюмы'} doubleText={'Костюмы'}/>
            <div className={style.items}>
                <div className={style.item}>
                    <img className={style.suit_img} src="/img/suit2.png" alt=""/>
                    <img className={cn(style.suit_price1, style.suit)} src="/icons/price1.png" alt=""/>
                    <span className={cn(style.suit_price1, style.price)}>1099 &#8381;</span>

                    <img className={cn(style.suit_price2, style.suit)} src="/icons/price2.png" alt=""/>
                    <span className={cn(style.suit_price2, style.price)}>899 &#8381;</span>
                </div>
                <div className={style.item}>
                    <img className={style.suit_img} src="/img/suit3.png" alt=""/>
                    <img className={cn(style.suit_price3, style.suit)} src="/icons/price2.png" alt=""/>
                    <span className={cn(style.suit_price3, style.price)}>899 &#8381;</span>

                    <img className={cn(style.suit_price4, style.suit)} src="/icons/price1.png" alt=""/>
                    <span className={cn(style.suit_price4, style.price)}>1899 &#8381;</span>
                </div>
                <div className={style.item}>
                    <img className={style.suit_img} src="/img/suit4.png" alt=""/>
                    <img className={cn(style.suit_price5, style.suit)} src="/icons/price1.png" alt=""/>
                    <span className={cn(style.suit_price5, style.price)}>1899 &#8381;</span>

                    <img className={cn(style.suit_price6, style.suit)} src="/icons/price2.png" alt=""/>
                    <span className={cn(style.suit_price6, style.price)}>1099 &#8381;</span>
                </div>
                <div className={style.item}>
                    <img className={style.suit_img} src="/img/suit5.png" alt=""/>
                    <img className={cn(style.suit_price7, style.suit)} src="/icons/price2.png" alt=""/>
                    <span className={cn(style.suit_price7, style.price)}>1099 &#8381;</span>

                    <img className={cn(style.suit_price8, style.suit)} src="/icons/price1.png" alt=""/>
                    <span className={cn(style.suit_price8, style.price)}>1899 &#8381;</span>
                </div>
            </div>
            
        </div>
        <Link href='/products'>
        <BtnWatchAll img={'/icons/watch-all.png'} text={'Cмотреть все'}/>
        </Link>
      
        </>
    );
};

export default SuitsBlock;