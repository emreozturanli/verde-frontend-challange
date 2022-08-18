import React from 'react'

const Comments = ({name,email,body}) => {
    return (
        <div className='md:w-9/12 xl:w-1/2  mt-3 ml-16'>
        <div className='bg-sky-50 p-4  rounded shadow-md '>
            <h3 className='font-bold pb-4'>{name}</h3>
            <p className='pb-4'>{body}</p>
            <span><i>{email}</i></span>
        </div>
        </div>
    )
}

export default Comments