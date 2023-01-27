import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const message = useSelector(state => state.alert.message)
    const type = useSelector(state => state.alert.type)
    return (
        <div className={`${type === 'success' ? ' bg-lime-600 ' : 'bg-orange-700'} rounded-full py-2 px-4 text-slate-900 font-bold`}>{message}</div>
    )
}

export default Alert