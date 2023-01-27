import React from 'react'
import Filterbar from '../Filterbar/Filterbar'
import SearchBox from './SearchBox'
import cartIcon from '../../assets/icons/cart-icon.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Headbar = ({ searchProduct, selectedCategory, catagoryFilterHandler, getData, brands, brandFilterHandler }) => {
    const navigate = useNavigate()
    return (
        <div className=' bg-slate-900 p-4 shadow-md shadow-stone-600 sticky top-0 left-0  space-y-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-amber-400 font-extrabold cursor-pointer' onClick={() => { navigate('/') }}>V-Commerce</h1>
                <SearchBox searchProduct={searchProduct} />
                <div className='relative flex justify-center items-center' onClick={() => { navigate('/cart') }}>
                    <img className='w-8 h-8 cursor-pointer' src={cartIcon} alt="cart" />
                    <p className='absolute top-[2px] font-bold cursor-pointer'>{useSelector(state => state.cart.products.length)}</p>
                </div>
            </div>
            <Filterbar catagoryFilterHandler={catagoryFilterHandler} getData={getData} brands={brands} brandFilterHandler={brandFilterHandler} selectedCategory={selectedCategory} />
        </div>
    )
}

export default Headbar