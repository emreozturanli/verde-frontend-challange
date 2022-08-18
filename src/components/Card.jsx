import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({id,title,body,userId}) => {
  const navigate = useNavigate()
  return (
    <div 
    className='bg-sky-100 rounded p-4 shadow-md hover:bg-sky-200 cursor-pointer'
    onClick={()=>navigate(`/details/${id}`)}
    >
      <h3 className='font-bold pb-4'>{title}</h3>
      <p>{body.slice(0,100)}...</p>
    </div>
  )
}

export default Card