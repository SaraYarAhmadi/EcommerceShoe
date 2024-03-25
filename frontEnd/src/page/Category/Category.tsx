import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Aside, { FilterVlueViewModel, Gender, initialFilterValue } from "./Aside/Aside";
import { BsSortDown } from "react-icons/bs";
import ProductCard from "../../component/ProductCard/ProductCard";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { ProductContext, ProductContextViewModel } from "../../context/productContex";

export interface ProductViewModel {
  _id: string;
  title: string;
  description: string;
  slug: string,
  price: number,
  quantity: number,
  sold: number,
  images: string[];
  color: string[],
  category: string,
  size: string[],
  gender: number,
  totalrating: number
}


export default function Categories() {
  const productContex = useContext(ProductContext);
  const [allPoroduct, setAllProduct] = useState<ProductContextViewModel[]>([]);
  const [allFilterFildsValue, setAllFilterFildsValue] = useState<FilterVlueViewModel>(initialFilterValue)
  const { searchValue, shoeSizesFilterList, priceFilterList, gender } = allFilterFildsValue

  const getFiltersValue = (allFilters: FilterVlueViewModel): void => {
    console.log("filterValue", allFilters);
    setAllFilterFildsValue(allFilters)
  }

  function productFilter(list: ProductContextViewModel[]): ProductContextViewModel[] {
    const genderFilter = gender == Gender.All ? list : list.filter(item => item.gender == gender);
    const keywordFilter = genderFilter.filter(item => item.title.includes(searchValue));
    const shoeSizesFilter = !shoeSizesFilterList?.length ? keywordFilter :
      keywordFilter.filter(product => product.size.some(sizeItem => shoeSizesFilterList.some(item => item === sizeItem)));

    const priceFilter = shoeSizesFilter.filter(({ price }) => (price > priceFilterList[0] && price < priceFilterList[1]));

    return priceFilter;
  }

  useEffect(() => {
    setAllProduct(productContex)
  }, [productContex])


  return (
    <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
      <Breadcrumb links={[
        { id: 1, title: "خانه", to: "/" },
        { id: 1, title: "همه محصولات", to: "/Category-info/category" },
      ]} />
      <div>
        <h2 className="flex items-center gap-x-3 sm:gap-x-5 w-min mx-auto mt-20 dark:text-white font-morabba text-3xl sm:text-4xl whitespace-nowrap">
          همه محصولات </h2>
        <section className="grid items-start grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 mt-7 sm:mt-20">
          <Aside getFiltersValue={getFiltersValue} />
          <section className="col-span-1 lg:col-span-2 xl:col-span-3 order-1 lg:order-2">
            {/* <!-- Course List --> */}
            <div className="grid grid-rows-2 sm:grid-cols-2 xl:grid-cols-3 gap-5">

              {productFilter(allPoroduct).map((product: ProductContextViewModel) => (

                <ProductCard key={product._id} {...product} />
              ))
              }
            </div>
          </section>

        </section>
      </div>
    </main>
  )
}
