import React from 'react'
import { useSelector } from 'react-redux'
import Alert from './Alert'

const AlertBar = () => {
    const isAlertVisible = useSelector(state => state.alert.isVisible)
    return (
        <div className='fixed top-40 left-[40%] flex justify-center items-center'>{
            isAlertVisible && <Alert />
        }</div>
    )
}

export default AlertBar