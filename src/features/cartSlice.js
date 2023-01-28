import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems:[
        {
            id:1,
            name: 'Cвитшот вставка клетка',
            img: '/img/sweetshot.png',
            price:1099,
            size:'S — M',
            isFavorite:false

        },
    ],
    cartTotalAmount: 0,
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){
            state.cartItems.push(action.payload)
        },
        removeFromCart (state, action) {
            const restCart = state.cartItems.filter((item) => item.id !== action.payload.id)
          
            state.cartItems = restCart
            // state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id && item.size !== action.payload.size)
        },
        cartTotal (state) {
           
              
                const total = state.cartItems.reduce((acc, cur) => {                   
                   return acc + Number(cur.price)
                
                }, 0)
                state.cartTotalAmount = total
            
            
        },
        clearCart(state) {
            state.cartItems = []
        }
    }

})


const { actions, reducer } = cartSlice
export const { addToCart, removeFromCart, cartTotal, clearCart} = actions
export default reducer