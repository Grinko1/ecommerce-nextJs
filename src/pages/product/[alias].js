import style from '../../styles/ProductDetail.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PinkHeader from '@/Components/PinkHeader/PinkHeader';
import CardItem from '@/Components/CardItem/CardItem';
import Instagram from '@/Components/InstagramBlock/Instagram';
import { products } from 'data/products';
import cn from 'classnames'
import SizeTable from '@/Components/SizeTable/SizeTable';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, cartTotal } from '@/features/cartSlice';



const ProductDetail = () => {
    const newProducts = useSelector(state => state.products.new)
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

    const dispatch = useDispatch()

    const addProductToCart = () => {
        dispatch(addToCart({...product, id:new Date().toISOString()}))
        dispatch(cartTotal())
    }
    const fastOrder = () => {
        dispatch(addToCart({...product, id:new Date().toISOString()}))
        dispatch(cartTotal())
        router.push('/order')      
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
                        <p>?????????????? ????????????:</p>
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
                             <span className={cn(style.btnName, style.white)}>?? ??????????????</span> 
                         </div>
                        <div className={style.btnTransparent}  onClick={fastOrder}>
                          <img className={style.btnBg} src='/icons/btn-transparent.png' alt=""/>
                             <span className={cn(style.btnName, style.pink)}>?????????????? ??????????</span> 
                         </div>
    
                    </div>
                    <div className={style.productText}>
                    Over size ???????????? ?????????? ???????? ???? ?????????????? ?? ?????????????????? ????????????????. ?????????????????? ?????????????????? ?? ???????????????????? ??????????. ???????????????????? ???????????????? ?????????????????? ???????????????? ?????????????? ?????????????? ?? ??????????????, ?????????????? ??????????????????????????. ????????
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
                    <button className={style.showMore} onClick={toggleShowMore}>{ showText ? '????????????' : '???????????? ????????????'}</button>
                    </div>
                    <div className="product-model">
                        <div className={style.composition}>
                            <div className={style.left}>
                                <h3>?????????????????? ????????????:</h3>
                                <span className={style.left_p}>(???? ???????????? XS????? S-????)</span>
                                <div className={style.modelSize}>
                                <p className={style.height}> ????????  171 ????</p>
                              
                                    <img className={style.icon} src="/icons/model.png" alt=""/>
                                    <div className={style.values}>
                                    <div className={style.value}>
                                        <span>83 ????</span> <br/>
                                        ?????????? ??????????
                                    </div>
                                    <div className={style.value}>
                                        <span>66 ????</span> <br/>
                                         ?????????? ??????????
                                    </div>
                                    <div className={style.value}>
                                        <span>93 ????</span> <br/>
                                        ?????????? ??????????
                                    </div>
                                    </div>
                                    
                                    
                                    
                                 
                                </div>
                            </div>
                            <div className={style.right}>
                            <h3>????????????:</h3>
                            <p>50% ??????????????,</p> 
                          <p>50% ??????????????????</p>
                            </div>
                        </div>
                        <div className={style.tableSize}>
                            <button className={style.sizeBtn} onClick={() => setOpenTable(true)}>?????????????? ????????????????</button>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            <div className={style.hideBenefits}>
                  {/* <ProductBenefits/> */}
            </div>
          
            <PinkHeader pinkText={'?????????? ????????????????????'} doubleText={'???????? ?????????? ????????????????????'}/>
            <div className={style.suggestion}>
            {newProducts.map((item) => (
                <CardItem key={item.id} img={item.img} name={item.name} price={item.price} isFavorite={item.isFavorite} id={item.id} />
            ))}
            </div>
           <Instagram/>
            </div>
            
            
            }
           
            
        </div>
 
    );
};

export default ProductDetail;