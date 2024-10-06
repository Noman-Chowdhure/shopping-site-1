import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SlideMan = () => {

  useGSAP(()=>{
    let time = gsap.timeline();
    time.from('#img',{
      x:-100,
      y:-100,
      duration:1.2,
      stagger:0.5,
      opacity:0,
      scrollTrigger:{
        scroller:'body',
        trigger:'#img',
        start:'top 4%',
        scrub:true
      }
    })

    time.from('#text' ,{
      x:100,
      y:100,
      duration:1.2,
      opacity:0,
      scrollTrigger:{
        scroller:'body',
        trigger:'#img',
        start:'top 4%',
        scrub:true
      }
    }
    )
  })

  return (
    <div>
       <div className="box grid grid-rows-4 grid-cols-1 gap-10 md:gap-20 w-full h-fit justify-center justify-items-center">

         <div className="child grid grid-cols-3">
            <div id="img" className="img-path col-span-2 w-full">
              <img className=" object-contain" src="https://i.pinimg.com/564x/a4/6f/42/a46f42bca41a2e729e523e5e6060a014.jpg" alt="" />
            </div>

            <div id="text" className="text-path">
              <h1 className="text-9xl font-semibold">01</h1>
              <p className=" text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe commodi sequi quas atque nobis tempore nihil nulla, deleniti vitae accusamus ducimus mollitia minima enim, nesciunt cumque ipsam dicta facere?</p>
            </div>
         </div>
         <div className="child grid grid-cols-3">
            <div id="text"  className="text-path">
              <h1 className="text-9xl font-semibold">02</h1>
              <p className=" text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe commodi sequi quas atque nobis tempore nihil nulla, deleniti vitae accusamus ducimus mollitia minima enim, nesciunt cumque ipsam dicta facere?</p>
            </div>

           <div id="img" className="img-path col-span-2 w-full">
              <img className=" object-contain" src="https://i.pinimg.com/564x/a4/6f/42/a46f42bca41a2e729e523e5e6060a014.jpg" alt="" />
            </div>
         </div>

         <div className="child grid grid-cols-3">
         <div id="img" className="img-path col-span-2 w-full">
              <img className=" object-contain" src="https://i.pinimg.com/564x/a4/6f/42/a46f42bca41a2e729e523e5e6060a014.jpg" alt="" />
          </div>
            <div id="text"  className="text-path">
              <h1 className="text-9xl font-semibold">03</h1>
              <p className=" text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe commodi sequi quas atque nobis tempore nihil nulla, deleniti vitae accusamus ducimus mollitia minima enim, nesciunt cumque ipsam dicta facere?</p>
            </div>
         </div>
         <div className="child grid grid-cols-3">  
            <div id="text"  className="text-path">
              <h1 className="text-9xl font-semibold">04</h1>
              <p className=" text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus saepe commodi sequi quas atque nobis tempore nihil nulla, deleniti vitae accusamus ducimus mollitia minima enim, nesciunt cumque ipsam dicta facere?</p>
            </div>
            <div id="img" className="img-path col-span-2 w-full">
              <img className=" object-contain" src="https://i.pinimg.com/564x/a4/6f/42/a46f42bca41a2e729e523e5e6060a014.jpg" alt="" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default SlideMan