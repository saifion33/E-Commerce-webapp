import React from 'react'
import SearchBox from './SearchBox'

const Headbar = ({ searchProduct }) => {
    return (
        <div className=' bg-slate-900 p-4 shadow-md shadow-stone-600 sticky top-0 left-0  '>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl text-amber-400 font-extrabold'>V-Commerce</h1>
                <SearchBox searchProduct={searchProduct} />
            </div>
        </div>
    )
}

export default Headbar