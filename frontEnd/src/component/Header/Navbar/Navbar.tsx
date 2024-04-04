import React, { useContext } from 'react'
import { BsMoon, BsSearch, BsSun } from 'react-icons/bs'
import { GiSonicShoes } from 'react-icons/gi'
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi'
import UserContext, { UserContextViewModel } from '../../../context/userContext'
import { Link } from 'react-router-dom'
import ShowShoppingCart from './ShowShoppingCart'
interface NavbarProps {
    toggleDarkMode: () => void;
}

export default function Navbar({ toggleDarkMode }: NavbarProps) { // todo toggleDarkMode check name
    const userContext: UserContextViewModel = useContext(UserContext)
    const logoutHandler = () => {
        userContext.logout()
    };

    return (
        <div className='flex-layout w-full'>
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
                        <Link to="/Category-info/category"> کفش چرم  </Link>
                        <div className='dropdown-menu dropdown-menu top-full w-52'>
                            <Link to="/Category-info/category">کفش چرم مردانه </Link>
                            <Link to="/Category-info/category">کفش چرم زنانه </Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to="/Category-info/category">  بوت چرم </Link>
                        <div className='dropdown-menu top-full w-52'>
                            <Link to="/Category-info/category"> بوت چرم مردانه </Link>
                            <Link to="/Category-info/category">  بوت چرم زنانه</Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to="/Category-info/category">  صندل چرم </Link>
                    </li>
                    <li>
                        <Link to="/Category-info/category">کیف چرم</Link>
                    </li>
                    <li>
                        <Link to="/Category-info/category">ست چرم</Link>
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
                <div className='flex-layout gap-x-4 lg:gap-x-5 text-2xl'>
                    {/* cart */}
                    <div className="relative group">
                        <div className='py-4  dark:text-white cursor-pointer'>
                            <HiOutlineShoppingCart />
                        </div>
                        <ShowShoppingCart />
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
                        userContext.isLoggedIn ? (<Link to="#" className="relative group hidden xl:flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                            <span className="tracking-tighter"> {userContext.userInfos.userName}</span>
                            <div className='dropdown-menu -left-5 top-full w-40'>
                                <a href="#" onClick={logoutHandler}> خروج از سیستم </a>
                            </div>
                        </Link>) :
                            (<Link to="/login" className="hidden xl:flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                                <span className="tracking-tighter"> ورود /  ثبت‌نام </span>
                            </Link>)
                    }
                    <div className='relative group text-sky-400 text-3xl xl:hidden'>
                        <HiOutlineUserCircle />
                        <div className='dropdown-menu -left-16 top-10 w-40 '>
                            <a href="#" onClick={logoutHandler}> خروج از سیستم </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
