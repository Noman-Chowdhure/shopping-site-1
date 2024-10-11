
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const HeroMan = () => {

  return (
    <div className=' w-full h-[50vh] block flex items-center justify-center justify-items-center'>
       <h1 className=' md:text-9xl text-4xl uppercase font-extrabold'>here you get man product</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae sed deserunt ad, dicta consequuntur quae illum voluptatum architecto. Velit unde rerum autem. Mollitia autem libero, ratione praesentium minima temporibus.</p>
       
    </div>
  )
}

export default HeroMan