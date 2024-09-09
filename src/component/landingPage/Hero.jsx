import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(()=>{
     function breakText (){
      let taxt = document.querySelector('h1');
      let content = taxt.textContent;
      let spli = content.split("");
      let cluttert = '';
      spli.forEach(abc => {
        cluttert += `<span>${abc}</span>`
      })
       taxt.innerHTML = cluttert
       console.log(taxt)
     }
     breakText();
     gsap.to('h1 span',{
      y:'-100%',
      opacity:0,
      duration:1,
      delay:1.2,
      stagger:0.15,
      scrollTrigger:{
        trigger:'h1 span',
        scroller:'body',
        start:'top 50%',
        scrub:true
      }
     })
  },[])
  return (
    <div id='fuck' className='w-full h-screen grid justify-center items-center relative -z-10'>
      <div className="box relative">
        <h1 className=' xl:text-9xl text-5xl capitalize'>modern</h1>
        <img className=' absolute top-0 -z-10' src="https://i.pinimg.com/originals/9c/42/4b/9c424b06e20eac38487f679db77ff730.gif" alt="" />
      </div>
    </div>
  );
}

export default Hero;
