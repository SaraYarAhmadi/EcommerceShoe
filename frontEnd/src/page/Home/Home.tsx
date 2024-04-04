// import React from 'react'
import MainNewestProducts from './MainNewestProducts/MainNewestProducts'
import MainCategoryBanner from './MainCategoryBanner/MainCategoryBanner'
import MainCategoryProducts from './MainCategoryProducts/MainCategoryProducts'
import MainBestProducts from './MainBestProducts/MainBestProducts'
import MainInstallmentSale from './MainInstallmentSale/MainInstallmentSale'
import MainProductsDiscount from './MainProductsDiscount/MainProductsDiscount'
import MainProductsServices from './MainProductsServices/MainProductsServices'
import Slider from '../../component/Header/Slider/Slider'


export default function Home() {
  return (
    <main>
      <section className="banner w-[90%] mx-auto  mt-5 md:mt-40 ">
        <div className="h-full flex justify-end items-start  ">
          <Slider />
        </div>
      </section>
      <MainNewestProducts />
      <MainCategoryBanner />
      <MainCategoryProducts />
      <MainBestProducts />
      <MainInstallmentSale />
      <MainProductsDiscount />
      <MainProductsServices />
    </main>
  )
}
