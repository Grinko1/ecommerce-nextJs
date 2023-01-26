import BtnWatchAll from '../BtnWatchAll/BtnWatchAll';
import style from './AboutShop.module.scss';

const AboutShop = () => {
   
    return (
        <>
        <div className={style.shop}>
            <div className={style.container}>

            
            <h1 className={style.header}>BOORIVA <br/> STORE</h1>
            <div className={style.shopImg}>
            <img className={style.shop_img} src="/img/shop.png" alt=""/>
            </div>

            <p className={style.desc}>Ты можешь заказать примерку  понравившейся вещи или просто заглянуть, гуляя по Подолу, 
                    и примерять что-то 
                из в наличии</p>
            <p className={style.address}> г.Киев,  ул. Нижний вал, 37  <br/> 
                  Ежедневно с 11:00 до 21:00
            </p>

        <img className={style.mapImg} src="/img/map.png" alt=""/>
        </div>
        </div>


        <div className={style.getdirection}>
        <BtnWatchAll img={'/icons/get-direction.png'} text={'проложить маршрут'} size={'l'}/>
            </div>

        </>

    );
};

export default AboutShop;