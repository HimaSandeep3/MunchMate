import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div>
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
      <h2>{err.data}</h2>
      <img className='notFound' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?t=st=1733883736~exp=1733887336~hmac=c2c23580386d7ac2f1555cf3099f555e66db0affd274c6107c7e638defa0eca2&w=740" alt='notFound'/>
    </div>
  )
}

export default Error