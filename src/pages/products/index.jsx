
import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import { Layout } from '@/layout/Layout';
import { newProducts } from 'data/new';
import { products } from 'data/products';
import style from '../../styles/Products.module.scss';

const ProductsAll = () => {
    // const {products} = useSelector(state=>state.products)

    return (
        <Layout>
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
        </Layout>
    );
};

export default ProductsAll;