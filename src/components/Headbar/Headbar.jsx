import React from 'react'
import Filterbar from '../Filterbar/Filterbar'
import SearchBox from './SearchBox'

const Headbar = ({ searchProduct, catagoryFilterHandler, getData }) => {
    return (
        <div className=' bg-slate-900 p-4 shadow-md shadow-stone-600 sticky top-0 left-0  space-y-3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-amber-400 font-extrabold'>V-Commerce</h1>
                <SearchBox searchProduct={searchProduct} />
            </div>
            <Filterbar catagoryFilterHandler={catagoryFilterHandler} getData={getData} />
        </div>
    )
}

export default Headbar