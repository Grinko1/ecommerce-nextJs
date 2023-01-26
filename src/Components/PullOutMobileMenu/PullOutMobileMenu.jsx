import style from './PullOutMobileMenu.module.scss';
import cn from 'classnames'
import { menuArr } from 'data/menu';
import Link from 'next/link';


const PullOutMobileMenu = ({active, setActiveMenu }) => {


 
    return (
        <div className={cn(style.menuMobile,{ [style.active] : active  ==true} )} onClick={() => setActiveMenu(false)}>
       
        <div className={style.blur} />
        <div className={style.menu_content} onClick={(e) => e.stopPropagation()}>
          <div className={style.menu_header}>
            <div className={style.btn_close} onClick={() => setActiveMenu(false)}>
              <img src="/icons/close-menu.png" alt=""/>
            </div>
           
            <ul className={style.menu_items}>
            <h1 className={style.header}>Меню</h1>
            {
              menuArr.map((i)=>(
                <Link href={i.link} key={i.id} onClick={() => setActiveMenu(false)}>
                <li className={style.menu_item}>
                  {i.name}
                </li>
                </Link>
              ))
            }
            </ul>
            <ul className={cn(style.menu_items,style.menu_subitems )}>
              <li className={style.menu_item}>
                <Link href='/contacts' onClick={() => setActiveMenu(false)}>Контакты</Link>            
              </li>
              <li className={style.menu_item}>
                <Link href='/discounts'onClick={() => setActiveMenu(false)} >Система лояльности</Link>            
              </li>
              <li className={style.menu_item}>
                <Link href='/exchange' onClick={() => setActiveMenu(false)} >Обмен и возврат</Link>            
              </li>
              <li className={style.menu_item}>
                <Link href='/delivery' onClick={() => setActiveMenu(false)}>Доставка и оплата</Link>            
              </li>


            </ul>
         
          </div>
   
          
      
        </div>
      </div>
    );
};

export default PullOutMobileMenu;