import React, { useState } from 'react'
import expandArrow from '../../assets/icons/expand-arrow.png';
import collapseArrow from '../../assets/icons/collapse-arrow.png';


const BrandFilter = ({ brands, brandFilterHandler }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('All');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (brand) => {
        setSelectedOption(brand);
        setIsOpen(false);
        brandFilterHandler(brand)
    }

    return (

        <div className='flex gap-2 ml-auto md:m-0'>
            <p className='text-amber-400'>Brand</p>
            <div className="relative w-1/2">
                <button className="flex justify-between gap-2 appearance-none w-32 min-w-fit bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 rounded-lg leading-tight focus:outline-none" onClick={toggleDropdown}>
                    {selectedOption}
                    <img className='w-5' src={isOpen ? collapseArrow : expandArrow} alt="arrow" />
                </button>

                {isOpen && (
                    <div className="absolute z-10 bg-white rounded-lg mt-1 h-72 overflow-y-scroll">
                        {brands?.map((brand, index) => (
                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200" key={index} onClick={() => handleOptionClick(brand)}>
                                {brand}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrandFilter
