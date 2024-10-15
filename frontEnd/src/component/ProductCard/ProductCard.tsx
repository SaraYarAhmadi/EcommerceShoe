import { CiStar } from 'react-icons/ci'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ProductContextViewModel } from '../../context/productContex';
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
            <div className='w-full flex items-center justify-center'>
               <div className='relative w-[250px] h-[250px] mb-2 md:mb-5 rounded-t-lg overflow-hidden' >
                <img src={images[0]} alt="css" className='w-100 h-full mx-auto inline-block' />
            </div>  
            </div>
           
            <h5 className="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5 min-h-[40px] md:min-h-[56px]"> {title} </h5>
            <div className='flex items-center justify-center gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 pb-3 border-b border-b-gray-300 dark:border-b-gray-700'>
                <div className='text-sky-500 dark:text-sky-400 pr-1'>
                    <span className='font-DanaDemiBold text-base lg:text-xl '>
                        {price} تومان &nbsp;

                    </span>
                </div>
            </div>
            <div className='flex-layout mt-2.5'>
                <Link to={`/Product-info/${_id}`} className='flex items-center gapx2 md:gap-x-3' >
                    <span className='flex items-center justify-center w-[26px] md:w-9 md:h-9 bg-gray-100 hover:bg-sky-600 dark:bg-zinc-800 dark:hover:bg-slate-500 text-gray-400 hover:text-white rounded-full text-2xl md:text-2xl'><HiOutlineShoppingCart /></span>
                </Link>
                <Link to={`/Product-info/${_id}`} className="flex items-center justify-center w-[120px] px-2 h-10 bg-orange-300 hover:bg-green-300 rounded-xl text-white text-xs md:text-sm">
                    <span className="tracking-tighter"> جزئیات محصول </span>
                </Link>
            </div>
        </div>
    )
}