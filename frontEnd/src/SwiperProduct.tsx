import React from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CiStar } from 'react-icons/ci';
import ProductCard from './component/ProductCard/ProductCard';

export default function SwiperProduct() {
  return (
    <div className='w-full'>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={false}
        navigation={true}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          926: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className='h-full  dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full  dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide className='h-full dark:bg-zinc-700 p-0'>
          <ProductCard />
        </SwiperSlide>
       
      </Swiper>

    </div>
  )
}
