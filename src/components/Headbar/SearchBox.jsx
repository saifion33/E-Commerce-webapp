import React, { useState } from 'react'
import searcIcon from '../../assets/icons/search-icon.svg'

const SearchBox = ({ searchProduct }) => {
    const [searchInput, setSearchInput] = useState('')
    const onInputChangeHandler = (e) => {
        setSearchInput(e.target.value);
    }
    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            searchProduct(searchInput)
        }
    }
    return (
        <div className='w-1/2 flex gap-1 md:mr-auto'>
            <input className='w-full max-w-xs px-2 rounded ml-auto' value={searchInput} onChange={onInputChangeHandler} onKeyDown={keyDownHandler} type="text" placeholder='search products..' />
            <img className='w-6 h-6 cursor-pointer' src={searcIcon} alt="search" onClick={() => { searchProduct(searchInput) }} />
        </div>
    )
}

export default SearchBox
