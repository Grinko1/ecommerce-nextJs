import { addToFavorite, removeFromFavorite } from '@/features/favoriteSlice';
import { toggleFavorite } from '@/features/productsSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import style from './CardItem.module.scss';

const CardItem = ({img, name,price, id=1, isFavorite}) => {

 
  
    const dispatch = useDispatch()

  

    const handleAddFavorited = ()=> {
        dispatch(addToFavorite({id, img, name,price, isFavorite:true}))
        dispatch(toggleFavorite({id}))
     
    
    }

    const handleDeleteFavorite = () => {
        dispatch(removeFromFavorite({id,  img, name,price,  isFavorite:false}))
        dispatch(toggleFavorite({id}))
 
         
    }
   
    
    return (
        <div className={style.cardItem}>
            <Link href={`/product/${id}`}>
            <img className={style.img} src={img} alt=""/>
            </Link>
           
            <hr className={style.hr}/>
            {isFavorite 
            ? 
            <img className={style.icon} src="/icons/favorited.png" alt="" onClick={handleDeleteFavorite} />
            :
            <img className={style.icon} src="/icons/card_favorite.png" alt="" onClick={handleAddFavorited} />
            
        }
            
            <Link href={`/product/${id}`}>
            <div className={style.cardBottom}>
                
                <div className={style.name}>
            {name} </div>
                <div className={style.price}>
                {price} &#8381;</div>
              
            </div>
            </Link>
             
           
        </div>
    );
};

export default CardItem;