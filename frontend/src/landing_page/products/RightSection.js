import React from 'react'

export default function RightSection({imageurl,
  productname,
  productdescription,
  learnmore}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productname}</h1>
          <p>{productdescription}</p>
          <div>
            <a href={learnmore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageurl} />
        </div>
      </div>
    </div>
  )
}
