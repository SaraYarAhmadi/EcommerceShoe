import React, { useContext } from 'react'
import { BsMoon, BsSearch, BsSun } from 'react-icons/bs'
import { GiSonicShoes } from 'react-icons/gi'
import { HiOutlineShoppingCart, HiOutlineUserCircle } from 'react-icons/hi'
import UserContext, { UserContextViewModel } from '../../../context/userContext'
import { Link } from 'react-router-dom'
import ShowShoppingCart from './ShowShoppingCart'
import ShowDetailsUser from './ShowDetailsUser'
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
                    <li className="relative group">
                        <Link to="/Category-info/category/محصولات پیشنهادی-0">  محصولات پیشنهادی </Link>
                    </li>
                    <li className='relative group'>
                        <Link to="/Category-info/category/کفش-0"> کفش چرم  </Link>
                        <div className='dropdown-menu dropdown-menu top-full w-52'>
                            <Link to="/Category-info/category/کفش-2">کفش چرم مردانه </Link>
                            <Link to="/Category-info/category/کفش-1">کفش چرم زنانه </Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to="/Category-info/category/بوت-0">  بوت چرم </Link>
                        <div className='dropdown-menu top-full w-52'>
                            <Link to="/Category-info/category/بوت-2"> بوت چرم مردانه </Link>
                            <Link to="/Category-info/category/بوت-1">  بوت چرم زنانه</Link>
                        </div>
                    </li>
                    <li className="relative group">
                        <Link to="/Category-info/category/صندل-0">  صندل چرم </Link>
                    </li>
                    <li>
                        <Link to="/Category-info/category/کیف-0">کیف چرم</Link>
                    </li>
                    <li>
                        <Link to="/Category-info/category/ست هدیه زنانه و مردانه-0">ست چرم</Link>
                    </li>
                </ul>
            </nav>
            {/* icons & search box   */}
            <div className='flex gap-x-5 lg:gap-9 items-center text-xl font-Dana text-gray-500 '>
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
                            <span className="tracking-tighter truncate"> {userContext.userInfos.userName}</span>
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
                        <ShowDetailsUser logoutHandler={logoutHandler} />
{/*                         
                        <div className='dropdown-menu -left-16 top-10 w-40 '>
                            <a href="#" onClick={logoutHandler}> خروج از سیستم </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
