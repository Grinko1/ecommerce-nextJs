import style from './Benefits.module.scss';

const Benefits = () => {
    return (
        <div className={style.benefits}>
            <div className={style.item}>
                <div className={style.left}>
                    <img className={style.img} src="/icons/cat.png" alt=""/>
                </div>
                <div className={style.right}>
                    <h3 className={style.bolt_text}>Отправка день в день</h3>
                    <span className={style.text}>При заказе до 18:00</span>
                </div>

            </div>
            <div className={style.item}>
                <div className={style.left}>
                    <img className={style.img} src="/icons/parsel.png" alt=""/>
                </div>
                <div className={style.right}>
                    <h3 className={style.bolt_text}>Легкий возврат/обмен</h3>
                    <span className={style.text}>В течении 14 дней</span>
                </div>

            </div>
            <div className={style.item}>
                <div className={style.left}>
                    <img className={style.img} src="/icons/heart.png" alt=""/>
                </div>
                <div className={style.right}>
                    <h3 className={style.bolt_text}>Сделано в Украине</h3>
                    <span className={style.text}>Прям в Киеве</span>
                </div>

            </div>
            
        </div>
    );
};

export default Benefits;