import React from 'react'
import { Link } from 'react-router-dom'

export default function MainCategoryBanner() {
  return (
    <section className='category-banner w-[90%] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-white'>
        <Link  to="/Category-info/category" className='category-banner-item1 bg-cover bg-center flex flex-col items-start justify-center pr-7 md:pr-12 rounded-2xl h-[142px] md:h-[248px]'>
          <span className='font-DanaDemiBold text-2xl/6 md:text-3xl/6 mb-4 md:mb-7'>زنونه یا مردونه فرقی نداره</span>
          <span className='font-DanaMedium text-xl/6'> رنگ بندی متنوع و جذاب </span>
        </Link >
        <Link  to="/Category-info/category" className='category-banner-item2 bg-cover bg-center flex flex-col items-start justify-center pr-7 md:pr-12 rounded-2xl h-[142px] md:h-[248px]'>
          <span className='font-DanaDemiBold text-2xl/6 md:text-3xl/6 mb-4 md:mb-7'>زیبایی رو ست کن </span>
          <span className='font-DanaMedium text-xl/6'> استایلت رو به روز نگهدار </span>
        </Link >
      </div>
    </section>
  )
}
