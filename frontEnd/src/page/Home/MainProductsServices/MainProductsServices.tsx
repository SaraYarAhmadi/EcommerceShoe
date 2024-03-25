import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { TfiHeadphoneAlt, TfiGift } from 'react-icons/tfi'

export default function MainProductsServices() {
  return (
    <section className='services mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24'>
    <div className='flex-layout gap-y-11 flex-wrap child:w-1/2 lg:child:w-auto child:text-center text-zinc-700 dark:text-white border-px py-14 px-10 rounded-3xl shadow-xl bg-gray-200 dark:bg-slate-900 '>
      <div className='flex items-center justify-center lg:justify-between flex-col sm:flex-row gap-x-4 gap-y-5 text-center'>
        <div className='text-sky-500 text-4xl lg:text-6xl pb-2'>
          <TfiHeadphoneAlt />
        </div>
        <div>
          <h5 className='font-DanaDemiBold text-sm md:text-lg mb-1 md:mb-2'>پشتیبانی شبانه روزی</h5>
          <span className='text-xs md:text-sm'> 7 روز هفته , 24 ساعته</span>
        </div>

      </div>
      <div className='flex items-center justify-center lg:justify-between flex-col sm:flex-row gap-x-4 gap-y-5 text-center'>
        <div className='text-sky-500 text-4xl lg:text-6xl pb-2'>
          <TfiGift />
        </div>
        <div>
          <h5 className='font-DanaDemiBold text-sm md:text-lg mb-1 md:mb-2'> امکان تحویل اکسپرس</h5>
          <span className='text-xs md:text-sm'>ارسال بسته با سرعت زیاد</span>
        </div>

      </div>
      <div className='flex items-center justify-center lg:justify-between flex-col sm:flex-row gap-x-4 gap-y-5 text-center'>
        <div className='text-sky-500 text-4xl lg:text-6xl pb-2'>
          <HiOutlineBuildingOffice2 />
        </div>
        <div>
          <h5 className='font-DanaDemiBold text-sm md:text-lg mb-1 md:mb-2'> عمده فروشی و فروش سازمانی </h5>
          <span className='text-xs md:text-sm'>برگزاری نمایشگاه های موقت</span>
        </div>

      </div>
      <div className='flex items-center justify-center lg:justify-between flex-col sm:flex-row gap-x-4 gap-y-5 text-center'>
        <div className='text-sky-500 text-4xl lg:text-6xl pb-2'>
          <HiOutlineUserGroup />
        </div>
        <div>
          <h5 className='font-DanaDemiBold text-sm md:text-lg mb-1 md:mb-2'> باشگاه مشتریان </h5>
          <span className='text-xs md:text-sm'>صدور کارت باشگاه مشتریان </span>
        </div>

      </div>
    </div>
  </section>
  )
}
