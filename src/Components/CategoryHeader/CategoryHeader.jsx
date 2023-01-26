
import { menuArr } from 'data/menu';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import PinkHeader from '../PinkHeader/PinkHeader';
import style from './CategoryHeader.module.scss';

const CategoryHeader = () => {


    const router = useRouter()
    const [header, setHeader] = useState({})
    useEffect(() => {
        let temp = menuArr.filter((item) => item.link.includes(router.asPath.substring(1)));

        setHeader(...temp)
    },[router.asPath])


    return (
        <div className={style.container}>
            <div className={style.left}>
       
            <PinkHeader pinkText={header?.name} doubleText={header?.name}/>
            </div>
            <div className={style.right}>
                <img className={style.rightImg} src="/img/category-baner.png" alt=""/>
            </div>
         
        </div>
    );
};

export default CategoryHeader;