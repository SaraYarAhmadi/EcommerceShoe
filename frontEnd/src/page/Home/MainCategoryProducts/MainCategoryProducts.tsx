import React from 'react'
import { Link } from 'react-router-dom'

export default function MainCategoryProducts() {
    return (
        <section className=' w-[90%] mx-auto pt-6 lg:pt-24'>
            <div className='flex items-center justify-center gap-y-5 gap-x-[19px] md:gap-[36px] flex-wrap border-px py-4 pt-6 rounded-3xl shadow-xl bg-gray-200 dark:bg-slate-900 '>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/کفش-0" className='flex items-center w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory2.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'>کفش چرم مردانه</span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/بوت-0" className='flex items-center w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory11.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'>بوت چرم مردانه</span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/بوت-0" className='flex items-center w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory22.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'> بوت چرم زنانه </span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/کیف-0" className='flex items-centerw-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory18.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'>کیف چرم زنانه</span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/ست هدیه زنانه و مردانه-0" className='flex items-centerw-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory17.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'>ست چرم مردانه</span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/صندل-0" className='flex items-center w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/pcategory16.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'> صندل چرم</span>
                </div>
                <div className='flex flex-col items-center justify-center w-25 md:w-50 text-center'>
                    <Link to="/Category-info/category/محصولات پیشنهادی-0" className='flex items-center w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden'>
                        <img src="img/shoe/vaks.jpg" alt="shoe" loading='lazy' className='w-full h-full' />
                    </Link>
                    <span className='inline-block font-DanaDemiBold text-sm md:text-base text-zink-700 dark:text-white mt-1.5 md:mt-2.5'> سایر </span>
                </div>
            </div>

        </section>
    )
}
