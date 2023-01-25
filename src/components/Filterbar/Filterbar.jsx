import React from 'react'
import CatagoryFilter from './CatagoryFilter'

const Filterbar = ({ catagoryFilterHandler, getData }) => {
    return (
        <div className=''>
            <CatagoryFilter catagoryFilterHandler={catagoryFilterHandler} getData={getData} />
        </div>
    )
}

export default Filterbar