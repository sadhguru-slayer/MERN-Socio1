import React from 'react'
import {Triangle} from 'react-loader-spinner';

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center h-90vh w-full'>
      <div className="rotate-180">
      <Triangle
    height="80"
    width="80"
    color="purple"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
  </div>
  <h2 className=' text-slate-950 mt-3'>{message}</h2>
  </div>
  )
}

export default Spinner