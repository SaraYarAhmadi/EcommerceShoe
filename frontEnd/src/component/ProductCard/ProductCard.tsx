import React, { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ProductViewModel } from '../../page/Category/Category'
import { ProductContextViewModel } from '../../context/productContex';
import { GiShoebillStork } from 'react-icons/gi';
import { Link } from 'react-router-dom';


export default function ProductCard({
    _id,
    title,
    description,
    slug,
    price,
    quantity,
    sold,
    images,
    color,
    category,
    size,
    gender,
    totalrating
}: ProductContextViewModel) {


    return (
        <div className='group p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-xl rounded-2xl border-2 border-gray-200 dark:border-gray-700'>
            <div className='relative w-100 h-[340px] mb-2 md:mb-5 rounded-t-lg overflow-hidden'>
                <img src={images[0]} alt="css" className='w-100 h-full mx-auto md:w-auto' />
                {size.length > 1 &&
                    <div className='absolute inset-0 bottom-0 w-full h-full hidden md:flex text-center items-center justify-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75 '>
                        <div className='prd-size-list grid items-center justify-center gap-y-2 text-gray-800 text-xs lg:text-xl transition-all duration-300 ease-in-out'>
                            {size.map(item => (
                                <span className='prd-size-item'>{item}</span>
                            ))}
                            <strong className='prd-size-item text-sm'> سایز </strong>
                        </div>
                    </div>
                }
            </div>
            <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5 min-h-[40px] md:min-h-[56px]"> {title} </h5>
            <div className='flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300 dark:border-b-gray-700'>
                <div className='text-sky-500 dark:text-sky-400 pr-1'>
                    <span className='font-DanaDemiBold text-base lg:text-xl '>
                        {price}
                    </span>
                    <span className='text-xs md:text-sm tracking-tighter'>
                        تومان
                    </span>
                </div>
            </div>
            <div className='flex-layout mt-2.5'>
                <Link to={`/Product-info/${_id}`} className='flex items-center gapx2 md:gap-x-3' >
                    <span className='flex items-center justify-center w-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-sky-600 dark:bg-zinc-800 dark:hover:bg-slate-500 text-gray-400 hover:text-white rounded-full text-xl md:text-2xl'><HiOutlineShoppingCart /></span>
                </Link>
                <span className=' md:h-6 text-base md:text-xl flex items-center justify-center text-yellow-400'>
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                </span>
                <Link to={`/Product-info/${_id}`} className="flex items-center justify-center w-[120px] px-2 h-10 bg-orange-300 hover:bg-green-300 rounded-xl text-white text-xs md:text-sm">
                    <span className="tracking-tighter"> جزئیات محصول </span>
                </Link>
            </div>
        </div>
    )
}