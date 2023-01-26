
import Link from 'next/link';
import style from './Footer.module.scss';
import cn from 'classnames'

const Footer = () => {
    return (
        <footer className={style.footer} >
            <div className={cn(style.footer_block, style.footer_adaptive)}>
                <img className={style.footerLogo} src="/img/footer-logo.png" alt=""/>
            </div>
            <div className={style.footer_block}>
                <h3 className={style.footerHeader}>Инфо</h3>
                <ul  className={style.footerInfo}>
                    <li> <Link href='/contacts'>Контакты</Link> </li>
                    <li><Link href='/discounts'>Система лояльности</Link></li>
                    <li><Link href='/exchange'>Обмен и возврат</Link> </li>
                    <li><Link href='/delivery'>Доставка и оплата</Link></li>
                </ul>
            </div>
            <div className={style.footer_block}>
            <h3 className={style.footerHeader}>НАШ АДРЕС</h3>
                <ul className={style.footerInfo}>
                    <li>г.Киев, ул. Нижний Вал, 37</li>
                    <li>Пн — Вс: с 11:00 до 21:00</li>
                </ul>
            </div>

            <div className={cn(style.footerMobile, style.footer_block)}>
            <h3 className={style.footerHeader}>СОЦ.СЕТИ</h3>
                <div className={style.footerIcons}>
                
                    <img className={style.footerIcon} src="/icons/fbicon.png" alt=""/>
                    <img className={style.footerIcon} src="/icons/iicon.png" alt=""/>
          
                
                </div>
                     
                
            </div>
            <div className={style.footer_block}>
                <div className={cn(style.blockTop,style.write_msg )}>
                    <img className={style.admin} src="/img/admin.png" alt=""/>
                    <p>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
                </div>
                <h3 className={style.last}>Написать Иванке</h3>
            </div>
            
        </footer>
    );
};

export default Footer;