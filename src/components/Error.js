import React from 'react'

import Loading from './Loading'

const Error = () => {
  return (
    <>
      <Loading />
      <div className='section section-center text-center'>
        <h3>404</h3>
        <h4>Product not found.</h4>
      </div>
    </>
  )
}

export default Error
