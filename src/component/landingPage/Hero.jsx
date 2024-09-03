import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    useGSAP(()=>{
      let time = gsap.timeline();
      time.to('.box',{
        y:-300,
        duration:1.2,
        opacity:0,
        scrollTrigger:{
            trigger:'.box h1',
            scroller:'body',
            start:'top 4%',

        }
      })
    },[])
  return (
    <div className=' w-full h-screen grid justify-center items-center'>
        <div className="box">
            <h1>modren is an art</h1>
        </div>
        <div className="box1">
            <h1>change your thinking mind</h1>
        </div>
        <div className="box2">
            <h1>not your dress</h1>
        </div>
        <div className="box4">
            {/* <img src="" alt="" /> */}
            <p>img here</p>
        </div>
    </div>
  )
}

export default Hero