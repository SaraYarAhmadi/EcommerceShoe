import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import ProductSpecifications from "./ProductSpecifications/ProductSpecifications";
import { CiStar } from "react-icons/ci";
import MainProductsServices from "../Home/MainProductsServices/MainProductsServices";
import UserContext from "../../context/userContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContextViewModel } from "../../context/productContex";
import { BasketContext } from "../../context/basketContext";

const productInitialValue: ProductContextViewModel = {
  _id: "",
  title: "",
  description: "",
  slug: "",
  price: 0,
  quantity: 0,
  sold: 0,
  images: [],
  color: [],
  category: "",
  size: [],
  gender: 0,
  totalrating: ""
}

interface ProductBasketViewModel {
  poroductSize: string,
  productColor: string,
  productCount: number,
}

const initialProductBasket: ProductBasketViewModel = {
  poroductSize: "",
  productColor: "",
  productCount: 0,
}

export default function ProductInfo() {
  const [product, setProduct] = useState<ProductContextViewModel>(productInitialValue)
  const { title, images, category, price, size, color, _id } = product
  const params = useParams()
  const [productBasket, setProductBasket] = useState<ProductBasketViewModel>(initialProductBasket);
  const { poroductSize, productColor, productCount } = productBasket;
  const userContext = useContext(UserContext)
  const basketContext  = useContext(BasketContext);
  const { userInfos } = userContext;
  console.log("BasketContextBasketContext", basketContext);

  useEffect(() => {
    fetch(`http://localhost:7500/api/products/${params.productInfo}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])


  const ProductOrderRegistration = () => {
    const requestData = {
      cart: [
        {
          _id: _id,
          count: productCount,
          color: productColor,
          size: poroductSize,
        }
      ]
    };

    fetch('http://localhost:7500/api/user/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfos.refreshToken}` // اضافه کردن توکن به هدر درخواست
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => console.log("dataBaskettttt", data));

  }
  const colorSelectionHandler = (color: string) => {
    const newProductBasket: ProductBasketViewModel = {
      ...productBasket,
      productColor: color,
    };
    setProductBasket(newProductBasket)
  }

  const sizeSelectionHandler = (size: string) => {
    const newProductBasket: ProductBasketViewModel = {
      ...productBasket,
      poroductSize: size,
    };
    setProductBasket(newProductBasket)
  }
  const productSizevalue = (e: any) => {
    const newProductBasket: ProductBasketViewModel = {
      ...productBasket,
      productCount: parseInt(e.target.value), // تبدیل رشته به عدد
    };
    setProductBasket(newProductBasket);
  };



  return (
    <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
      {/* <!-- Breadcrumb --> */}

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          { id: 2, title: "همه محصولات", to: "/Category-info/category" },
          { id: 3, title, to: "/Product-info/:productInfo" }
        ]} />

      {/* <!-- product Head --> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full mx-auto sm:gap-5 sm:mt-20 justify-between gap-8 mt-10 rounded-2xl overflow-hidden">
        <div className="flex-layout dark:text-white mx-auto">
          <div className="column p-5 product-carousel is-4 w-auto md:w-[500px]">
            <div className="min-h-[120px]">
              <div className="flex w-full overflow-hidden rounded-3xl">
                <div className="w-full shrink-0">
                  <figure className="block">
                    <figure className="b-image-wrapper image">
                      <img
                        src={images[0]}
                        alt="کفش-پرسنلی-زنانه-کوک"
                        loading="lazy"
                        className="has-ratio border-rounded is-clickable w-full h-full"
                      />
                    </figure>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-layout dark:text-white">
          <div className="flex flex-col items-center w-full">
            <div className='hidden  lg:flex items-center justify-start lg:justify-center mt-2.5 mb-10'>
              <p className="mr-[19px] min-w-0 grow text-xs font-semiBold text-secondary whitespace-nowrap text-ellipsis overflow-hidden">موجود در انبار کفش چرم ( ارسال فوری ) </p>
            </div>

            <div className="flex flex-col items-center justify-start lg:justify-center p-5">
              <div className="flex w-full items-center justify-start lg:justify-center">
                <h1 className="font-DanaDemiBold line-clamp-2 text-2xl md:text-3xl font-danaMedium text-zinc-800 dark:text-white mb-2.5"> {title} </h1>
              </div>
              <div className="flex w-full items-center justify-start lg:justify-center">
                <strong className="font-DanaDemiBold text-base lg:text-xl text-sky-500 mb-2"> {category} </strong>
              </div>
              <div className="mb-10 mt-4 flex w-full flex-col">

                <div className="flex items-center">
                  <p className="text-sm leading-5 dark:text-white text-gray-600">رنگ:</p>
                </div>
                <div className="w-max max-w-[100%] border-b border-gray-400 pb-4">
                  <div className="flex items-center gap-2.5 flex-nowrap w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {color.map((colorItem) => (
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 list-none">
                        <div className={`flex items-center ps-3 w-max border px-[10px] h-6.5 rounded-[7px] bg-white border-amber-700`}>
                          <input id="horizontal-list-radio-color-license" type="radio" value={colorItem} name="list-radio-color" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={() => colorSelectionHandler(colorItem)}
                            checked={productColor.includes(colorItem)} />
                          <label htmlFor="horizontal-list-radio-color-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{colorItem}</label>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>

              </div>
              <div className="mb-6 mt-4 flex w-full flex-col">
                <div className="mb-5 flex w-full flex-col">
                  <div className="flex items-center">
                    <p className="text-sm leading-5 dark:text-white text-gray-600">سایز:</p>
                  </div>
                  <div className="w-max max-w-[100%] border-b border-gray-400 pb-4">
                    <div className="flex items-center gap-2.5 w-fit flex-nowrap">
                      {size.map((item) => (
                        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 list-none">
                          <div className={`flex items-center ps-3 w-max border px-[10px] h-6.5 rounded-[7px] bg-white border-secondary-500`}>
                            <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer" onChange={() => sizeSelectionHandler(item)} checked={poroductSize.includes(item)} />
                            <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 font-medium text-gray-900 dark:text-gray-300 ml-3 mr-2 select-none whitespace-nowrap text-xs leading-5 font-semiBold">{item}</label>
                          </div>
                        </li>
                      ))}
                    </div>
                    <span className="flex h-1 w-1 p-1 lg:h-0.5 lg:w-0.5 lg:p-0.5"></span>
                  </div>
                </div>
              </div>
              <div className="mb-6 mt-4 flex w-full flex-col overflow-x-auto no-scrollbar">
                <div className="flex items-center scroll-smooth lg:pr-0">
                  <div className="flex items-center gap-2.5 w-fit flex-nowrap">
                    <form className="max-w-sm mx-auto">
                      <label htmlFor="number-input" className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        تعداد :
                      </label>
                      <input
                        type="number"
                        onChange={(e) => productSizevalue(e)}
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="0"
                        min="1"
                        required
                      />
                    </form>
                  </div>
                  <span className="flex h-1 w-1 p-1 lg:h-0.5 lg:w-0.5 lg:p-0.5"></span>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between mt-5 px-4 pb-4 pt-5">
              <div>
                <span className="font-DanaMedium text-gray-400 tracking-tighter text-xs md:text-sm ml-8 "> مبلغ قابل  پرداخت </span>
                <div className=" text-zinc-700 dark:text-white font-DanaDemiBold text-xs md:text-xl mt-2">
                  {price}
                  <span className="font-Dana text-sm mx-2">تومان</span>
                </div>
              </div>
              <a href="#" className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" onClick={ProductOrderRegistration} >ثبت سفارش</a>
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
          <ProductSpecifications  {...product} />

        </div>
      </div>
      <MainProductsServices />
    </main>
  )
}
