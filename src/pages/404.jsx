import style from '../styles/NotFound.module.scss'
import BtnWatchAll from "@/Components/BtnWatchAll/BtnWatchAll";
import Ticker from "@/Components/Ticker/Ticker";
import Link from "next/link";

const NotFound = () => {
    return (
   
        <div className={style.notfound}>
            <div className={style.imgblock}>
            <img className={style.icon} src="/icons/notfound.png" alt=""/>
            </div>
            <div className={style.ticker}>
            <Ticker text={" Похоже, что-то пошло не так..."}/>
            </div>
           
            <p className={style.text}>
            Страница не найдена, но у нас есть <br/>
       еще много всего интересного
            </p>
            <Link href='/'>
            <BtnWatchAll img={'/icons/watch-all.png'} text={'На главную'}/>
            </Link>

        </div>

    );
};

export default NotFound;