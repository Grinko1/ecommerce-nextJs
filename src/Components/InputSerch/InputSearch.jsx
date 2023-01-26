import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { setSearch } from '../../store/productsSlice';


import style from './InputSearch.module.scss';

const InputSearch = ({setIsOpenSearch}) => {
  const [searchStr, setSearchStr] = useState('')
 const router = useRouter()

// const dispatch = useDispatch()

  useEffect(() => {
    if(searchStr.length > 1){
      router.push('/search')
    }
  }, [searchStr])

  
  const handelSearch = (e) => {
    setSearchStr(e.target.value)
    // dispatch(setSearch(searchStr))

  }
  const handleCloseSearch = () => {
    setSearchStr('')
    setIsOpenSearch(false)
    // navigate('/')
  }
  
    return (
        <div className={style.search} onClick={() => setIsOpenSearch(false)}>
        <div className={style.main} onClick={e=> e.stopPropagation()} >
          <img src="/icons/search-grey.png" alt=""/>
          <input className={style.input} placeholder='Поиск товаров'  type="text" value={searchStr} onChange={(e )=> handelSearch(e) }/>
          <img className={style.delete} src="/icons/delete.png" alt="" onClick={handleCloseSearch}/>
        </div>
      </div>
    );
};

export default InputSearch;