import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
      <div className="container my-5 page-not-found">
        <div className="row justify-content-center h-100">
          <div className="col-lg-4 d-flex justify-content-center">
          <div>
          <h2 className='display-2 text-center'>404</h2>
          <p className='text-center'><strong>Sorry</strong>, The page you are looking for isn't here</p>
            <div className="d-flex w-100 justify-content-center">
            <Link className='btn btn-success align-self-center' to="/">Go To Home</Link>          
            </div>
          </div>        
          </div>
        </div>
      </div>
    </>
  )
}
