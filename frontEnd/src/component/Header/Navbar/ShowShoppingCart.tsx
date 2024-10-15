import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import { ProductContextViewModel } from 'src/context/productContex';

export default function ShowShoppingCart() {
    const userContext = useContext(UserContext)
    const { isLoggedIn } = userContext;
    const [cart, setCart] = useState<ProductContextViewModel[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const logoutHandler = () => {
        userContext.logout()
    };

    useEffect(() => {
        const localCart = localStorage.getItem("cart");
        const cart = localCart ? JSON.parse(localCart) : [];
        setCart(cart);
    }, []);

    useEffect(calcTotalPrice, [cart]);

    function calcTotalPrice(updatedCart?: ProductContextViewModel[]) {
        let price = 0;

        if (cart.length) {
            price = cart.reduce(
                (prev, current) => prev + current.price * current.count,
                0
            );
            setTotalPrice(price);
        }
        setTotalPrice(price);
    }

    const message: React.ReactNode = (
        <>
            <Link to="/login" className='mx-1 text-sky-300 hover:text-sky-600'>
                ورود
            </Link>/
            <Link to="/register" className='mx-1 text-sky-300 hover:text-sky-600'>
                ثبت نام
            </Link>
        </>
    )

    return (
        <>
            {!isLoggedIn ?
                <div className="absolute p-6 w-[400px] left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl " > برای مشاهده سبد خرید ابتدا
                    {message}
                    <span> کنید. </span>
                </div>
                :

                <div className="absolute p-6 w-[400px] left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child-hover:text-sky-400 child:transition-colors">
                    <div className="flex-layout  text-xs font-DanaMedium tracking-tighter">
                        <span className="text-gray-300">{cart.length
                        } مورد</span >
                        <Link to="/Product-cart/:productCart" className="flex items-center">
                            مشاهده سبد خرید
                            <span className="w-4 h-4 text-base">  <IoIosArrowBack /></span>
                        </Link>
                    </div >
                    <div className="border-b border-b-gray-300 dark:border-b-white/10 pb-1 divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                        {cart.map((itemBasket) => (
                            <div className="flex gap-x-2.5" key={itemBasket._id}>
                                <img src={itemBasket.images[0]} className="w-30 h-30 rounded-xl" alt="vans" />
                                <div className="flex flex-col justify-around">
                                    <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2"> {itemBasket.title}</h4>
                                    <div className=" text-zinc-700 dark:text-white text-xs font-DanaDemiBold">
                                        {itemBasket.price}
                                        <span className="font-Dana text-sm">   تومان  </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-5">
                        <div>
                            <span className="font-DanaMedium text-gray-300 tracking-tighter text-xs"> مبلغ قابل  پرداخت </span>
                            <div className=" text-zinc-700 dark:text-white font-DanaDemiBold mt-1">
                                <span className="woocommerce-Price-amount amount">
                                    {totalPrice.toLocaleString()} تومان &nbsp;
                                </span>
                            </div>
                        </div>
                        <Link to="/Product-cart/:productCart" className="flex items-center justify-center w-[144px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white"> ثبت سفارش </Link>
                    </div>
                </div >
            }
        </>
    )
}
