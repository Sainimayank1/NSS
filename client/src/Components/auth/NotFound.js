import React from 'react'
import { Helmet } from 'react-helmet'
import "./NotFound.css"
function NotFound() {
  return (<>
    <Helmet>
        <title>404! Not found.</title>
    </Helmet>
    <div className='main-notfound1'>
        <div className='notFound'>
            <h1 className='blue'>404</h1>
            <span className='notfound-span'>Opps! That page not found.</span>
        </div>
    </div>
  </>
  )
}

export default NotFound