import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5'>
      <div className='row text-center'>
        
          <img src='media/images/homeHero.png' className='mb-5 mx-auto' style={{width:"75%",height:"auto"}}></img>
        <h1 className='mt-9'>
          Invest in everything
        </h1>
        <p>
          online platform to invest in stocks,derivatives,mutual funds,and more
        </p>
        <button
  className="p-2 btn btn-primary"
  style={{ width: "30%", margin: "0 auto" }}
>
  Signup Now
</button>
      </div>
    </div>
  )
}
