import React, { useContext } from 'react'
import { BsMoon, BsSearch, BsSun } from 'react-icons/bs'
import { GiSonicShoes } from 'react-icons/gi'
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi'
import { IoIosArrowBack } from 'react-icons/io'
import UserContext, { UserContextViewModel } from '../../../context/userContext'
import { Link } from 'react-router-dom'
interface NavbarProps {
    toggleDarkMode: () => void;
}

export default function Navbar({ toggleDarkMode }: NavbarProps) { // todo toggleDarkMode check name

    const userContext: UserContextViewModel = useContext(UserContext)


    return (
        <div className='flex items-center justify-between w-full'>
            {/* --nav & logo-- */}
            {/* <Navbar/> */}
            <nav className='flex items-center gap-x-5 lg:gap-x-9 h-14'>
                {/* logo */}
                <div className='flex items-center text-sky-500 text-6xl shrink-0'>
                    <GiSonicShoes />
                </div>
                {/* nav */}
                <ul className='h-full flex gap-x-2.5 md:gap-x-3 lg:gap-x-4 text-base text-slate-800 dark:text-white font-Dana tracking-tighter child:leading-[56px] child-hover:transition-colors child-hover:text-sky-400'>
                    <li className='font font-DanaMedium '>
                        <Link to="/" className='hover:text-sky-500'>صفحه اصلی</Link>
                    </li>
                    {/* sub menu first */}
                    <li className='relative group'>
                        <Link to="Category-info/:categoryName"> کفش چرم  </Link>
                        <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                            <Link to="Category-info/:categoryName">کفش چرم مردانه </Link>
                            <Link to="Category-info/:categoryName">کفش چرم زنانه </Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <a href="#">  بوت چرم </a>
                        <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                            <a href="#"> بوت چرم مردانه </a>
                            <a href="#">  بوت چرم زنانه</a>
                        </div>
                    </li>
                    <li className="relative group">
                        <a href="#">  صندل چرم </a>
                    </li>

                    <li>
                        <a href="#">کیف چرم</a>
                    </li>
                    <li>
                        <a href="#">ست چرم</a>
                    </li>
                </ul>
            </nav>
            {/* icons & search box   */}
            <div className='flex gap-x-5 lg:gap-9 items-center text-xl font-Dana text-gray-500 '>
                {/* search box */}
                <div className='hidden xl:flex items-center'>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="...جستجو" />
                    </div>
                </div>
                <div className="flex xl:hidden items-center py-4 dark:text-white cursor-pointer text-xl">
                    <BsSearch />
                </div>
                {/* icons */}
                <div className='flex items-center justify-between gap-x-4 lg:gap-x-5 text-2xl'>
                    {/* cart */}
                    <div className="relative group">
                        <div className='py-4  dark:text-white cursor-pointer'>
                            <HiOutlineShoppingCart />
                        </div>
                        <div className="absolute p-6 w-[400px] left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child-hover:text-sky-400 child:transition-colors ">
                            <div className="flex items-center justify-between  text-xs font-DanaMedium tracking-tighter">
                                <span className="text-gray-300">1 مورد</span>
                                <a href="#" className="flex items-center">
                                    مشاهده سبد خرید
                                    <div className="w-4 h-4 text-base">  <IoIosArrowBack /></div>
                                </a>
                            </div>
                            <div className="border-b border-b-gray-300 dark:border-b-white/10 pb-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                                <div className="flex gap-x-2.5">
                                    <img src="img/shoe/gallery/vans.jpg" className="w-30 h-30 rounded-xl" alt="vans" />
                                    <div className="flex flex-col justify-around">
                                        <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2"> ونس چرم ست کاپل مردانه mrc113-06</h4>
                                        <div className=" text-zinc-700 dark:text-white text-xs font-DanaDemiBold">
                                            400000
                                            <span className="font-Dana text-sm">تومان</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-x-2.5 ">
                                    <img src="img/shoe/gallery/rasmi1.jpg" className="w-30 h-30 rounded-xl" alt="rasmi" />
                                    <div className="flex flex-col justify-around">
                                        <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base">کفش مردانه چرم عسلی </h4>
                                        <div className=" text-zinc-700 dark:text-white text-xs font-DanaDemiBold">
                                            400000
                                            <span className="font-Dana text-sm">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-5">
                                <div>
                                    <span className="font-DanaMedium text-gray-300 tracking-tighter text-xs"> مبلغ قابل  پرداخت </span>
                                    <div className=" text-zinc-700 dark:text-white font-DanaDemiBold mt-1">
                                        400000
                                        <span className="font-Dana text-sm">تومان</span>
                                    </div>
                                </div>
                                <a href="#" className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" >ثبت سفارش</a>
                            </div>
                        </div>

                    </div>
                    {/* theme toggle */}
                    <div className='flex items-center cursor-pointer' onClick={toggleDarkMode}>
                        <div className={`inline-block dark:hidden`}>
                            <BsMoon />
                        </div>
                        <div className='hidden dark:inline-block dark:text-yellow-200'>
                            <BsSun />
                        </div>

                    </div>

                    <span className='w-px h-14 bg-gray-400'></span>
                    {/* login */}
                    {
                        userContext.isLoggedIn ? (<Link to="#" className="hidden xl:flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                            <span className="tracking-tighter"> {userContext.userInfos.userName}</span>
                        </Link>) : (<Link to="/login" className="hidden xl:flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                            <span className="tracking-tighter"> ورود /  ثبت‌نام </span>
                        </Link>)
                    }


                    <div className='text-sky-400 text-3xl xl:hidden'>
                        <HiOutlineUserCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}
