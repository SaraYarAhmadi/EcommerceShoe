import React, { useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import 'swiper/css/pagination';
import 'swiper/css';
import SwiperProduct from '../../../SwiperProduct';
import { Link } from 'react-router-dom';

export default function CategorySwiper() {
    return (
        <section className=" w-full mt-6 md:mt-10">
            <div className="home-page-category-box">

                <div className="flex-layout mb-4 md:mb-8">
                    <div>
                        <h4 className="section-title">  محصولات پر فروش</h4>
                        <span className="section-subtitle">
                            بهترین محصولات
                        </span>
                    </div >
                    <div>
                        <Link to="/Category-info/category" className="section-link-category-box">
                            <span className="hidden md:inline-block">
                                مشاهده محصولات
                            </span>
                            <span className="inline-block md:hidden"> مشاهده همه</span>
                            <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>
                        </Link>
                    </div>
                </div>
                <SwiperProduct />
            </div>
        </section>
    )
}
