import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
const ManSlide = () => {
    useGSAP(()=>{
        let box = document.querySelector('.box');
        box.addEventListener("mousemove", ()=>{
            gsap.to(box,{
                width:'100%'
            })
        })
       
    },[])
  return (
    <div className=' w-full h-fit grid grid-cols-4 gap-20'>
        <div className="box bg-red-100 w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia consequuntur deserunt ratione asperiores repudiandae qui alias tempore doloremque blanditiis eos quos aut aliquid et, dolorum iste saepe ab expedita.</p>
        </div>
        <div className="box bg-red-100 w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia consequuntur deserunt ratione asperiores repudiandae qui alias tempore doloremque blanditiis eos quos aut aliquid et, dolorum iste saepe ab expedita.</p>
        </div>
        <div className="box bg-red-100 w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia consequuntur deserunt ratione asperiores repudiandae qui alias tempore doloremque blanditiis eos quos aut aliquid et, dolorum iste saepe ab expedita.</p>
        </div>
        <div className="box bg-red-100 w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia consequuntur deserunt ratione asperiores repudiandae qui alias tempore doloremque blanditiis eos quos aut aliquid et, dolorum iste saepe ab expedita.</p>
        </div>
    </div>
  )
}

export default ManSlide