import style from './BtnWatchAll.module.scss';
import cn from 'classnames'

const BtnWatchAll = ({img, text, size = 'm', disabled=false}) => {
    return (
        <div className={style.btn} >
        <img className={cn(style.bg, {
            [style.m] : size == 'm',
            [style.l] : size == 'l',
        })} src={img} alt=""/>
   <span className={cn(style.text, { [style.disabled] : disabled} ) }>{text}</span> 
    </div>
    );
};

export default BtnWatchAll;