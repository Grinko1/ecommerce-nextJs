import Benefits from '@/Components/Benefits/Benefits';
import BtnWatchAll from '@/Components/BtnWatchAll/BtnWatchAll';
import Instagram from '@/Components/InstagramBlock/Instagram';
import style from '../styles/Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.left}>
            <img className={style.headerImg} src="/icons/contacts.png" alt="" />
            <ul className={style.contactsList}>
              <li className={style.item}>
                <img src="/icons/mapbl.png" alt="" />
                <p>
                  г.Киев, ул. Нижний вал, 37
                  <br /> Ежедневно с 11:00 до 21:00
                </p>
              </li>
              <li className={style.item}>
                <img src="/icons/phonebl.png" alt="" />
                <p>+7123456789</p>
              </li>
              <li className={style.item}>
                <img src="/icons/mailbl.png" alt="" />
                <p>hello@www.booriva.com</p>
              </li>
            </ul>
            <div className={style.contactMap}>
              <img className={style.mapImg} src="/img/map.png" alt="" />
            </div>
            <div className={style.getDirection}>
              <BtnWatchAll img={'/icons/watch-all.png'} text={'проложить маршрут'} size={'l'} />
            </div>
          </div>
          <div className={style.right}>
            <img src="/img/shop.png" alt="" />
          </div>
        </div>
        <Benefits />
        <Instagram />
      </div>
    </div>
  );
};

export default Contacts;
