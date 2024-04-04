import React, { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import ProductCard from '../../../component/ProductCard/ProductCard';
import { ProductContext, ProductContextViewModel } from '../../../context/productContex';
import { Link } from 'react-router-dom';

export default function MainNewestProducts() {

    const productContex = useContext(ProductContext)
    const latestProduct = productContex.filter((product, index) => {
        return index <= 3
    })

    return (
        <section className="flex w-[90%] mx-auto text-center justify-center pt-6 lg:pt-24">
            <div className="w-full mb-32 mt-6 md:mt-10">
                <div className="home-page-category-box">
                    <div className="flex-layout mb-4 md:mb-8">
                        <div>
                            <h4 className="section-title"> جدید ترین محصولات</h4>
                        </div>
                        <div>
                            <Link to="/Category-info/category" className="section-link-category-box ">
                                <span className="hidden md:inline-block">
                                    مشاهده محصولات
                                </span>
                                <span className="inline-block md:hidden"> مشاهده همه</span>
                                <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>
                            </Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 '>
                        {
                            latestProduct.map((product: ProductContextViewModel) => (
                                <ProductCard key={product._id} {...product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
