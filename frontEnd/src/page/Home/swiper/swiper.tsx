import React, { useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperProduct from '../../../SwiperProduct';

export default function CategorySwiper() {
    return (
        <section className=" w-full mt-6 md:mt-10">
            <div className="home-page-category-box overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 dark:bg-zinc-800">

                <div className="flex items-center justify-between mb-4 md:mb-8">
                    <div>
                        <h4 className="section-title">  محصولات پر فروش</h4>
                        <span className="section-subtitle">
                            بهترین محصولات
                        </span>
                    </div >
                    <div>
                        <a href="#" className="section-link flex items-center justify-between  text-base font-DanaMedium tracking-tighter">
                            <span className="hidden md:inline-block">
                                مشاهده محصولات
                            </span>
                            <span className="inline-block md:hidden"> مشاهده همه</span>
                            <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>

                        </a>
                    </div>

                </div>

                <SwiperProduct />
            </div>
        </section>
    )
}
