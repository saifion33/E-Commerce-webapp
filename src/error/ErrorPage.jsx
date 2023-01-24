import React from 'react'
import { useRouteError } from "react-router-dom";
import errorGif from './error.gif';
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-white rounded-md shadow-lg p-4'>
                <h1 className='text-purple-600 text-2xl font-bold text-center py-4'>Oops!</h1>
                <img className='w-20 h-20 mx-auto rounded-xl ' src={errorGif} alt="error 404" />
                <p className='p-3 text-gray-500 font-semibold'>Sorry, an unexpected error has occurred. This page not found. </p>
                <p className='text-center text-gray-500'>
                    {error.statusText || error.message}
                </p>
            </div>
        </div>
    );
}

export default ErrorPage
