import { menuArr } from 'data/menu';
import Link from 'next/link';
import style from './NavMenu.module.scss';
import cn from 'classnames'
import { useRouter } from 'next/router';

const NavMenu = () => {
 const router = useRouter()

    return (
   <nav className={style.navbar}>
     <ul className={style.links}>
     {
       menuArr.map((menu) => (
         <li className= {cn(style.item, {
          [style.choozen] :  menu.link === router.asPath
         })} key={menu.id}>
           <Link className={style.link} href={menu.link}>{menu.name}</Link>
           </li>
       ))
     }
     </ul>
     <hr className={style.hr}/>
   </nav>
    );
};

export default NavMenu;