import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'


const Category = () => {
  useGSAP(()=>{

    let man = document.querySelector(".man");
    man.addEventListener('mousemove',()=>{
      gsap.to('#ma img',{
        rotateY:180,
        duration:2,
        opacity:0
      })
    })
    
  },[])
  return (
    <div className=' bg-zinc-900 p-8 w-full h-full rounded-tr-3xl rounded-tl-3xl'>
        <div className="heading border-b-[1px]">
            <h1 className=' text-4xl md:text-6 xl:text-9xl capitalize text-white font-light'>category</h1>
        </div>
        <div className="nav grid grid-cols-2 justify-center justify-items-center my-8">
          {["man","woman"].map(abc => <Link className=' text-orange-500 text-3xl capitalize' to={abc} >{abc}</Link>)}
        </div>
        <div className="category grid grid-cols-2">
          <div className="man">
            
          </div>
          <div className="woman">

          </div>
        </div>
    </div>
  )
}

export default Category