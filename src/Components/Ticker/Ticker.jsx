import style from './Ticker.module.scss';

const Ticker = ({text=' топовые товары '}) => {
  
    const addSpaceToText = text + ' \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0'
 
    return (
        <div className={style.ticker}>
            
            <div className={style.border}>
            <span className={style.text}>  {  addSpaceToText.repeat(20)}  </span>
            </div>
       
        </div>
    );
};

export default Ticker;