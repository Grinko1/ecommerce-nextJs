
import Link from 'next/link';
import { useSelector } from 'react-redux';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import CardItem from '../CardItem/CardItem';
import PinkHeader from '../PinkHeader/PinkHeader';
import  style from './NewBlock.module.scss';


const NewBlock = () => {
    const newProducts = useSelector(state => state.products.new)
 
   
    return (
        <div>
      <PinkHeader pinkText={'НОВИНКИ'} doubleText={'НОВИНКИ'}/>
        <div className={style.cards}>
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
            ))}
        
      
        </div>
        <Link href='/new'>
        <BtnWatchAll img={'/icons/watch-all.png'} text={'Cмотреть все'} />
        </Link>
       

<div>
        <img className={style.baner} src="/img/baner.png" alt=""/>
</div>
    
        
        </div>
    );
};

export default NewBlock;