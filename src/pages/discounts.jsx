// Discounts.module.scss
import Benefits from '@/Components/Benefits/Benefits';
import Instagram from '@/Components/InstagramBlock/Instagram';
import style from '../styles/Discounts.module.scss';

const Discounts = () => {
  return (
    <div className={style.discount}>
      <div className={style.container}>
        <img className={style.headerIcon} src="/icons/discount.png" alt="" />
        <div className={style.programms}>
          <div className={style.programm}>
            <div className={style.left}>
              <img src="/icons/discount1.png" alt="" />
              <p className={style.pinkTag}> #boorivagirls</p>
              <p className={style.bigText}>Первая покупка {'>'} 1099 руб* </p>
              <p className={style.smallText}>*вещь не находится на скидке</p>
            </div>
            <div className={style.right}>
              <p>5% бонусы от суммы чека</p>
              <p>
                -30% скидка на одну вещь <br />
                за 3 дня до и 3 дня после дня рождения
              </p>
              <p className={style.smallPinktext}>
                *Баллами можно рассчитываться только за те вещи, <br /> которые находятся не на
                скидке{' '}
              </p>
            </div>
          </div>
          <div className={style.programm}>
            <div className={style.left}>
              <img src="/icons/discount2.png" alt="" />
              <p className={style.pinkTag}> #boorivasis</p>
              <p className={style.bigText}>Сумма покупок {'>'} 5000 руб* </p>
            </div>
            <div className={style.right}>
              <p>10% бонусы от суммы чека</p>
              <p>
                -30% скидка на одну вещь <br />
                за 3 дня до и 3 дня после дня рождения
              </p>
              <p className={style.smallPinktext}>
                *Баллами можно рассчитываться только за те вещи, <br /> которые находятся не на
                скидке{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <Instagram />
    </div>
  );
};

export default Discounts;
