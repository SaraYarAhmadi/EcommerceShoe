import React, { ChangeEvent, useEffect, useState } from 'react'
import Slider from 'react-slider';
import "./Aside.css"
import { number } from 'yup';

export enum Gender {
  All,
  Female,
  Male,
}

const max = 9000000;
const min = 0;
export interface FilterVlueViewModel {
  searchValue: string,
  isMale: boolean,
  isFemale: boolean,
  shoeSizesFilterList: string[],
  priceFilterList: number[],
  gender: number,
}


export const initialFilterValue: FilterVlueViewModel = {
  searchValue: "",
  isMale: false,
  isFemale: false,
  shoeSizesFilterList: [],
  priceFilterList: [min, max],
  gender: Gender.All,
}

interface Asidprops {
  getFiltersValue: (allFilters: FilterVlueViewModel) => void
}

export default function Aside({ getFiltersValue }: Asidprops) {
  const [allSize, setAllSize] = useState([])
  const [filtersValue, setFiltersValue] = useState<FilterVlueViewModel>(initialFilterValue)
  const { searchValue, isMale, isFemale, shoeSizesFilterList, priceFilterList, gender } = filtersValue;

  const getAllSize = () => {
    fetch("http://localhost:7500/api/size/")
      .then(res => res.json())
      .then(data => setAllSize(data))
  }

  useEffect(() => {
    getAllSize()
  }, [])

  const productSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      searchHandler()
    }
  };

  const searchHandler = () => {
    getFiltersValue(filtersValue)
  };

  const checkboxChangeHandler = (e: any, isTypeChecked: boolean = true): void => {
    const newFiltersValue: FilterVlueViewModel = {
      ...filtersValue,
      // [e.target.name]: isTypeChecked ? e.target.checked : e.target.value,
      [e.target.name]: e.target[isTypeChecked ? 'checked' : 'value'],
    };

    setFiltersValue(newFiltersValue)
    getFiltersValue(newFiltersValue)
  }

  const shoeSizeFilterChangeHandler = (title: string) => {
    const existShoeSize = shoeSizesFilterList.some(item => item === title);
    const newShoeSizeFilter = existShoeSize ? shoeSizesFilterList.filter(item => item !== title) : [...shoeSizesFilterList, title];
    const newFiltersValue: FilterVlueViewModel = {
      ...filtersValue,
      shoeSizesFilterList: newShoeSizeFilter
    };

    setFiltersValue(newFiltersValue);
    getFiltersValue(newFiltersValue);
  };
  const ShoePriceFilterHandler = (value: number[]) => {
    const newFiltersValue: FilterVlueViewModel = {
      ...filtersValue,
      priceFilterList: value
    };
    setFiltersValue(newFiltersValue)
    getFiltersValue(newFiltersValue);
  };

  return (
    <aside className="lg:sticky top-5 space-y-5">
      <div className="space-y-5">
        <div className="h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl">
          <div className="h-full flex-layout text-slate-500 dark:text-gray-500">
            <input
              type="text"
              name="s"
              className="w-full bg-transparent dark:bg-transparent text-sm font-dana pr-7 border-none p-2 pl-8 text-gray-900 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="در بین محصولات جستجو کنید"
              value={searchValue}
              onChange={(e) => setFiltersValue((prevFilterData) => ({
                ...prevFilterData,
                searchValue: e.target.value,
              }))}
              onKeyUp={(e) => productSearchHandler(e)}
            />
            <button className="mr-4 ml-6" type="submit" onClick={searchHandler}>
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- Category Filter --> */}
        {/* <!-- Toggle Box Container --> */}
        <div className="hidden sm:grid grid-cols-3 lg:grid-cols-1 gap-5 ">
          <div className="">
            <aside className=" p-2 lg:pr-7 h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl py-2 text-base  font-DanaDemiBold relative w-full inline-block text-zinc-700 dark:text-white z-10 shadow-xl">
              <div className="widget_title">فیلتر براساس قیمت :</div>
              <div className="block pt-5 px-4 relative font-medium">
                <form method="get" className="p-0">
                  <div className="relative pt-2">
                    <Slider
                      className="slider"
                      onChange={(value) => ShoePriceFilterHandler(value)}
                      min={min}
                      max={max}
                      value={priceFilterList}
                    />
                    <div className="flex items-center mt-4 justify-between" data-step="10">
                      {/* <button type="submit" className="button">فیلتر</button> */}
                      <div className="price-label">
                        قیمت: <span className="from">{priceFilterList[1]}&nbsp;تومان</span> — <span className="to">{priceFilterList[0]}&nbsp;تومان</span>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                </form>
              </div>
            </aside>
          </div>
          <ul className="text-sm font-medium text-gray-900 border dark:border-gray-600 dark:text-white p-2 lg:pr-7 shadow-xl h-17 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border rounded-2xl">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="list-radio-license" type="radio" value={Gender.All} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => checkboxChangeHandler(e, false)} checked={gender == Gender.All} />
                <label htmlFor="list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> همه </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="list-radio-id" type="radio" value={Gender.Female} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => checkboxChangeHandler(e, false)} checked={gender == Gender.Female} />
                <label htmlFor="list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> زنانه </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input id="list-radio-military" type="radio" value={Gender.Male} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={(e) => checkboxChangeHandler(e, false)} checked={gender == Gender.Male} />
                <label htmlFor="list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> مردانه </label>
              </div>
            </li>
          </ul>
        </div>
        <div className=" gap-5 mt-3 overflow-hidden lg:grid bg-white shadow-lg rounded-2xl dark:text-white dark:bg-gray-800 dark:border border-gray-700 ">
          <div className="py-2 text-base  font-DanaDemiBold relative w-full inline-block text-zinc-700 dark:text-white dark:bg-gray-800 dark:border border-gray-700 pr-4 z-10 bg-white shadow-xl">سایز</div>
          <div className="py-4 px-2 block relative font-DanaMedium ">
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 dark:text-white">
              {allSize.map(({ _id, title }) => (
                <li className="w-full" key={_id}>
                  <div className="flex items-center ps-3">
                    <input
                      id={_id}
                      type="checkbox"
                      checked={shoeSizesFilterList.some(item => item === title)}
                      onChange={() => shoeSizeFilterChangeHandler(title)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                    <label htmlFor={_id} className="py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {title} </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </aside>
  )
}
