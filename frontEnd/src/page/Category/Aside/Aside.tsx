import React from 'react'

export default function Aside() {
  return (
    <aside className="lg:sticky top-5 space-y-5">
    <form className="space-y-5">
      <div className="h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
        <div className="h-full flex items-center justify-between text-slate-500 dark:text-gray-500">
          <input type="text" name="s" className="w-full bg-transparent dark:bg-transparent text-sm font-dana pr-7 border-none p-2 pl-8 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="در بین محصولات جستجو کنید" />
          <button className="mr-4 ml-6" type="submit">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </button>
        </div>
      </div>
      {/* <!-- Category Filter --> */}
      {/* <!-- Toggle Box Container --> */}
      <div className="hidden sm:grid grid-cols-3 lg:grid-cols-1 gap-5 ">
        <div className="p-2 lg:pr-7 h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
          <div className="flex items-center justify-between h-full">
            <span className="text-sm text-zinc-700 dark:text-white select-none">محصولات دارای تخفیف</span>

            <label className="relative grid items-center justify-self-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 p-2 pl-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>

          </div>
        </div>
        <div className="p-2 lg:pr-7  h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
          <div className="flex items-center justify-between h-full">
            <span className="text-sm text-zinc-700 dark:text-white select-none">  زنانه  </span>
            <label className="relative grid items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
        <div className="p-2 lg:pr-7 h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
          <div className="flex items-center justify-between h-full">
            <span className="text-sm text-zinc-700 dark:text-white select-none">  مردانه </span>
            <label className="relative grid items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
      </div>
      <div className=" gap-5 mt-3 overflow-hidden lg:grid bg-white shadow-lg rounded-2xl dark:text-white dark:bg-gray-800 dark:border border-gray-700 ">
        <div className="py-2 text-base  font-DanaDemiBold relative w-full inline-block text-zinc-700 dark:text-white dark:bg-gray-800 dark:border border-gray-700 pr-4 z-10 bg-white shadow-xl">سایز</div>
        <div className="py-4 px-2 block relative font-DanaMedium ">
          <ul className="flex flex-row lg:flex-col child:pb-2 child:pr-6 child:pl-2 child:w-full child:relative child:text-start">
            <li className="widgetlis">
              <a rel="nofollow" href="#">37</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">38</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">39</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">40</a>
            </li>
            <li className="widgetlis"><a rel="nofollow" href="#">41</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">42</a>
            </li>
            <li className="widgetlis"><a rel="nofollow" href="#">43</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">44</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">45</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">46</a>
            </li>
            <li className="widgetlis">
              <a rel="nofollow" href="#">47</a>
            </li>
          </ul>
        </div>
      </div>
    </form>

  </aside>
  )
}
