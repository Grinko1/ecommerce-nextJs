
import style from '../../styles/CategoryProducts.module.scss';
import { useEffect, useState } from 'react';
import { products } from 'data/products';
import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import { Layout } from '@/layout/Layout';
import CategoryHeader from '@/Components/CategoryHeader/CategoryHeader';
import Filter from '@/Components/Filter/Filter';


const CategoryProducts = () => {

    // const {products} = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] =useState([])

    const [price, setPrice] = useState('')

    useEffect(()=>{
        setFilteredProducts(products)
    },[products])
  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  useEffect(() => {  
        if(price === ''){
    setFilteredProducts(products)
     }
     
     if(price === '1000 — 1500'){
         setFilteredProducts(products.filter((item) => {
            return item.price < 1500
         }))
     } else if(price ==='from 1500') {
         setFilteredProducts(products.filter((item) => {
             return item.price > 1500
          }))
     }else if(price ==='all price'){
         setFilteredProducts(products)
     }
},[price, products])
  
  
    return (
        <Layout>
        <div className={style.container}>
            <CategoryHeader/>
            <div className={style.main}>
                <div className={style.filter}>
                <Filter handleChangePrice={handleChangePrice}/>
                </div>
                <div className={style.products}>
                {filteredProducts.map((item) => (
                    <CardItem key={item.id} img={item.img} name={item.name} price={item.price} id={item.id} isFavorite={item.isFavorite} />
                ))}
                </div>
            </div>
            <Instagram/>     
        </div>
        </Layout>
    );
};

export default CategoryProducts;