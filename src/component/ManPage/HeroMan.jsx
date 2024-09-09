import React from 'react'

const HeroMan = () => {
  return (
    <div className=' w-full h-full grid md:grid-cols-2 justify-center justify-items-center items-center gap-10 md:gap-20'>
        <div className="img-content">
           <img src="https://i.pinimg.com/564x/cd/79/05/cd7905153a52c6d4db6027959f295bfa.jpg" alt="" />
        </div>
        <div className="text-content space-y-4">
            <h1 className=' text-4xl md:text-9xl uppercase  border-l-2 '>man</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odit.</p>
            <button className=' border-[1px] border-zinc-200 px-4'>shop now..</button>
        </div>
    </div>
  )
}

export default HeroMan