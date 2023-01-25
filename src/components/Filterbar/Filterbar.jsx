import React from 'react'
import CatagoryFilter from './CatagoryFilter'

const Filterbar = ({ catagoryFilterHandler }) => {
    return (
        <div className=''>
            <CatagoryFilter catagoryFilterHandler={catagoryFilterHandler} />
        </div>
    )
}

export default Filterbar