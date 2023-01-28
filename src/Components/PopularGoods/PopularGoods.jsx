import Link from 'next/link';
import { useSelector } from 'react-redux';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import CardItem from '../CardItem/CardItem';

import style from './PopularGoods.module.scss';

const PopularGoods = () => {
    const {products} = useSelector(state => state.products)
    return (
        <>
        <div className={style.popular}>
            <div className={style.left}>
           
            <CardItem img={products[0].img} name={products[0].name} price={products[0].price} isFavorite={products[0].isFavorite} id={products[0].id}/>
            <CardItem img={products[1].img} name={products[1].name} price={products[1].price} isFavorite={products[1].isFavorite} id={products[1].id}/>
            </div>
                <div className={style.center}>
                <img className={style.center_img} src="/img/popularbaner.png" alt=""/>
                </div>
         <div className={style.right}>
         <CardItem img={products[3].img} name={products[3].name} price={products[3].price} isFavorite={products[3].isFavorite} id={products[3].id}/>
         </div>
  
        </div>
      
      <Link href='/products'>
      <BtnWatchAll img={'/icons/popular-all.png'} text={'Cмотреть все'} />
      </Link>
       
        </>
    );
};

export default PopularGoods;