import { newProducts } from 'data/new';
import { useDispatch, useSelector } from 'react-redux';
// import { cartTotal, removeFromCart } from '../../store/cartSlice';
import style from './CartItem.module.scss';

const CartItems = () => {

    // const {cartItems }= useSelector(state => state.cartItems)
 

    // const dispatch = useDispatch()

    const handleDelete = (id,size) => {
        // dispatch(removeFromCart({id, size}))
        // dispatch(cartTotal())
    }
    return (
        <div className={style.items}>
            {
                newProducts.map((i) => (
                    <div className={style.item} key={i.id}>
            <img className={style.img} src={i.img} alt=""/>
            <div className={style.desc}>
                <h2>{i.name}</h2>
                <p>{i.size}</p>
                <p className={style.price}>{i.price} &#8381;</p>

            </div>
            <img className={style.delete} src="/icons/pink-delete.png" alt="" onClick={()=>handleDelete(i.id,i.size)}/>
        </div>
                ))
            }
        
   
       
    </div>
    );
};

export default CartItems;