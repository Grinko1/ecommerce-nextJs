import style from './Instagram.module.scss';

const Instagram = () => {
    return (
        <div className={style.instagram}>
            <div className={style.container}>
                <div className={style.item}>
                <div className='instagram-block-item_top'>
                <img className={style.item_icon} src="/icons/instagram.png" alt=""/>
                    <span>Мы в экстазе, когда ты нас отмечаешь)
                            Отмечай плз чаще</span>
                </div>
                <div className={style.item_btm}>
                     
<img className={style.instagram_inst1} src="/img/inst1.png" alt=""/>
<img className={style.instagram_inst2} src="/img/inst2.png" alt=""/>
                </div>

                </div>
                <div className={style.item}>
                <img className={style.instagram_inst3} src="/img/inst3.png" alt=""/>
                    </div>
                    <div className={style.item}>
                    <div className={style.right}>
                     
                     <img className={style.instagram_inst4} src="/img/inst4.png" alt=""/>
                     <img className={style.instagram_inst5} src="/img/inst5.png" alt=""/>
                                     </div>
                    <div className='instagram-block-item_top '>
                <img className={style.item_icon} src="/img/hashtag.png" alt=""/>
                    <span className={style.item_textend}>Ставь тэг чтобы быть в нашей тусовке.</span>
                </div>
  
                    </div>
            </div>
            
        </div>
    );
};

export default Instagram;