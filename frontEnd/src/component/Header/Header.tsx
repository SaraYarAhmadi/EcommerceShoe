import { useState } from "react";
import { GiBookAura, GiSonicShoes } from 'react-icons/gi'
import { BsMoon, BsSun } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoIosArrowBack } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai'
import Slider from "./Slider/Slider";
import "./Header.css"
// import { Prev } from "react-bootstrap/esm/PageItem";


export default function Header() {
  const [isShowMobileNav, setIsShowMobileNav] = useState(false);
  const [isShowMobilCart, setIsShowMobilCart] = useState(false);
  const [isShowSUbmenu, setIsShowSUbmenu] = useState(false);
  const [isShowSUbmenu2, setIsShowSUbmenu2] = useState(false);
  const [isShowSUbmenu3, setIsShowSUbmenu3] = useState(false);
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

  const closeMobileCart = () => {
    setIsShowMobilCart(false)
  }

  const showMobileCart = () => {
    setIsShowMobilCart(true)

  }

  const openSUbmenuMobileNav = () => {
    setIsShowSUbmenu((Prev) => {
      return !Prev
    })
  }
  const openSUbmenuMobileNav2 = () => {
    setIsShowSUbmenu2((Prev) => {
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
      <header className='fixed right-0 left-0 top-9 w-[98%] lg:w-[90%] h-24 hidden md:flex items-center justify-between bg-gray-200 dark:bg-slate-900 mx-auto px-5 lg:px-10 pl-4 py-5 rounded-3xl z-40'>
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
                <a href="#" className='hover:text-sky-500'>صفحه اصلی</a>
              </li>
              {/* sub menu first */}
              <li className='relative group'>
                <a href="#"> کفش چرم  </a>
                <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                  <a href="#">کفش چرم مردانه </a>
                  <a href="#">کفش چرم زنانه </a>
                </div>
              </li>
              <li className="relative group">
                <a href="#"> نیم بوت چرم </a>
                <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                  <a href="#">نیم بوت چرم مردانه </a>
                  <a href="#"> نیم بوت چرم زنانه</a>
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
              <a href="#" className="hidden xl:flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                <span className="tracking-tighter"> ورود /  ثبت‌نام </span>
              </a>
              <div className='text-sky-400 text-3xl xl:hidden'>
                <HiOutlineUserCircle />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header mobile */}
      <div className="flex flex-col w-full md:!hidden bg-gray-200 dark:bg-slate-900 z-40">
        <div className="flex items-center justify-between h-16 px-4 text-2xl">
          <div className=" text-zinc-700 dark:text-white" onClick={showMobileNav}>
            <FaBars />
          </div>
          {/* nav */}
          <div className={`${isShowMobileNav ? 'right-0' : '-right-64'}  transition-all overflow-y-auto fixed top-0 bottom-0 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20`}>
            {/* nav icon */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-b-gray-300 dark:border-b-white/10">
              <div className='flex items-center text-sky-500 text-6xl shrink-0'>
                <GiSonicShoes />
              </div>
              <div className='flex items-center text-zinc-600 dark:text-white text-xl shrink-0' onClick={closeMobileNav}>
                <AiOutlineClose />
              </div>
            </div>
            {/* nav menu */}
            <div className="flex items-center  h-10 pr-2.5 mb-4 bg-sky-200/20 text-sky-400 text-lg  rounded-md">
              <a href="#" className="flex items-center gap-x-2">
                <AiOutlineHome />
                صفحه اصلی
              </a>
            </div>
            <ul className="space-y-6 child:pr-2.5 text-zinc-700 dark:text-white text-base">
              <li >
                <a href="#" className={`${isShowSUbmenu ? "flex items-center justify-between bg-sky-200/20 text-sky-400 text-lg  rounded-md" : "flex items-center justify-between"}`} onClick={openSUbmenuMobileNav}>
                  <span> کفش چرم</span>
                  <div>
                    <HiChevronDown />
                  </div>

                </a>
                {/* sub menu */}
                <div className={`${isShowSUbmenu ? "flex flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white" : "hidden flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white"}`}>
                  <a href="#">کفش چرم مردانه </a>
                  <a href="#">کفش چرم زنانه </a>

                </div>
              </li>
              <li >
                <a href="#" className={`${isShowSUbmenu2 ? "flex items-center justify-between bg-sky-200/20 text-sky-400 text-lg  rounded-md" : "flex items-center justify-between"}`} onClick={openSUbmenuMobileNav2}>
                  <span> نیم بوت چرم</span>
                  <div>
                    <HiChevronDown />
                  </div>

                </a>
                {/* sub menu */}
                <div className={`${isShowSUbmenu2 ? "flex flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white" : "hidden flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white"}`}>
                  <a href="#">نیم بوت چرم مردانه </a>
                  <a href="#">نیم بوت چرم زنانه </a>

                </div>
              </li>
              <li >
                <a href="#" className={`${isShowSUbmenu3 ? "flex items-center justify-between bg-sky-200/20 text-sky-400 text-lg  rounded-md" : "flex items-center justify-between"}`} onClick={openSUbmenuMobileNav3}>
                  <span>  بوت چرم</span>
                  <div>
                    <HiChevronDown />
                  </div>

                </a>
                {/* sub menu */}
                <div className={`${isShowSUbmenu3 ? "flex flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white" : "hidden flex-col gap-y-3 text-justify pr-7 mt-3 text-sm text-zinc-600 dark:text-white"}`}>
                  <a href="#"> بوت چرم مردانه </a>
                  <a href="#"> بوت چرم زنانه </a>

                </div>
              </li>
            
              <li >
                <a href="#" className="flex items-center justify-between" >
                   صندل چرم

                </a>
              </li>
              <li className="flex items-center" >
                <a href="#" >
                  درباره ما
                </a>
              </li>
              <li className="flex items-center" >
                <a href="#" >
                  ارتباط با ما
                </a>
              </li>
            </ul>

            {/* nav footer */}
            <div className="flex flex-col items-start gap-y-6 text-sky-500 py-8 mt-8 border-t-2 border-t-gray-300 dark:border-t-white/10">

              <a href="#" className="inline-flex items-center justify-center w-[120px] h-14 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-base">
                <span className="tracking-tighter"> ورود /  ثبت‌نام </span>
              </a>
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



              <a href="#" className='inline-flex gap-x-2 text-base'>
                <HiOutlineShoppingCart />
                <span className="tracking-tighter"> سبدخرید </span>
              </a>
            </div>
          </div>
          <div className="text-sky-500 text-5xl shrink-0">
            <GiSonicShoes />
          </div>
          <div className=" text-zinc-700 dark:text-white" onClick={showMobileCart}>
            <HiOutlineShoppingCart />
          </div>
          <div className={`${isShowMobilCart ? "fixed top-0 bottom-0 left-0 flex flex-col w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 transition-all" : "fixed top-0 bottom-0 -left-64 flex flex-col w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 transition-all"}`}>
            {/* cart */}
            <div className="flex items-center justify-between pb-5 mb-5 border-b-2 border-b-gray-300 dark:border-b-white/10">
              <div className='flex items-center text-zinc-600 dark:text-white text-xl shrink-0' onClick={closeMobileCart}>
                <AiOutlineClose />
              </div>
              <span className="tracking-tighter text-zinc-700 dark:text-white text-base"> سبدخرید </span>

            </div>
            {/* cart body */}
            <div className="child:pb-5 child:mb-5">
              <div className="flex gap-x-1 border-b border-b-gray-300 dark:border-b-white/10">
                <img src="img/shoe/gallery/vans.jpg" className="w-30 h-30 rounded-xl" alt="vans"  />
                <div className="flex flex-col justify-around">
                  <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">ونس چرم ست کاپل مردانه mrc113-06 </h4>
                  <div className=" text-zinc-700 dark:text-white text-xs font-DanaDemiBold">
                    400000
                    <span className="font-DanaMedium text-xs">تومان</span>
                  </div>
                </div>
              </div>
            </div>

            {/* cart footer */}
            <div className="flex items-end gap-x-4 mb-8 mt-auto text-sky-500">
              <a href="#" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</a>
              <div>
                <span className="font-DanaMedium text-gray-300 tracking-tighter text-sm"> مبلغ قابل  پرداخت </span>
                <div className=" text-zinc-700 dark:text-white font-DanaDemiBold text-base">
                  400000
                  <span className="font-Dana ">تومان</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center text-center justify-between gap-20  h-16 px-4 text-2xl">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستجو..." />
          </div>
        </div>
      </div>
      {/* banner */}
      {/* <div>
        <section className="banner">
          <div className="h-6 border-2 border-sky-200 flex justify-end items-start ">
            <Slider />
          </div>
        </section>
      </div> */}

    
      {/* overlay */}
      <div className={`overlay ${isShowMobileNav || isShowMobilCart ? 'overlay--visible' : ''}`}></div>
    </>

  )
}
