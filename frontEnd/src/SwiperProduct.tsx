import React, { useContext } from 'react'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProductContext, ProductContextViewModel } from './context/productContex';
import ProductCard from './component/ProductCard/ProductCard';


export interface ProductViewModel {
  _id: string;
  title: string;
  description: string;
  slug: string,
  price: number,
  quantity: number,
  sold: number,
  images: string[];
  color: string[],
  category: string,
  size: string[],
  gender: number,
  totalrating: number
}

export default function SwiperProduct() {
  const productContext = useContext(ProductContext)
  const latestProduct = productContext.filter((product, index) => {
    return index >= productContext.length - 6;
  });

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
        {!!latestProduct?.length && latestProduct.map((product: ProductContextViewModel) => (
          <SwiperSlide key={product._id} className='h-full  dark:bg-zinc-700 p-0'>
            <ProductCard key={product._id} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
