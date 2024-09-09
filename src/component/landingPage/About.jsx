import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(()=>{
    gsap.from( "#ol li", {
      x:-300,
      opacity:0,
      duration:1.3,
      stagger:1.2,
      scrollTrigger:{
        trigger:'#ol li',
        scroller:'body',
        start:'top 50%',
        end:'top -100%',
        markers:true,
      }
    })
  },[])
  return (
    <div data-scroll data-scroll-speed="0.8" className=' p-8 ' id='about'>
      <h1 id='topNav' className=' my-8 xl:text-6xl md:text-4xl capitalize font-light'>we make sure your product & creation deliverd porperly</h1>
      <div className="content w-full h-fit grid grid-cols-2 md:gird-cols-1 gap-10 justify-center justify-items-center">
        <div className="eyes">
          <h1 id='heading'>about us</h1>
        </div>
        <div className="text-content space-y-4">
          <h1 className=' text-2xl capitalize '>why we are best platform for online..?</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aliquam vel possimus magni ipsa fugiat quam repudiandae expedita harum, consectetur itaque eum ex repellat, sit ullam blanditiis quae nobis eaque!</p>
          <nav>
            <ol id='ol' className=' space-y-2'>
               <li>we have latest colution ..</li>
               <li>we have latest colution ..</li>
               <li>we have latest colution ..</li>
               <li>we have latest colution ..</li>
               <li>we have latest colution ..</li>
            </ol>
          </nav>
        </div>
      </div>   
    </div>
  )
}

export default About
