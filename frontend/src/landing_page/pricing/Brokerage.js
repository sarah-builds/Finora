import React from 'react'

export default function Brokerage() {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 text-center border-top'>
            <div className='col-8 p-4'>
                <a href='' style={{textDecoration:"none"}}><h1 className='text-center'>Bokerage Calculator</h1></a>
                <ul className='text-muted mt-3' style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}>
                    <li>Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.</li>
              <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
                </ul>
            </div>
            <div className='col-4'>
                <a href='' style={{textDecoration:"none"}}><h1>List of charges</h1></a>
            </div>
        </div>
    </div>
  )
}
