import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const HeroMan = () => {

  return (
    <div className=' w-full h-[30vh] block'>
       <h1 className=' md:text-9xl text-4xl uppercase font-extrabold'>here you get man product</h1>
    </div>
  )
}

export default HeroMan