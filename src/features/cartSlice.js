import { createSlice } from '@reduxjs/toolkit'

const productsList = localStorage.getItem('productsList') ? JSON.parse(localStorage.getItem('productsList')) : (localStorage.setItem('productsList', JSON.stringify([])))

const cartState = {
    products: productsList ? productsList : [],
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addProductToCart: (state, action) => {


            if (Array.isArray(action.payload)) {
                const newProductList = []
                action.payload.map(product => {
                    if (!state.products.find(item => item.id === product.id)) {
                        product.quantity = 1
                        product.subTotal = product.price
                        newProductList.push(product)
                    }
                })
                state.products = [...state.products, ...newProductList]

            }
            else {
                if (!state.products.find(product => product.id === action.payload.id)) {
                    action.payload.quantity = 1
                    action.payload.subTotal = action.payload.price
                    state.products = [...state.products, action.payload]
                }


            }
            localStorage.setItem('productsList', JSON.stringify(state.products))


        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
            localStorage.setItem('productsList', JSON.stringify(state.products))
        },
        increaseProductQuantityByOne: (state, action) => {
            const newCart = state.products.map(product => {
                if (product.id === action.payload) {
                    product.quantity += 1
                    product.subTotal = (product.quantity * product.price)
                }
                return product
            })
            state.products = newCart
            localStorage.setItem('productsList', JSON.stringify(state.products))
        },
        decreaseProductQuantityByOne: (state, action) => {
            let newCart = state.products.map(product => {
                if (product.id === action.payload && product.quantity > 1) {
                    product.quantity -= 1
                    product.subTotal -= product.price
                }
                return product
            });
            state.products = newCart
            localStorage.setItem('productsList', JSON.stringify(state.products))
        }
    }

})
export const { addProductToCart, removeProductFromCart, increaseProductQuantityByOne, decreaseProductQuantityByOne } = cartSlice.actions
export default cartSlice.reducer