import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import { useSelector } from 'react-redux';
import style from '../../styles/Products.module.scss';

const ProductsAll = () => {
    const {products} = useSelector(state=>state.products)

    return (
    
        <div className={style.products}>
            <div className={style.container}>
                <img className={style.img} src="/icons/all-products.png" alt=""/>
                <div className={style.productsList}>
                    {
                        products.map((item) => (
                            <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
                        ))
                    }
                </div>
                <Instagram/>

            </div>
            
        </div>
  
    );
};

export default ProductsAll;