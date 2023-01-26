import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';
import { products } from 'data/products';
import style from '../styles/New.module.scss';

const New = () => {
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
