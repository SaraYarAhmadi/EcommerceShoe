import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function Slider() {

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true,

      }}
      effect={'fade'}
      navigation={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      <SwiperSlide className='swiper-slide rounded-3xl' >
        <div className='flex items-center justify-center w-full h-full parallax-bg overflow-hidden'>
          <img src="/img/shoe/slider/slider11.webp" className='bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden' alt="shoe" />
        </div>
        <div className='absolute md:pr-24 p-6 md:p-10 pt-32 md:pt-40'>
          <div className='w-full h-full flex items-center '>
            <a href='#' className='flex items-center gap-x-3 md:gap-x-6'>
              <div className='w-full text-white'>
                <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>کیف و کفشتو قسطی بخر</h5>
                <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 25٪</p>
                <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> چرم طبیعی | ارسال رایگان | پرداخت درب منزل </span>
              </div>
            </a>
          </div>
          <div className="text md:pt-6 md:pr-80" data-swiper-parallax="-100">
            <Link to="/Category-info/category/محصولات پیشنهادی-0" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</Link>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide rounded-3xl' >
        <div className=' w-full h-full parallax-bg '>
          <img src="/img/shoe/slider/slider4.jpg" className='bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden' alt="" />
        </div>
        <div className='absolute md:pr-24 p-6 md:p-10 pt-32 md:pt-40'>
          <div className='w-full h-full flex items-center '>
            <a href='#' className='flex items-center gap-x-3 md:gap-x-6'>
              <div className='w-full text-white'>
                <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>کیف و کفشتو قسطی بخر</h5>
                <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 25٪</p>
                <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> چرم طبیعی | ارسال رایگان | پرداخت درب منزل </span>
              </div>
            </a>
          </div>
          <div className="text md:pt-6 md:pr-80" data-swiper-parallax="-100">
            <Link to="/Category-info/category/محصولات پیشنهادی-0" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</Link>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide rounded-3xl' >
        <div className=' w-full h-full parallax-bg '>
          <img src="/img/shoe/slider/slider2.jpg" className='bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden' alt="" />
        </div>
        <div className='absolute md:pr-24 p-6 md:p-10 pt-32 md:pt-40'>
          <div className='w-full h-full flex items-center '>
            <a href='#' className='flex items-center gap-x-3 md:gap-x-6'>
              <div className='w-full text-white'>
                <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>کیف و کفشتو قسطی بخر</h5>
                <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 25٪</p>
                <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> چرم طبیعی | ارسال رایگان | پرداخت درب منزل </span>
              </div>
            </a>
          </div>
          <div className="text md:pt-6 md:pr-80" data-swiper-parallax="-100">
            <Link to="/Category-info/category/محصولات پیشنهادی-0" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</Link>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide className='swiper-slide rounded-3xl' >
        <div className=' w-full h-full parallax-bg '>
          <img src="/img/shoe/slider/sliderm5.jpg" className='bg-center bg-cover bg-blend-normal flex items-center w-full h-full justify-center border-px rounded-3xl shadow-xl overflow-hidden' alt="" />
        </div>
        <div className='absolute md:pr-24 p-6 md:p-10 pt-32 md:pt-40'>
          <div className='w-full h-full flex items-center '>
            <a href='#' className='flex items-center gap-x-3 md:gap-x-6'>
              <div className='w-full text-white'>
                <h5 className='font-MorabbaBold text-xl md:text-4xl mb-2'>کیف و کفشتو قسطی بخر</h5>
                <p className='font-DanaDemiBold text-lg md:text-2xl '> تخفیف تا 25٪</p>
                <span className='font-Dana text-sm md:text-xl md:pr-50 my-4'> چرم طبیعی | ارسال رایگان | پرداخت درب منزل </span>
              </div>
            </a>
          </div>
          <div className="text md:pt-6 md:pr-80" data-swiper-parallax="-100">
            <Link to="/Category-info/category/محصولات پیشنهادی-0" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</Link>
          </div>
        </div>

      </SwiperSlide>
    </Swiper>
  )
}
