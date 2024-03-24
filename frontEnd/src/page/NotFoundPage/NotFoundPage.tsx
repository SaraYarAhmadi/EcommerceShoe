import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
            <h1 className="flex items-center gap-x-3 sm:gap-x-5 w-min mx-auto mt-20 dark:text-white font-morabba text-3xl sm:text-4xl whitespace-nowrap mb-10">صفحه مورد نظر یافت نشد</h1>
            <Link to={"/"} className="sm:mt-40 text-sky-500 border border-sky-600 rounded-xl p-2"> صفحه اصلی </Link>
            <div className='flex items-center justify-center mt-10' >
                <img src="./img/Lego-404-not-found-page.jpg" alt="notFound" />
            </div>

        </main>
    )
}
