import Instagram from '../Components/InstagramBlock/Instagram';
import style from '../styles/Exchange.module.scss';

const Delivery = () => {
  return (
    <div className={style.exchange}>
      <div className={style.container}>
        <img className={style.header} src="/icons/delivery.png" alt="" />
        <div className={style.exchangeDesc}>
          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/delivery1.png" alt="" />
            </div>
            <div className={style.text}>
              Доставка осуществляется Новой почтой день в день при заказе до 18:00
            </div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/delivery2.png" alt="" />
            </div>
            <div className={style.text}>Курьерская доставка 500 руб</div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/delivery3.png" alt="" />
            </div>
            <div className={style.text}>
              Наложенный платеж на почте дополнительно оплачивается 2% от суммы
            </div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img style={{ height: '100px' }} src="/icons/delivery4.png" alt="" />
            </div>
            <div className={style.text}>
              При оплате онлайн никаких больше дополнительных процентов
            </div>
          </div>
          <div className={style.exchangeInst}>
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
