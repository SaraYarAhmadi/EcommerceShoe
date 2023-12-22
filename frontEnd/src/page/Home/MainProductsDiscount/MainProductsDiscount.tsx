import React from 'react'
import { GiShoebillStork } from 'react-icons/gi'
import { IoIosArrowBack } from 'react-icons/io'

export default function MainProductsDiscount() {
  return (
    <div className="flex w-[90%] mx-auto text-center justify-center pt-6 lg:pt-24">
        <section className=" w-full mt-6 md:mt-10">
          <div className="home-page-category-box overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 dark:bg-zinc-800">

            <div className="flex items-center justify-between mb-4 md:mb-8">
              <div>
                <h4 className="section-title"> وبلاگ</h4>
                {/* <span className="section-subtitle">
                    بهترین محصولات
                  </span> */}
              </div>
              <div>
                <a href="#" className="section-link flex items-center justify-between  text-base font-DanaMedium tracking-tighter">
                  <span className="hidden md:inline-block">
                    مشاهده همه
                  </span>
                  <span className="inline-block md:hidden"> مشاهده همه</span>
                  <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>

                </a>
              </div>

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5'>
              <div className='group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-2xl rounded-2xl'>
                <div className='relative w-[400px] h-[120px] sm:h-auto sm:w-auto sm:mb-4 rounded-2xl rondede-bl-4xl overflow-hidden'>
                  <img src="./img/shoe/blog2.jpg" alt="blog" className='h-full w-full sm:h-auto object-cover' />
                  <div className='absolute inset-0 w-full h-full hidden md:flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75'>
                    <div className='text-amber-900 text-6xl lg:text-9xl '>
                      <GiShoebillStork />
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-full flex-col sm:flex-row pb-5 text-center '>
                  <a href="#" className='font-DanaDemiBold md:font-Dana text-sm md:text-xl mt-2.5 sm:mt-5 line-clamp-2 text-sky-700 dark:text-white'>معرفی انواع واکس کفش چرم و کاپشن چرم و ترفندهای خاص  </a>

                  <div className='flex items-center justify-center w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-[28px] pb-1.5'>
                    <a href="#" className='flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 bg-orange-200/20 text-orange-300'>مطالعه بیشتر...</a>
                  </div>
                </div>
              </div>
              <div className='group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-2xl rounded-2xl'>
                <div className='relative w-[400px] h-[120px] sm:h-auto sm:w-auto sm:mb-4 rounded-2xl rondede-bl-4xl overflow-hidden'>
                  <img src="./img/shoe/blog5.jpg" alt="blog" className='h-full w-full sm:h-auto object-cover' />
                  <div className='absolute inset-0 w-full h-full hidden md:flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75'>
                    <div className='text-amber-900 text-6xl lg:text-9xl '>
                      <GiShoebillStork />
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-full flex-col sm:flex-row pb-5 text-center '>
                  <a href="#" className='font-DanaDemiBold md:font-Dana text-sm md:text-xl mt-2.5 sm:mt-5 line-clamp-2 text-sky-700 dark:text-white'> معرفی کامل انواع چرم موجود در بازار و تفاوت آنها </a>

                  <div className='flex items-center justify-center w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-[28px] pb-1.5'>
                    <a href="#" className='flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 bg-orange-200/20 text-orange-300'>مطالعه بیشتر...</a>
                  </div>
                </div>
              </div>
              <div className='group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-2xl rounded-2xl'>
                <div className='relative w-[400px] h-[120px] sm:h-auto sm:w-auto sm:mb-4 rounded-2xl rondede-bl-4xl overflow-hidden'>
                  <img src="./img/shoe/blog6.jpg" alt="blog" className='h-full w-full sm:h-auto object-cover' />
                  <div className='absolute inset-0 w-full h-full hidden md:flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75'>
                    <div className='text-amber-900 text-6xl lg:text-9xl '>
                      <GiShoebillStork />
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-full flex-col sm:flex-row pb-5 text-center '>
                  <a href="#" className='font-DanaDemiBold md:font-Dana text-sm md:text-xl mt-2.5 sm:mt-5 line-clamp-2 text-sky-700 dark:text-white'> آشنایی با راحت‌ترین بوت‌ها‌ و نیم‌بوت‌های زنانه </a>

                  <div className='flex items-center justify-center w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-[28px] pb-1.5'>
                    <a href="#" className='flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 bg-orange-200/20 text-orange-300'>مطالعه بیشتر...</a>
                  </div>
                </div>
              </div>
              <div className='group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-2xl rounded-2xl'>
                <div className='relative w-[400px] h-[120px] sm:h-auto sm:w-auto sm:mb-4 rounded-2xl rondede-bl-4xl overflow-hidden'>
                  <img src="./img/shoe/blog7.jpg" alt="blog" className='h-full w-full sm:h-auto object-cover' />
                  <div className='absolute inset-0 w-full h-full hidden md:flex items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75'>
                    <div className='text-amber-900 text-6xl lg:text-9xl '>
                      <GiShoebillStork />
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-full flex-col sm:flex-row pb-5 text-center '>
                  <a href="#" className='font-DanaDemiBold md:font-Dana text-sm md:text-xl mt-2.5 sm:mt-5 line-clamp-2 text-sky-700 dark:text-white'>  چه کفش‌هایی در سال 2023 ترند شده‌اند؟</a>

                  <div className='flex items-center justify-center w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-[28px] pb-1.5'>
                    <a href="#" className='flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 bg-orange-200/20 text-orange-300'>مطالعه بیشتر...</a>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </section>
      </div>
  )
}
