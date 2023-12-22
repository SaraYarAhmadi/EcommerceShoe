import React from 'react'
import { GiBookAura } from 'react-icons/gi'

export default function Navbar() {
    return (
        <nav className='flex items-center gap-x-5 lg:gap-x-9 h-14'>
            {/* logo */}
            <div className='flex items-center text-sky-500 text-4xl shrink-0'>
                <GiBookAura />
            </div>
            {/* nav */}
            <ul className='h-full flex gap-x-4 lg:gap-x-5 text-base text-slate-800 dark:text-white font-Dana tracking-tighter child:leading-[56px] child-hover:transition-colors child-hover:text-sky-400'>
                <li className='font font-DanaMedium '>
                    <a href="#" className='hover:text-sky-500'>صفحه اصلی</a>
                </li>
                {/* sub menu first */}
                <li className='relative group'>
                    <a href="#">برنامه نویسی  </a>
                    <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                        <a href="#">آموزش HTML</a>
                        <a href="#">آموزش CSS</a>
                        <a href="#">آموزش بوت استرپ</a>
                        <a href="#">آموزش جاوااسکریپت</a>
                        <a href="#">آموزش ری اکت</a>
                        <a href="#">آموزش Tailwind</a>
                    </div>
                </li>
                <li className="relative group">
                    <a href="#">زبان های خارجی </a>
                    <div className='absolute p-6 w-52 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px] border-t-sky-400 text-zinc-700 dark:text-white space-y-4 tracking-normal shadow-xl child:inline-block child-hover:text-sky-400 child:transition-colors'>
                        <a href="#">آموزش HTML</a>
                        <a href="#">آموزش CSS</a>
                        <a href="#">آموزش بوت استرپ</a>
                        <a href="#">آموزش جاوااسکریپت</a>
                        <a href="#">آموزش ری اکت</a>
                        <a href="#">آموزش Tailwind</a>
                    </div>
                </li>
                <li>
                    <a href="#">هوش مصنوعی</a>
                    <ul className='hidden'>
                        <li>
                            <a href="#">آموزش HTML</a>
                        </li>
                        <li>
                            <a href="#">آموزش CSS</a>
                        </li>
                        <li>
                            <a href="#">آموزش بوت استرپ</a>
                        </li>
                        <li>
                            <a href="#">آموزش جاوااسکریپت</a>
                        </li>
                        <li>
                            <a href="#">آموزش ری اکت</a>
                        </li>
                        <li>
                            <a href="#">آموزش Tailwind</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">درباره ما</a>
                </li>
                <li>
                    <a href="#">ارتباط با ما </a>
                </li>
            </ul>
        </nav>
    )
}
