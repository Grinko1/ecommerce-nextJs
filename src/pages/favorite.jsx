// import ModalEmptyFavorite from '../../Components/ModalEmptyFavorite/ModalEmptyFavorite'
import Benefits from '@/Components/Benefits/Benefits';
import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import ModalEmptyFavorite from '@/Components/ModalEmptyFavorite/ModalEmptyFavorite';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';
import { newProducts } from 'data/new';
import { useSelector } from 'react-redux';
import style from '../styles/Favorite.module.scss';
// import { useSelector } from 'react-redux';

const Favorite = () => {
    const favoriteItems = useSelector(state => state.favoriteItems.favoriteItems)
  console.log(favoriteItems.length);
  return (
    <div className={style.favorite}>
      {favoriteItems.length === 0 ? (
        <ModalEmptyFavorite />
      ) : (
        <div className={style.container}>
          <PinkHeader pinkText={'список желаний'} doubleText={'желания'} />
          <div className={style.items}>
            {favoriteItems.map((item) => (
              <CardItem
                img={item.img}
                name={item.name}
                price={item.price}
                id={item.id}
                key={item.id}
                isFavorite={item.isFavorite}
              />
            ))}
          </div>
          <Benefits />
          <Instagram />
        </div>
      )}
    </div>
  );
};

export default Favorite;
