import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../../context/userContext';

export default function ShowDetailsUser({ logoutHandler }) {
    const userContext = useContext(UserContext)
    const { isLoggedIn } = userContext;
    const navigate = useNavigate()

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
                <div className="absolute p-6 w-[400px] left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl " > برای مشاهده اطلاعات کاربر
                    {message}
                    <span> کنید. </span>
                </div>
                :
                <div className="dropdown-menu -left-5 top-full w-40 absolute px-4 py-7 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child-hover:text-sky-400 child:transition-colors">
                    <div className="flex-layout font-DanaMedium tracking-tighter" onClick={logoutHandler}>
                        <Link to="/" className="flex items-center" onClick={logoutHandler}>
                            خروج از سیستم
                        </Link>
                    </div >
                </div >
            }
        </>
    )
}
