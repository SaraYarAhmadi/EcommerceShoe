import React from 'react'
import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function ProductCard() {
    return (
        <div className='p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-xl rounded-2xl border-2 border-gray-200 dark:border-gray-700'>
        <div className='relative mb-2 md:mb-5 rounded-t-lg overflow-hidden'>
            <img src="/img/shoe/gallery/rasmi1.jpg" alt="css" className='w-32 mx-auto md:w-auto' />
            <span className='absolute top-1.5 right-1.5 block h-5 md:w-10 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaDemiBold bg-sky-300 text-white rounded-full'>12%</span>
        </div>
        <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5 min-h-[40px] md:min-h-[56px]">ونس چرم طوسی مردانه mrc118-01</h5>
        <div className='flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300 dark:border-b-gray-700'>
            <div className='text-sky-500 dark:text-sky-400 pr-1'>
                <span className='font-DanaDemiBold text-base lg:text-xl '>
                    154000
                </span>
                <span className='text-xs md:text-sm tracking-tighter'>
                    تومان
                </span>
            </div>
            <div className='offer'>
                <span className='text-xs lg:text-xl'>144000</span>
                <span className='hidden md:inline text-sm tracking-tighter'>تومان</span>
    
            </div>
        </div>
        <div className='flex items-center justify-between mt-2.5'>
            <a href="#" className='flex items-center gapx2 md:gap-x-3' >
                <span className='flex items-center justify-center w-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-sky-600 dark:bg-zinc-800 dark:hover:bg-slate-500 text-gray-400 hover:text-white rounded-full'><HiOutlineShoppingCart /></span>
            </a>
            <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
            </span>
        </div>
    </div>
    )
}
