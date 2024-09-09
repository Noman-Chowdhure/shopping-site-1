import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className=' bg-zinc-900 p-8 w-full h-full rounded-tr-3xl rounded-tl-3xl'>
        <div className="heading border-b-[1px]">
            <h1 className=' text-4xl md:text-6 xl:text-9xl capitalize text-white font-light'>category</h1>
        </div>
        <div className="nav grid grid-cols-2 justify-center justify-items-center my-8">
          {["man","woman"].map(abc => <Link className=' text-orange-500 text-3xl capitalize' to={abc} >{abc}</Link>)}
        </div>
    </div>
  )
}

export default Category