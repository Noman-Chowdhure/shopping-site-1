import React from 'react'

const ProductCard = ({itmes}) => {
    const {name,price,image} = itmes
  return (
    <div className=' bg-slate-100 w-full h-full p-5 shadow-lg'>
       <img src={image} alt="" />
       <h1>{name}</h1>
       <p>{price}</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </div>
  )
}

export default ProductCard