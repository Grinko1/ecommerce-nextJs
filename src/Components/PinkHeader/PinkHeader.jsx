import style from './PinkHeader.module.scss';

const PinkHeader = ({pinkText, doubleText}) => {
    return (
        <div>
              <div className={style.header}>
            <h1 className={style.headerPink}>{pinkText}</h1>
            <p className={style.doble}>{doubleText}</p>
            <img className={style.img} src="/img/wave.png" alt=""/>
            
        </div>
        </div>
    );
};

export default PinkHeader;