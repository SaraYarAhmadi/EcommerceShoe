import React from 'react'
import { Link } from 'react-router-dom'

export default function MainInstallmentSale() {
  return (
    <section className='products-discount w-[90%] mx-auto pt-6 lg:pt-24'>
      <Link to="/Category-info/category/محصولات پیشنهادی-0" className='category-banner-item3 bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden'>
        <div className='w-full h-full flex items-center p-6 md:p-10'>
          <div className='flex items-center gap-x-3 md:gap-x-6'>
            <img src="img/shoe/shoeicona.png" alt="icon" className='w-[87px] md:w-[110px]' />
            <div className='w-full text-white'>
              <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>کیف و کفشتو قسطی بخر</h5>
              <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 25٪</p>
              <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> چرم طبیعی | ارسال رایگان | پرداخت درب منزل </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}
