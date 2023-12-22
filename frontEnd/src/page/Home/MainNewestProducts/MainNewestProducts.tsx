import React from 'react'
import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoIosArrowBack } from 'react-icons/io'
import ProductCard from '../../../component/ProductCard/ProductCard'

export default function MainNewestProducts() {
    return (

        <section className="flex w-[90%] mx-auto text-center justify-center pt-6 lg:pt-24">
            <div className="w-full mb-32 mt-6 md:mt-10">
                <div className="home-page-category-box overflow-auto flex flex-col justify-between bg-white border-2 border-solid box-border rounded-xl w-full p-8 dark:bg-zinc-800">

                    <div className="flex items-center justify-between mb-4 md:mb-8">
                        <div>
                            <h4 className="section-title"> جدید ترین محصولات</h4>
                            {/* <span className="section-subtitle">
                                بهترین محصولات
                            </span> */}
                        </div>
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

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 '>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                      
                     
                    </div>
                </div>
            </div>
        </section>
    )
}
