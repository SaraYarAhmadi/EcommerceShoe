import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ProductContextViewModel } from 'src/context/productContex';

interface ShowShoppingCartMobileProps {
    closeMobileCart?: () => void
}

export default function ShowShoppingCartMobile({ closeMobileCart }: ShowShoppingCartMobileProps) {
    const [cart, setCart] = useState<ProductContextViewModel[]>([]);
    const [totalPrice, setTotalPrice] = useState(0);

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


    return (
        <>
            {/* cart */}
            <div className="flex-layout pb-5 mb-5 border-b-2 border-b-gray-300 dark:border-b-white/10">
                <div className='flex items-center text-zinc-600 dark:text-white text-xl shrink-0' onClick={closeMobileCart}>
                    <AiOutlineClose />
                </div>
                <span className="tracking-tighter text-zinc-700 dark:text-white text-base"> سبدخرید </span>

            </div>
            {/* cart body */}

            {cart.map((itemBasket) => (
                <div className="child:pb-5 child:mb-5" key={itemBasket._id}>
                    <div className="flex gap-x-1 border-b border-b-gray-300 dark:border-b-white/10">
                        <img src={itemBasket.images[0]} className="w-30 h-30 rounded-xl" alt="vans" />
                        <div className="flex flex-col justify-around">
                            <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2"> {itemBasket.title} </h4>
                            <div className=" text-zinc-700 dark:text-white text-xs font-DanaDemiBold">
                                {itemBasket.price}
                                <span className="font-DanaMedium text-xs">تومان</span>
                            </div>
                        </div>
                    </div>
                </div>

            ))}


            {/* cart footer */}
            <div className="flex items-end gap-x-4 mb-8 mt-auto text-sky-500">
                <a href="#" className="flex items-center justify-center w-28 h-11 bg-sky-500 tracking-tighter hover:bg-sky-600 rounded-xl text-white text-base" >ثبت سفارش</a>
                <div>
                    <span className="font-DanaMedium text-gray-300 tracking-tighter text-sm"> مبلغ قابل  پرداخت </span>
                    <div className=" text-zinc-700 dark:text-white font-DanaDemiBold text-base">
                        <span className="woocommerce-Price-amount amount">
                            {totalPrice.toLocaleString()} تومان &nbsp;
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}
