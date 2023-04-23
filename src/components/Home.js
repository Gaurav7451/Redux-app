import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.zdnet.com/a/img/resize/f697af7b80f6194500b22e05d580f252c8697580/2023/02/03/0015697b-a822-4dce-b4dc-ed3bc4ee9a55/samsung-galaxy-s23-ultra-back-panel-2.jpg?auto=webp&fit=crop&height=1200&width=1200" />
                
            </div>
            <div className="text-wrapper item">
               <span>
                samsung
               </span> 
               <span>
                Price:1000$
               </span> 
            </div>
            <div className="btn-wrapper item">
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home