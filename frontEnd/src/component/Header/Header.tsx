import { useContext, useState } from "react";
import { GiBookAura, GiSonicShoes } from 'react-icons/gi'
import { BsMoon, BsSun } from 'react-icons/bs'
import { HiOutlineShoppingCart, HiOutlineUserCircle, HiChevronDown } from 'react-icons/hi'
import { IoIosArrowBack } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import "./Header.css"
import Navbar from "./Navbar/Navbar";
import UserContext, { UserContextViewModel } from "../../context/userContext";
import { Link } from "react-router-dom";
import ShowShoppingCart from "./Navbar/ShowShoppingCart";
import ShowShoppingCartMobile from "./ShowShoppingCartMobile";


export default function Header() {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const [isShowMobilCart, setIsShowMobilCart] = useState(false);
  const [isShowSUbmenu, setIsShowSUbmenu] = useState(false);
  const [isShowSUbmenu2, setIsShowSUbmenu2] = useState(false);
  const [isShowSUbmenu3, setIsShowSUbmenu3] = useState(false);
  const userContext: UserContextViewModel = useContext(UserContext)

  const logoutHandler = () => {
    userContext.logout()
  }

  const toggleDarkMode = () => {

    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  const showMobileNav = () => {
    setIsShowMobileNav(true)
  }

  const closeMobileNav = () => {
    setIsShowMobileNav(false)
  }
  const closeMobileNavTouchend = () => {
    setIsShowMobileNav(false)
  }

  const closeMobileCart = (): void => {
    setIsShowMobilCart(false)
  }

  const showMobileCart = () => {
    setIsShowMobilCart(!isShowMobilCart)
  }

  const openSUbmenuMobileNav = () => {
    setIsShowSUbmenu((Prev) => {
      return !Prev
    })
  }

  const openSUbmenuMobileNav3 = () => {
    setIsShowSUbmenu3((Prev) => {
      return !Prev
    })
  }

  return (
    <>
      {/* header */}
      <header className='fixed right-0 left-0 top-9 w-[98%] lg:w-[90%] h-24 hidden md:flex-layout bg-gray-200 dark:bg-slate-900 mx-auto px-5 lg:px-10 pl-4 py-5 rounded-3xl z-40'>
        <Navbar toggleDarkMode={toggleDarkMode} />
      </header>

      {/* header mobile */}
      <div className="flex flex-col w-full md:!hidden bg-gray-200 dark:bg-slate-900 z-40">
        <div className="flex-layout h-16 px-4 text-2xl">
          <div className=" text-zinc-700 dark:text-white" onClick={showMobileNav}>
            <FaBars />
          </div>
          {/* nav */}
          <div className={`${isShowMobileNav ? 'right-0' : '-right-64'}  transition-all overflow-y-auto fixed top-0 bottom-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20`}>
            {/* nav icon */}
            <div className="flex-layout pb-6 mb-6 border-b-2 border-b-gray-300 dark:border-b-white/10">
              <div className='flex items-center text-sky-500 text-6xl shrink-0'>
                <GiSonicShoes />
              </div>
              <div className='flex items-center text-zinc-600 dark:text-white text-xl shrink-0' onClick={closeMobileNav}>
                <AiOutlineClose />
              </div>
            </div>
            {/* nav menu */}
            <div className="flex items-center  h-10 pr-2.5 mb-4 bg-sky-200/20 text-sky-400 text-lg  rounded-md">
              <Link to="/" className='flex items-center gap-x-2 hover:text-sky-500' onClick={closeMobileNav} ><AiOutlineHome />صفحه اصلی</Link>
            </div>
            <ul className="space-y-6 child:pr-2.5 text-zinc-700 dark:text-white text-base">
              <li >
                <Link to="/Category-info/category/کفش-0" className={`${isShowSUbmenu ? "flex-layout bg-sky-200/20 text-sky-400 text-lg  rounded-md" : "flex-layout"}`} onClick={openSUbmenuMobileNav}>
                  <span> کفش چرم</span>
                  <div>
                    <HiChevronDown />
                  </div>
                </Link>
                {/* sub menu */}
                <div className={`${isShowSUbmenu ? "flex flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white" : "hidden flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white"}`}>
                  <Link to="/Category-info/category/کفش-2" onClick={closeMobileNav}>کفش چرم مردانه </Link>
                  <Link to="/Category-info/category/کفش-1" onClick={closeMobileNav}>کفش چرم زنانه </Link>
                </div>
              </li>
              <li >
                <Link to="/Category-info/category/بوت-0" className={`${isShowSUbmenu3 ? "flex-layout bg-sky-200/20 text-sky-400 text-lg  rounded-md" : "flex-layout"}`} onClick={openSUbmenuMobileNav3}>
                  <span>  بوت چرم</span>
                  <div>
                    <HiChevronDown />
                  </div>

                </Link>
                {/* sub menu */}
                <div className={`${isShowSUbmenu3 ? "flex flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white" : "hidden flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white"}`}>
                  <Link to="/Category-info/category/بوت-2" onClick={closeMobileNav}> بوت چرم مردانه </Link>
                  <Link to="/Category-info/category/بوت-1" onClick={closeMobileNav}> بوت چرم زنانه </Link>

                </div>
              </li>

              <li >
                <Link to="/Category-info/category/صندل-0" className="flex-layout" onClick={closeMobileNav}>
                  صندل چرم

                </Link>
              </li>
              <li >
                <Link to="/Category-info/category/کیف-0" className="flex-layout" onClick={closeMobileNav}>
                  کیف چرم

                </Link>
              </li>
              <li >
                <Link to="/Category-info/category/ست هدیه زنانه و مردانه-0" className="flex-layout" onClick={closeMobileNav}>
                  ست چرم

                </Link>
              </li>
              <li className="flex items-center" onClick={closeMobileNav}>
                <Link to="*" >
                  درباره ما
                </Link>
              </li>
              <li className="flex items-center" onClick={closeMobileNav}>
                <Link to="*" >
                  ارتباط با ما
                </Link>
              </li>
            </ul>

            {/* nav footer */}
            <div className="flex flex-col items-start gap-y-6 text-sky-500 py-8 mt-8 border-t-2 border-t-gray-300 dark:border-t-white/10">
              {userContext.isLoggedIn ? (<Link to="#" className="inline-flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                <span className="tracking-tighter"> {userContext.userInfos.userName}</span>
              </Link>) : (<Link to="/login" className="inline-flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base" >
                <span className="tracking-tighter"> ورود /  ثبت‌نام </span>
              </Link>)}
              <div className='inline-block cursor-pointer' onClick={toggleDarkMode}>
                <div className='flex items-center gap-x-2 dark:hidden text-base'>
                  <BsMoon />
                  <span>تم تیره</span>
                </div>
                <div className='hidden dark:flex items-center gap-x-2 text-base dark:text-yellow-200'>
                  <BsSun />
                  <span>تم روشن</span>
                </div>
              </div>
              <Link to="#" className='inline-flex gap-x-2 text-base' onClick={showMobileCart}>
                <HiOutlineShoppingCart />
                <span className="tracking-tighter"> سبدخرید </span>
              </Link>
              <Link to="#" className='flex items-center justify-center gap-x-2 text-base' onClick={showMobileCart}>
                <HiOutlineUserCircle />
                <div className="tracking-tighter" onClick={logoutHandler}> خروج از سیستم </div>
              </Link>
            </div>
          </div>
          <div className="text-sky-500 text-5xl shrink-0">
            <GiSonicShoes />
          </div>
          <Link to="#" className='text-zinc-700 dark:text-white' onClick={showMobileCart}>
            <HiOutlineShoppingCart />
          </Link>
          <div className={`${isShowMobilCart ? "fixed top-0 bottom-0 left-0 flex flex-col w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 transition-all" : "fixed top-0 bottom-0 -left-64 flex flex-col w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 transition-all"}`}>
            <ShowShoppingCartMobile closeMobileCart={closeMobileCart} />
          </div>
        </div>
        <div className="flex items-center text-center justify-between gap-20  h-16 px-4 text-2xl">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستجو..." />
          </div>
        </div>
      </div>
      <div className={`overlay ${isShowMobileNav || isShowMobilCart ? 'overlay--visible' : ''}`}></div>
    </>

  )
}
