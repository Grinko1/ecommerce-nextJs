import style from './PullOutCart.module.scss';
import cn from 'classnames'
import Link from 'next/link';
import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import CartItem from '../CartItems/CartItems';
import { useSelector } from 'react-redux';

const PullOutCart = ({active, setActiveMenu }) => {

  const {cartItems, cartTotalAmount} = useSelector(state=>state.cartItems)
console.log(cartTotalAmount);

    
    return (
        <div className={cn(style.menu, {[style.active] : active == true})} onClick={() => setActiveMenu(false)}>
       
        <div className={style.blur} />
        <div className={style.menu_content} onClick={(e) => e.stopPropagation()}>
          <div className={style.menu_header}>
            <div className={style.btnClose} onClick={() => setActiveMenu(false)}>
              <img src="/icons/icon_close.png" alt=""/>
            </div>
            <h1>Корзина</h1>
          </div>
          {
            cartItems.length == 0 ?
            <>
            <div className={style.emptyCart}>
              <img src="/icons/emptycart.png" alt=""/>
              <p>Твоя корзина пуста, но это никогда
                 <br/> не поздно исправить:)</p>

            </div>
            <Link href='/'  onClick={() => setActiveMenu(false)} >
            <BtnWatchAll img={'/icons/watch-all.png'} text={'За покупками'} size={'l'}/>
            </Link>
  
            </>
            :
            <>
            <CartItem/>
   
              <div className={style.cartTotal}>
              Сумма заказа: . . . . . . {cartTotalAmount} &#8381;
                </div>
          <Link href='/order' onClick={() => setActiveMenu(false)}  >
              <BtnWatchAll img={'/icons/watch-all.png'} text={'Оформить заказ'} size={'l'}/>
           </Link>
            </>
          }
          
      
        </div>
      </div>
    );
};

export default PullOutCart;