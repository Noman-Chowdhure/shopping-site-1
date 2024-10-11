import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <div>
        <div className="heading">
          <h1>e-shop</h1>
        </div>
        <div className="detils">
            <h1>presentations</h1>
            <div className="servises">
                <div className="service">
                    <p>s:</p>
                     <ul>
                        <Link>instagram</Link>
                     </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter