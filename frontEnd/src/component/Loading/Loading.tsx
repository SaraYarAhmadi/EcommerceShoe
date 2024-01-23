import React from 'react'

export default function Loading() {
  return (
    <div className='fixed w-full h-full flex items-center justify-center z-50'>
        <img src="/gif/loaddingSpinners.gif" alt="GIF" className='w-full h-full' />
    </div>
  )
}
