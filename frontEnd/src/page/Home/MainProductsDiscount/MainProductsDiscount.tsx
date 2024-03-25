import React, { useEffect, useState } from 'react'
import { GiShoebillStork } from 'react-icons/gi'
import { IoIosArrowBack } from 'react-icons/io'

interface blogViewModel {
  title: string,
  description: String,
  images: string[]
}



export default function MainProductsDiscount() {
  const [allBlogs, setAllBlogs] = useState<blogViewModel[]>([])


  const getAllBlogs = async () => {
    const res = await fetch("http://localhost:7500/api/blog/");
    const data = await res.json()
    setAllBlogs(data)
  }

  useEffect(() => {
    getAllBlogs()

  }, [])

  return (
    <div className="flex w-[90%] mx-auto text-center justify-center pt-6 lg:pt-24">
      <section className=" w-full mt-6 md:mt-10">
        <div className="home-page-category-box">
          <div className="flex-layout mb-4 md:mb-8">
            <div>
              <h4 className="section-title"> وبلاگ</h4>
              {/* <span className="section-subtitle">
                    بهترین محصولات
                  </span> */}
            </div>
            <div>
              <a href="#" className="section-link-category-box">
                <span className="hidden md:inline-block">
                  مشاهده همه
                </span>
                <span className="inline-block md:hidden"> مشاهده همه</span>
                <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>
              </a>
            </div>
          </div>
          <div className='blog-content-wrap grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5'>

            {allBlogs.map((blog) => (
              <div className='blog-item group'>
                <div className='relative w-[400px] h-[120px] sm:h-auto sm:w-auto sm:mb-4 rounded-2xl rondede-bl-4xl overflow-hidden'>
                  <img src={blog.images[0]} alt="blog" className='h-full w-full sm:h-auto object-cover' />
                  <div className='blog-icon-holder'>
                    <div className='text-amber-900 text-6xl lg:text-9xl '>
                      <GiShoebillStork />
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center w-full flex-col sm:flex-row pb-5 text-center '>
                  <a href="#" className='font-DanaDemiBold md:font-Dana text-sm md:text-xl mt-2.5 sm:mt-5 line-clamp-2 text-sky-700 dark:text-white'> {blog.title}</a>

                  <div className='flex items-center justify-center w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-[28px] pb-1.5'>
                    <a href="#" className='flex items-center gap-x-1 ml-1.5 font-DanaMedium text-xs h-5 rounded-md pr-2.5 bg-orange-200/20 text-orange-300'>مطالعه بیشتر...</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
