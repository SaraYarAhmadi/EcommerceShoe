import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { GiConverseShoe, GiShoebillStork, GiSonicShoes } from "react-icons/gi";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer w-full relative bg-zinc-700 py-8 md:pb-11 md:pt-11">
      <div className=" text-gray-300 sm:w-[94%] lg:w-[94%] px-4 md:px-0 mx-auto ">
        <div className="flex flex-wrap justify-between">
          <div className="mt-10 md:mt-[26px]">
            <div className="flex items-center text-sky-500 text-6xl shrink-0">
              <GiSonicShoes/>
              
            </div>
            <div className="flex gap-x-5 mb-6 md:mb-4.5 text-gray-300 ">
              <p className="xl:max-w-[606px] text-lg md:text-xl/[48px] text-start">همیشه یکی از دغدغه های اصلی خریدارن کفش چرم، پیدا کردن برندی معتبر و با اصالت در این زمینه است. در این زمینه ما به شما کفش چرم یلسان را پیشنهاد می دهیم. کیفیت عالی چرم، قیمت مناسب آن و سال های تجربه در این زمینه باعث شده این برند یکی از بهترین برندهای کفش چرم در کشور باشد. </p>
            </div>
          </div>
          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7"> دسترسی سریع</h4>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 h-44 gap-x-10 md:gap-x-16">
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                حریم خصوصی
              </a>
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                عودت کالا
              </a>
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                شرایط استفاده hc onlhj 
              </a>
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ثبت سفارش
              </a>
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                پرسش متداول
              </a>
              <a href="#" className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-sky-300 transition-colors ">
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                فرصت های شغلی
              </a>

            </div>
          </div>
          <div className="mt-10 md:mt-[26px]">
            <h4 className="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7">  در تماس باشیم</h4>
            <div>
              <div className="md:text-xl mb-6 md:mb-10">
                <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  <LuMapPin />تبریز - خیابان ارک جدید- نرسیده به مقصودیه-ساختمان امین

                </span>

                <div className="flex flex-wrap gap-x-5 font-DanaMedium gap-y-4 ">
                  <a href="#" className="flex items-center justify-center gap-x-2 md:gap-x-3 text-sky-300 ">
                    <FaRegEnvelope />
                    <span> info@shoe.com</span>
                  </a>
                  <div className="flex items-center justify-center gap-x-2 md:gap-x-3">
                    <MdOutlinePhone />
                    <span>03123654789   </span>
                    <span>012-123456</span>
                  </div>
                </div>

              </div>
              <div className="flex gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium md:text-xl">
                <a href="#" className="flex flex-grow justify-center items-center gap-x-2 h-12 border border-sky-200 text-sky-400 rounded-xl">
                  @shoe_fh
                  <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center'>
                    <FaInstagram />
                  </span>
                </a>
                <a href="#" className="flex flex-grow justify-center items-center gap-x-2 h-12 text-zinc-700 rounded-xl bg-gradient-to-r from-orange-200 to-orange-300">
                  @shoe_mfm
                  <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center'>
                    <TbBrandTelegram />

                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 font-DanaMedium border-t border-white/10 md:text-base text-xs/5 pt-10 md:mt-11 mt-10">
          <p>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.
          </p>
          <p className="ltr-text mr-auto">طراحی و برنامه نویسی : <a href="https://artinmehr.com" title=" طراح سایت  سارا یاراحمدی    " target="_blank"> ✌  سارا یاراحمدی  </a></p>
        </div>
      </div>
    </footer>

  )
}
