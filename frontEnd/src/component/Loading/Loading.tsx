import React from 'react'

export default function Loading() {
  return (
    <div className='fixed w-full h-full flex items-center justify-center z-50 bg-white'>
      <img src="/gif/ecommerceLoading.gif" alt="GIF" className='w-[500px] h-[300px]' />
    </div>
  )
}
