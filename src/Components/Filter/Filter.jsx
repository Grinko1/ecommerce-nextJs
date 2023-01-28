import { subMenu } from 'data/menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Radio from '../Radio/Radio';
import style from './Filter.module.scss';
import cn from 'classnames'


const Filter = ({handleChangePrice}) => {

  const router = useRouter()

  
    return (
        <div className={style.filter}>
           
            <h2 className={style.filterHeader}>КАТЕГОРИИ:</h2>
        <div className={style.category}>
        <ul className={style.list}>
        {subMenu.map((item) => (
      <li key={item.id} className={cn(style.categoryItem, {[style.choozen] : router.asPath == item.link })}><Link href={item.link}>{item.name}</Link></li>
      ))}
        </ul>
        
       
        </div>
        <h2 className={style.filterHeader}>ЦЕНЫ:</h2>
        <div className={style.price}>
              
                    <Radio id='price1' htmlFor='price1' name='price' oneLine  value='all price' onChange={handleChangePrice} >
                    Все цены
                    </Radio>
                    <Radio id='price2' htmlFor='price2' name='price' oneLine disabled  >
                    500 — 1000
                    </Radio>
                    <Radio id='price3' htmlFor='price3' name='price' oneLine  value='1000 — 1500' onChange={handleChangePrice} >
                    1000 — 1500
                    </Radio>
                    <Radio id='price4' htmlFor='price4' name='price' oneLine  value='from 1500' onChange={handleChangePrice} >
                    от 1500
                    </Radio>
        </div>
        <h2 className={style.filterHeader}>РАЗМЕР:</h2>
        <div className={style.price}>
      
              
                    <Radio id='size1' htmlFor='size1' name='size' oneLine>
                    XS — S
                    </Radio>
                    <Radio id='size2' htmlFor='size2' name='size' oneLine>
                    S — M
                    </Radio>
                    <Radio id='size3' htmlFor='size3' name='size' oneLine>
                    M — L
                    </Radio>
                    <Radio id='size4' htmlFor='size4' name='size' oneLine>
                    L — XL
                    </Radio>

                      
        </div>
        </div>
    );
};

export default Filter;