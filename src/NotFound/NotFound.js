import React from 'react'

const NotFound = () => {
  return (
    <section className='container '>
      <div className='row'>
        <div className='col-lg-6'>
          <p className=''>
            Error 404
          </p>
          <h1 className=''>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className=''>
            You might have the wrong address, or the page may have moved.
          </p>
          <button className='me-4 p-3'>
            Back to homepage
          </button>
          <button className='p-3'>
            Contact us
          </button>
        </div>
        <div className='col-lg-6'>
          <div >
            <img className='img-fluid'
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
