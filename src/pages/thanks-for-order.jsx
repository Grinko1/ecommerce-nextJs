import BtnWatchAll from '@/Components/BtnWatchAll/BtnWatchAll';
import Link from 'next/link';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { clearCart } from '../../store/cartSlice';
import style from '../styles/Thanks.module.scss';

const ThanksForOrder = () => {
  // const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(clearCart())
  });
  return (
    <div className={style.thanks}>
      <div className={style.container}>
        <Link href="/">
          <img className={style.close} src="/icons/delete.png" alt="" />
        </Link>

        <img src="/icons/thanks.png" alt="" />
        <p className={style.order}> Номер заказа 555</p>
        <p className={style.msg}>
          Мы обожаем встречать booriva на улице. Так как всех не встретишь, отмечай нас в соц.сетях
          и мы внутри взорвемся и закричим УРА! <br />
          Ставь тэг <span> #boorivagirls</span> чтобы быть в нашей тусовке.
        </p>
        <Link href="/">
          <BtnWatchAll img={'/icons/watch-all.png'} text={'На главную'} size={'l'} />
        </Link>
      </div>
    </div>
  );
};

export default ThanksForOrder;
