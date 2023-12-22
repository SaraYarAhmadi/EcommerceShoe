import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { RiHome4Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

interface BreadcrumbViewModel {
    id: number,
    title: string,
    to: string
}

interface CustomBreadcrumbProps {
    links: BreadcrumbViewModel[];
}

export default function Breadcrumb({ links }: CustomBreadcrumbProps) {
    return (
        <>
            <div className="flex w-full h-[50px] items-center overflow-hidden rounded-2xl font-DanaMedium text-xl border-2 shadow-xl text-zinc-600 sm:mt-10 md:mt-36 lg:mt-20">

                {links.map((link: BreadcrumbViewModel) => (
                    <div className="breadcrumb__item relative">
                        <Link to={`"\"${link.to}`} className="flex items-center justify-center text-base md:text-xl font-medium text-gray-700 text-center hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">

                            {/* {
                                link.id > 1 ? null : (<span className="w-6 h-6 me-3 text-2xl">
                                    <RiHome4Line />
                                </span>)
                            } */}

                            <span className=' pt-[4px]'>
                                {link.title}
                            </span>
                        </Link>
                    </div>
                ))}

            </div>
        </>


    )
}
