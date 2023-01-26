import Instagram from '@/Components/InstagramBlock/Instagram';
import style from '../styles/Exchange.module.scss';

const Exchange = () => {
  return (
    <div className={style.exchange}>
      <div className={style.container}>
        <img className={style.header} src="/icons/exchange.png" alt="" />
        <div className={style.exchangeDesc}>
          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/exchange1.png" alt="" />
            </div>
            <div className={style.text}>
              Вы легко можете обменять либо вернуть вещь в течение 14 дней после покупки, если вещь
              не была в носке и не стиралась. Для этого свяжитесь с нами любым удобным способом.
            </div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/exchange2.png" alt="" />
            </div>
            <div className={style.text}>
              При обмене, мы отправляем вещь в тот же либо на следующий день, после того как забрали
              вещь с почты.
            </div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/exchange3.png" alt="" />
            </div>
            <div className={style.text}>
              Вещи, которые вы отправляете нам, мы забираем с почты 2 раза в неделю.
            </div>
          </div>

          <div className={style.descItem}>
            <div className="exchange-desc-item__img">
              <img src="/icons/exchange4.png" alt="" />
            </div>
            <div className={style.text}>
              При возврате, деньги возвращаются в течение 5 рабочих дней, после того как забрали
              вещь с почты и получили реквизиты для возврата.
            </div>
          </div>
          <div className="exchange-inst">
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
