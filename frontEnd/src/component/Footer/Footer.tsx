import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import { GiConverseShoe, GiShoebillStork, GiSonicShoes } from "react-icons/gi";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer w-full relative bg-zinc-700 md:pb-4">
      <div className=" text-gray-300 sm:w-[94%] lg:w-[90%] px-4 md:px-0 mx-auto ">
        <div className="flex flex-wrap justify-between">
          <div className="mt-10 md:mt-[26px] lg:w-[50%]">
            <div className="flex items-center text-sky-500 text-6xl shrink-0">
            <GiSonicShoes />
            </div>
            <div className="flex gap-x-5 mb-6 md:mb-4.5 text-gray-300 ">
              <p className="xl:max-w-[606px] text-lg text-start">همیشه یکی از دغدغه های اصلی خریدارن کفش چرم، پیدا کردن برندی معتبر و با اصالت در این زمینه است. در این زمینه ما به شما کفش چرم یلسان را پیشنهاد می دهیم. کیفیت عالی چرم، قیمت مناسب آن و سال های تجربه در این زمینه باعث شده این برند یکی از بهترین برندهای کفش چرم در کشور باشد. </p>
            </div>
          </div>
          <div className="mt-10 md:mt-[26px] lg:w-[50%]">
            <h4 className="font-DanaDemiBold text-lg text-white my-3 md:ml-10"> دسترسی سریع</h4>
            <div className="grid sm:grid-cols-3 md:grid-cols-2 justify-center gap-y-2 gap-x-10 md:gap-x-16 md:px-24">
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
                شرایط استفاده
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
          <div className="w-full flex flex-wrap items-center justify-between mt-10 md:mt-4">
            <div className="md:text-xl mb-6 md:mb-4 md:w-[50%]">
              <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                <LuMapPin />تبریز - خیابان ارک جدید- نرسیده به مقصودیه-ساختمان امین
              </span>
              <div className="flex items-center justify-between gap-x-5 font-DanaMedium gap-y-4 ">
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
            <div className="flex items-center justify-center  gap-x-1.5 md:gap-x-4 ltr-text font-DanaMedium md:text-xl md:mb-8 md:w-[50%]">
              <a href="#" className="flex justify-center items-center gap-x-2 h-12 border border-sky-200 text-sky-400 rounded-xl p-2">
                @shoe_fh
                <span className=' md:h-6 text-base md:text-xl flex items-center justify-center'>
                  <FaInstagram />
                </span>
              </a>
              <a href="#" className="flex justify-center items-center gap-x-2 h-12 p-2 text-zinc-700 rounded-xl bg-gradient-to-r from-orange-200 to-orange-300">
                @shoe_mfm
                <span className=' md:h-6 text-base md:text-xl flex items-center justify-center'>
                  <TbBrandTelegram />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 font-DanaMedium border-t border-white/10 md:text-base text-xs/5 pt-2 mt-2">
          <p>کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد.
          </p>
          <p className="ltr-text mr-auto">طراحی و برنامه نویسی : <a href="https://artinmehr.com" title=" طراح سایت  سارا یاراحمدی    " target="_blank"> ✌  سارا یاراحمدی  </a></p>
        </div>
      </div>
    </footer>

  )
}
