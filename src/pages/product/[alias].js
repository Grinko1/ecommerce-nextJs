import style from '../../styles/ProductDetail.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';
import CardItem from '@/Components/CardItem/CardItem';
import { newProducts } from 'data/new';
import Instagram from '@/Components/InstagramBlock/Instagram';
import { Layout } from '@/layout/Layout';
import { products } from 'data/products';
import cn from 'classnames'
import SizeTable from '@/Components/SizeTable/SizeTable';

// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart, cartTotal } from '../../store/cartSlice';
// import { useNavigate, useParams } from 'react-router';
// import { products } from '../../data/products';

const ProductDetail = () => {
    // const newProducts = useSelector(state => state.products.new)
    const [product, setProduct] = useState({})
    const [showDots, setShowDots] = useState(true)
    const [showText, setText] = useState(false)
    const [openTable, setOpenTable] = useState(false)
    const router = useRouter()
    const id = router.query.alias
 

    const choozeSize = (i) => {
        setProduct({...product, size : i.size})   
    }

    const sizes = [
        {size:'XS - S'} ,
         {size:'S - M'} ,
         {size:'M - L'} ,
         {size:'L - XL'} ]


        useEffect(() =>{
            setProduct(products.find(i => i.id == id))      
        } ,[id])

    // const dispatch = useDispatch()

    const addProductToCart = () => {
        // dispatch(addToCart({...product, id:new Date().toISOString()}))
        // dispatch(cartTotal())
    }
    const fastOrder = () => {
        // dispatch(addToCart({...product, id:new Date().toISOString()}))
        // dispatch(cartTotal())
        // navigate('/order')
      
    }

    useEffect(() => {
        if(showText){
            setShowDots(false)
        }else{
            setShowDots(true)
        }
    },[showText])
    
    const toggleShowMore = () => {
        setText(!showText)
    }

 
    return (
        <Layout>
        <div className={style.product}>
            {
                openTable ? 
                <SizeTable openTable={openTable} setOpenTable={setOpenTable} />
      
                :
                <div className={style.container}>

                <div className={style.productBlock}>
             
                <div className={style.slider}>
                    <img  className={style.bigImg} src={product?.img} alt=""/>

                </div>
                <div className={style.desc}>
                    <h1 className='product-name'>{product?.name}</h1>
                    <p className={style.price}>{product?.price} &#8381;</p>  
                    <div className={style.sizes}>
                        <p>Выбрать размер:</p>
                        <div className={style.sizeBlock}>
                            {
                                sizes.map((i) => (
                                    <div className={cn(style.sizeItem,{[style.pinkColor] :  product?.size == i.size})} key={i.size}  onClick={()=>choozeSize(i)} >
                                            {i.size}
                                     </div>
                                ))
                            }
                
                        </div>
                </div>
                    <div className={style.productBtns}>
                      
                        <div className={style.btnTransparent} onClick={addProductToCart}>
                          <img className={style.btnBg} src='/icons/watch-all.png' alt=""/>
                             <span className={cn(style.btnName, style.white)}>в корзину</span> 
                         </div>
                        <div className={style.btnTransparent}  onClick={fastOrder}>
                          <img className={style.btnBg} src='/icons/btn-transparent.png' alt=""/>
                             <span className={cn(style.btnName, style.pink)}>Быстрый заказ</span> 
                         </div>
    
                    </div>
                    <div className={style.productText}>
                    Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура выполнена в серебряном цвете. Акцентными деталями выступают объемные нашитые карманы и капюшон, который отстёгивается. Один
                    <span 
                     className={ cn(style.dots, {
                         [style.view] : showDots == true,
                         [style.hidden] : showDots == false
                     })
                        
                    }>. . .</span> 
                        <span className= { cn(style.dots, {
                         [style.view] : showText == true,
                         [style.hidden] : showText == false
                     })        
                    }> erisque enim ligula venenatis dolor.
                     Maecenas nisl est, ultrices nec congue eget,
                      auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
                      Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
                       In at libero sed nunc venenatis imperdiet sed ornare turpis.
                        Donec vitae dui eget tellus gravida venenatis.
                         Integer fringilla congue eros non fermentum.
                          Sed dapibus pulvinar nibh tempor porta.</span>
                          {

                          }
                    <button className={style.showMore} onClick={toggleShowMore}>{ showText ? 'Скрыть' : 'Читать больше'}</button>
                    </div>
                    <div className="product-model">
                        <div className={style.composition}>
                            <div className={style.left}>
                                <h3>Параметры модели:</h3>
                                <span className={style.left_p}>(На модели XS — S-ка)</span>
                                <div className={style.modelSize}>
                                <p className={style.height}> Рост  171 см</p>
                              
                                    <img className={style.icon} src="/icons/model.png" alt=""/>
                                    <div className={style.values}>
                                    <div className={style.value}>
                                        <span>83 см</span> <br/>
                                        объем груди
                                    </div>
                                    <div className={style.value}>
                                        <span>66 см</span> <br/>
                                         объем талии
                                    </div>
                                    <div className={style.value}>
                                        <span>93 см</span> <br/>
                                        объем бедер
                                    </div>
                                    </div>
                                    
                                    
                                    
                                 
                                </div>
                            </div>
                            <div className={style.right}>
                            <h3>Состав:</h3>
                            <p>50% вискоза,</p> 
                          <p>50% полиэстер</p>
                            </div>
                        </div>
                        <div className={style.tableSize}>
                            <button className={style.sizeBtn} onClick={() => setOpenTable(true)}>таблица размеров</button>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            <div className={style.hideBenefits}>
                  {/* <ProductBenefits/> */}
            </div>
          
            <PinkHeader pinkText={'Могут понравится'} doubleText={'Тебе могут понравится'}/>
            <div className={style.suggestion}>
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} isFavorite={item.isFavorite} id={item.id} />
            ))}
            </div>
           <Instagram/>
            </div>
            
            
            }
           
            
        </div>
        </Layout>
    );
};

export default ProductDetail;