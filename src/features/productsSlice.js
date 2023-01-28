import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products:[
        {
            id:1,
            name: 'Cвитшот вставка клетка',
            img: '/img/sweetshot.png',
            price:1099,
            size:'S — M',
            isFavorite:false

        },
        {
            id:2,
            name: 'Платье прозрачное в цветочек черное',
            img: '/img/dress.png',
            price:1299,
            size:'S — M',
            isFavorite:false
        },
        {
            id:3,
            name: 'Бомбер Gone Crazy хаки',
            img: '/img/bomber.png',
            price:2499,
            size:'S — M',
            isFavorite:false
        },
        {
            id:4,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/suit1.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
        {
            id:5,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/orange-tshirt.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
        {
            id:6,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/reddress.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
        {
            id:7,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/sweetshot.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
        {
            id:8,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/pants.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
    ],
    new:[
        {
            id:1,
            name: 'Cвитшот вставка клетка',
            img: '/img/sweetshot.png',
            price:1099,
            size:'S — M',
            isFavorite:false

        },
        {
            id:2,
            name: 'Платье прозрачное в цветочек черное',
            img: '/img/dress.png',
            price:1299,
            size:'S — M',
            isFavorite:false
        },
        {
            id:3,
            name: 'Бомбер Gone Crazy хаки',
            img: '/img/bomber.png',
            price:2499,
            size:'S — M',
            isFavorite:false
        },
        {
            id:4,
            name: 'Платье-футболка рыбы в аквариуме',
            img: '/img/suit1.png',
            price:2499,
            size:'S — M',
            isFavorite:false,
        },
        
    ],
    searchable:[],
    sortedByPrice:[],
    loading: false
 
  };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        toggleFavorite(state, action){
            const toggledIsFavorite = state.products.find((item) => item.id === action.payload.id);
            toggledIsFavorite.isFavorite = !toggledIsFavorite.isFavorite;
                if(action.payload.id <= 4){
                    const toggledIsFavoriteN = state.new.find((item) => item.id === action.payload.id);
                    toggledIsFavoriteN.isFavorite = !toggledIsFavoriteN.isFavorite;
                }
  
        
        },
        setSearch (state, action) {
            const result = state.products.filter((item) => item.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            state.searchable = result
           

        },
        sortByPrice(state,action) {
            if(action.payload === '1000 — 1500'){
                state.sortedByPrice = state.products.filter((item) =>  item.price < 1500)
            }else if(action.payload ==='from 1500') {
                state.sortedByPrice = state.products.filter((item) =>  item.price > 1500)
                        }else if(action.payload  ==='all price'){
                            state.sortedByPrice = state.products
                        }
        }
    }

})


const { actions, reducer } = productsSlice
export const { toggleFavorite, setSearch, sortByPrice} = actions
export default reducer