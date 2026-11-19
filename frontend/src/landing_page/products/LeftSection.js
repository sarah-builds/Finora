import React from "react";

export default function LeftSection({
  imageurl,
  productname,
  productdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageurl} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productname}</h1>
          <p>{productdescription}</p>
         <div>
           <a href={trydemo}>Try Demo</a>
          <a href={learnmore} style={{marginLeft:"50px"}}>Learn More</a>
         </div>
          <div className="mt-3">
            <a href={googleplay}><img src="media/images/googlePlayBadge.svg"/></a>
          <a href={appstore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
