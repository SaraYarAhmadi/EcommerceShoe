import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import { MdOutlineDone } from "react-icons/md";
import ProductSpecifications from "./ProductSpecifications/ProductSpecifications";
import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import MainProductsServices from "../Home/MainProductsServices/MainProductsServices";
export default function CourseInfo() {
  return (
    <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
      {/* <!-- Breadcrumb --> */}

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          { id: 1, title: "همه محصولات", to: "Category-info/products" },
          { id: 1, title: "کفش ونس", to: "Product-info/MenleatherShoes" }
        ]} />

      {/* <!-- Course Head --> */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto sm:gap-5 sm:mt-20 justify-between gap-8 mt-10 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between dark:text-white mx-auto">
          <div className="column p-5 product-carousel is-4 md:w-96">
            <div className="min-h-[120px]">
              <div className="flex w-full overflow-hidden rounded-3xl">
                <div className="w-full shrink-0" >
                  <figure className="block">
                    <figure className="b-image-wrapper image">
                      <img src="https://napi.shahresandal.com/storage/app/products/images/large/1702203959_blob-91.jpg" alt="کفش-پرسنلی-زنانه-کوک" loading="lazy" className="has-ratio border-rounded is-clickable w-full h-full" />
                    </figure>
                  </figure>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between dark:text-white">
          <div className="flex flex-col items-center w-full">
            <div className='flex items-center justify-center mt-2.5 mb-10'>

              <span className=' md:h-6 text-base md:text-2xl flex items-center justify-center text-yellow-400'>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </span>
              <span className="circle-dot mb-[3px] mr-[10px] mt-[3px] bg-gray-700"></span>
              <div className="flex items-center">
                <svg className="icon-box-tick fill-gray-700 w-[14px] h-[14px] mr-[3px]"><use href="#"></use></svg>
                <p className="mr-[19px] min-w-0 grow text-xs font-semiBold text-secondary whitespace-nowrap text-ellipsis overflow-hidden">موجود در انبار کفش چرم ( ارسال فوری ) </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <h1 className="font-DanaDemiBold line-clamp-2 text-2xl md:text-3xl font-danaMedium text-zinc-800 dark:text-white mb-2.5">نیم بوت زنانه mania</h1>
            </div>
            <div className="flex flex-col items-center p-5">
              <div>
                <div className="flex items-center justify-start">
                  <strong className="font-DanaDemiBold text-base lg:text-xl ">دسته بندی محصول:  </strong>
                  <span className="font-DanaDemiBold text-base lg:text-xl  pr-2">
                    <a href="#">بوت و نیم بوت </a>
                  </span>
                </div>

                <div className="mb-6 mt-4 flex w-full flex-col">
                  <div className="mb-5 flex w-full flex-col">
                    <div className="mb-3.5 flex items-center">
                      <p className="text-sm leading-5 dark:text-white text-gray-600">رنگ:</p>
                    </div>
                    <div className="w-max max-w-[100%] border-b border-gray-400 pb-4">
                      <div className="relative flex w-full items-center">
                        <div className="overflow-x-auto no-scrollbar">
                          <div className="flex items-center scroll-smooth lg:pr-0">
                            <div className="flex items-center gap-2.5 w-fit flex-nowrap">
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] bg-white border-amber-700">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" >
                                    <MdOutlineDone />
                                  </span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-semiBold text-gray-700">قهوه ای</p>
                                </div>
                              </div>
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]">
                                  </span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">مشکی</p>
                                </div>
                              </div>
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" ></span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">نوک مدادی</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 mt-4 flex w-full flex-col">
                  <div className="mb-5 flex w-full flex-col">
                    <div className="mb-3.5 flex items-center">
                      <p className="text-sm leading-5 dark:text-white text-gray-600">سایز:</p>
                    </div>
                    <div className="w-max max-w-[100%] border-b border-gray-400 pb-4">
                      <div className="relative flex w-full items-center">
                        <div className="overflow-x-auto no-scrollbar">
                          <div className="flex items-center scroll-smooth lg:pr-0">
                            <div className="flex items-center gap-2.5 w-fit flex-nowrap">
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] bg-white border-secondary-500">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" >
                                    <MdOutlineDone />
                                  </span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-semiBold text-gray-700">40</p>
                                </div>
                              </div>
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]">
                                  </span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">41</p>
                                </div>
                              </div>
                              <div className="cursor-pointer">
                                <div className="flex w-max items-center border p-[3px] h-6.5 rounded-[7px] border-gray-300 bg-white">
                                  <span className="flex items-center justify-center  border border-gray-300 h-5 w-5 rounded-[6px]" ></span>
                                  <p className="ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-medium text-gray-600">42</p>
                                </div>
                              </div>
                            </div>

                            <span className="flex h-1 w-1 p-1 lg:h-0.5 lg:w-0.5 lg:p-0.5"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex w-full justify-between mt-5 px-4 pb-4 pt-5">
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
      </div>


      <div className="flex w-full mt-4">
        <div className="w-full">
          <div className="rounded-2xl shadow-1200 relative w-full p-6 transition-all bg-white">
            <div className="flex justify-between bg-orange-200 border border-orange-300 w-full cursor-pointer items-center rounded-md px-3 py-[6px]">
              <div className="flex items-center justify-center">
                <img loading="lazy" width="32" height="32" src="https://www.technolife.ir/image/static_shopping.png" alt="فروشگاه  " />
                <p className="mr-3 text-base font-medium leading-6 text-gray-800 2lg:text-[13px]">امکان تحویل حضوری در شعب کفش تبریز</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="mr-4 text-base font-DanaMedium text-gray-800">18 ماه گارانتی شرکتی</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90]">
        <div className="w-full rounded-2xl flex my-24 bg-white/10 relative is-12 card">
          <ProductSpecifications />

        </div>
      </div>

      <MainProductsServices />
    </main>
  )
}
