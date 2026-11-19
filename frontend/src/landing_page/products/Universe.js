import React from 'react'

export default function Universe() {
  return (
    <div className='container'>
        <div className='row text-center'>
            <h1>The Finora Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/smallcaseLogo.png"></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
             <div className='col-4 p-3 mt-5'>
                <img src="media/images/streakLogo.png" style={{width:"40%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/sensibullLogo.svg" style={{width:"80%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>

             <div className='col-4 p-3 mt-5'>
                <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
             <div className='col-4 p-3 mt-5'>
                <img src="media/images/goldenpiLogo.png" style={{width:"40%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
            <div className='col-4 p-3 mt-5'>
                <img src="media/images/dittoLogo.png" style={{width:"40%"}}></img>
                <p className='text-small text-muted'>Thematic investment platform</p>
            </div>
        </div>
    </div>
  )
}
