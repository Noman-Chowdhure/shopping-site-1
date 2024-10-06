import React from 'react'

const SlideMNTwo = ({item,slide,info}) => {

    console.log(info)
  return (
    <div className=' flex gap-10'>
       <div className="box">
        <h1>{item.nam}</h1>
        <button onClick={()=>slide(item)}>click here</button>
       </div>
       <div className="child">
         <p>{
            }</p>
       </div>
    </div>
  )
}

export default SlideMNTwo