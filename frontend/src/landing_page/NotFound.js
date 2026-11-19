import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
     <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">404 Not FOund</h1>
        <p>
          Soory, the page you are looking for doesn't exist.
        </p>
        <Link to="/">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Go back to home page 
        </button>
        </Link>
      </div>
    </div>
  )
}
