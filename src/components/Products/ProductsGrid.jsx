import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showAlert } from '../../features/alertSlice'
import { addProductToCart } from '../../features/cartSlice'
import ProductCard from './ProductCard'

const ProductsGrid = ({ products }) => {
    const dispatch = useDispatch()
    const [productsToAddToCart, setProductsToAddToCart] = useState([])
    const addProductToCartByMark = (productToAdd) => {
        if (!productsToAddToCart.find(product => product.id === productToAdd.id)) {
            setProductsToAddToCart(prevState => [...prevState, productToAdd])
        }
        else {
            setProductsToAddToCart(prevState => prevState.filter(product => product.id !== productToAdd.id))
        }

    }
    return (
        <div>

            <div className='sticky right-0 top-28 flex justify-end px-4'>
                <button onClick={() => {
                    if (productsToAddToCart.length > 0) {
                        dispatch(addProductToCart(productsToAddToCart))
                        setProductsToAddToCart(prev => [])
                        dispatch(showAlert({ type: 'success', message: 'Selected products added to cart' }))
                    }
                }} type='button' className='bg-slate-900 py-1 px-3 border-2 border-amber-400 rounded-full text-amber-400 ml-auto'>Add Marked Products to cart {productsToAddToCart.length}</button>
            </div>
            <div className=' flex flex-wrap gap-4 p-4 justify-center scroll-smooth'>
                {products.map(product => <ProductCard key={product.id} product={product} addProductToCartByMark={addProductToCartByMark} productsToAddToCart={productsToAddToCart} />)}
            </div>
        </div>
    )
}

export default ProductsGrid