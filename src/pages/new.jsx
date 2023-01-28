import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';

import { useSelector } from 'react-redux';
import style from '../styles/New.module.scss';

const New = () => {
  const {products} = useSelector(state => state.products)
 
  return (
    <div className={style.products}>
      <div className={style.container}>
        <PinkHeader pinkText={'НОВИНКИ'} doubleText={'НОВИНКИ'} />
        <div className={style.list}>
          {products.map((item) => (
            <CardItem
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
              isFavorite={item.isFavorite}
            />
          ))}
        </div>
        <Instagram />
      </div>
    </div>
  );
};

export default New;
