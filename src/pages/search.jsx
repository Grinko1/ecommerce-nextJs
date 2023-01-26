import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';
import { newProducts } from 'data/new';
import style from '../styles/Search.module.scss';

const SearchPage = () => {
  // const {searchable} = useSelector(state => state.products)
  const searchable = [];
  return (
    <div className={style.search}>
      <div className={style.container}>
        {searchable.length > 0 ? (
          <>
            <PinkHeader pinkText={'Все результаты'} doubleText={'результаты'} />
            <div className={style.results}>
              {searchable.map((item) => (
                <CardItem
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
              ))}
            </div>
          </>
        ) : (
          <div className={style.notfound}>
            <img src="/icons/emptycart.png" alt="" />
            <p>По вашему запросу ничего не найдено</p>
          </div>
        )}

        <Instagram />
        <PinkHeader pinkText={'Могут понравиться'} doubleText={'Могут понравиться'} />
        <div className={style.results}>
          {newProducts.map((item) => (
            <CardItem
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
