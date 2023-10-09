import React from 'react'
import loadingGif from '../../assets/loadingGif.gif'

function Loading() {
  return (
    <div className='flex center' style={{width:"100%"}}>
      <img src={loadingGif} alt="" />
    </div>
  )
}

export default Loading
