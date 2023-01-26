import BtnWatchAll from "@/Components/BtnWatchAll/BtnWatchAll";
import style from '../styles/Booriva.module.scss'
import cn from 'classnames'

const BoorivaGirls = () => {
    return (
       
        <div className={style.booriva}>
            <div className={style.container}>
         
                <div className={style.header}>
                    <img className={style.headerImg} src="/icons/booriva-header.png" alt=""/>
                    <p className={style.headerText}>
                    Мы обожаем встречать booriva на улице. 
                    Так как всех не встретишь, отмечай нас в соц.сетях 
                    и мы внутри взорвемся и закричим УРА!
                    </p>
                </div>
                <div className={style.boorivaGalery}>
                    <div className={style.column}>
                        <img src="/instimg/1.png" alt=""/>
                        <img src="/instimg/2.png" alt=""/>
                        <p className={style.galeryP}>Ставь тэг <span className={style.tag}>#boorivagirls</span>  чтобы быть
                            в нашей тусовке.</p>
                            <BtnWatchAll img='/icons/watch-all.png' text='Instagram'/>
                    </div>
                    <div className={style.column}>
                    <img src="/instimg/3.png" alt=""/>
                        <img src="/instimg/4.png" alt=""/>
                        <img src="/instimg/5.png" alt=""/>
                       
                        </div>

                        <div className={cn(style.column, style.higher)}>
                        <img src="/instimg/6.png" alt=""/>
                        <img src="/instimg/7.png" alt=""/>
                        <img src="/instimg/8.png" alt=""/>
                        </div>

                </div>
            </div>
            
        </div>
   
    );
};

export default BoorivaGirls;