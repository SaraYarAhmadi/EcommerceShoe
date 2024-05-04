import { useContext } from 'react'
import Breadcrumb from '../../component/Breadcrumb/Breadcrumb'
import { BasketContext, BasketContextViweModel } from '../../context/basketContext';
import { MdOutlineDeleteOutline } from "react-icons/md";
import UserContext from "../../context/userContext";
import { ProductContextViewModel } from '../../context/productContex';

interface UpdateProductCartItemDataModel {
    productId: string;
    quantity: number;
}

enum CountOperation {
    Decrease,
    Increase,
    Delete,
}

export default function ProductCart() {
    const basketContext = useContext(BasketContext)
    const { products } = basketContext;
    const { userInfos } = useContext(UserContext);

    const ChangeProductCountHandler = (e: any) => {
        console.log("sasa", e);

    }

    const updateNewProducts = (newProductsList: ProductContextViewModel): void => {
        const { _id, count } = newProductsList;
        const updateProductCartItemDataModel: UpdateProductCartItemDataModel = {
            productId: _id,
            quantity: count,
        };

        fetch('http://localhost:4000/api/user/cart/update-product', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfos.token}` // اضافه کردن توکن به هدر درخواست
            },
            body: JSON.stringify(updateProductCartItemDataModel),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("update", data)
                basketContext.updateBasketProducts(data?.products?.length ? data?.products : [])
            });

    }

    const onCountChangeHandle = (_id, operation) => {
        const product = products.find(item => (item._id === _id));

        if (product) {
            const { count } = product;
            const newCountBasedOperation = operation === CountOperation.Decrease ? count - 1 : operation === CountOperation.Increase ? count + 1 : 0;
            const newProductData = { ...product, count: newCountBasedOperation };

            updateNewProducts(newProductData)
        }
    }

    const onIncreaseClick = (e, _id) => {
        // const changedProduct = products.map(item => (item._id === _id) ? { ...item, count: item.count + 1 } : item).find(item => (item._id === _id));
        console.log(e.target.dataset);

        const { countOperation } = e.target.dataset;
        console.log("countOperation", countOperation);
        const product = products.find(item => (item._id === _id));
        // const newProductData = product && { ...product, count: dataset == '' product.count + 1 };
        // if (newProductData) updateNewProducts(newProductData)
    }

    const onDecreaseClick = (e, _id) => {
        const changedProduct = products.map(item => (item._id === _id) ? { ...item, count: item.count - 1 } : item).find(item => (item._id === _id));

        if (changedProduct) updateNewProducts(changedProduct)
    }

    const onDeleteClick = (e, _id) => {
        const changedProduct = products.map(item => (item._id === _id) ? { ...item, count: 0 } : item).find(item => (item._id === _id));

        if (changedProduct) updateNewProducts(changedProduct)
    }

    return (
        <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
            {/* <!-- Breadcrumb --> */}
            <Breadcrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 1, title: "همه محصولات", to: "/Category-info/category" },
                { id: 3, title: "سبد خرید", to: "/Product-cart/:productCart" }
            ]} />

            {/* <!-- product Head --> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full mx-auto sm:gap-5 sm:mt-20 justify-between gap-8 mt-10 rounded-2xl overflow-hidden">
                <div className="lg:col-span-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    محصول
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    تعداد
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    قیمت
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    حذف از سبد
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((itemBasket) => (
                                <tr key={itemBasket._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-3">
                                        <img src={itemBasket.product.images[0]} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {itemBasket.product.title}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center">
                                            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={(e) => onCountChangeHandle(itemBasket._id, CountOperation.Decrease)}>
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" value={itemBasket.count} disabled />
                                            </div>
                                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button" onClick={(e) => onCountChangeHandle(itemBasket._id, CountOperation.Increase)}>
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                                        {itemBasket.price}
                                    </td>
                                    <td className="px-4 py-4">
                                        <a href="#" className="font-medium text-red-600 text-2xl dark:text-red-500 hover:underline"
                                            onClick={(e) => onCountChangeHandle(itemBasket._id, CountOperation.Delete)}> <MdOutlineDeleteOutline /> </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
                    <h2 className='py-4'>جمع کل سبد خرید</h2>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody >
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 py-2">
                                <th>مجموع</th>
                                <td data-title="مجموع" className="px-6 py-4 font-semibold text-gray-900 dark:text-white"><strong><span className="woocommerce-Price-amount amount"><bdi> {basketContext.cartTotal} &nbsp;<span className="woocommerce-Price-currencySymbol">تومان</span></bdi></span></strong> </td>
                            </tr>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th>تخفیف شما از این خرید</th>
                                <td data-title=" تخفیف شما از این خرید " className="px-6 py-4 font-semibold text-gray-900 dark:text-white"><span className="woocommerce-Price-amount amount"><bdi>...&nbsp;<span className="woocommerce-Price-currencySymbol">تومان</span></bdi></span></td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 py-3">
                                <th>مجموع پس ازاعمال کد تخفیف </th>
                                <td data-title="جمع جزء" className="px-6 py-4 font-semibold text-gray-900 dark:text-white "><span className="px-6 py-4 font-semibold text-gray-900 dark:text-white"><bdi>{basketContext.cartTotal}&nbsp;<span className="woocommerce-Price-currencySymbol">تومان</span></bdi></span></td>
                            </tr>
                        </tbody></table>
                    <div className="flex items-center justify-center mt-20 py-2">
                        <a href="#" className="flex items-center justify-center w-[200px] h-14 bg-sky-500 tracking-tighter hover:bg-sky-600  rounded-xl text-white" > ادامه جهت تسویه حساب </a>
                    </div>
                </div>
            </div>
        </main>
    )
}