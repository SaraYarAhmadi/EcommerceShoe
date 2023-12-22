import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Aside from "./Aside/Aside";
import { BsSortDown } from "react-icons/bs";
import ProductCard from "../../component/ProductCard/ProductCard";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";

export default function Categories() {
  return (
    <main className="mb-12 md:mb-36 w-[90%] mx-auto pt-6 lg:pt-24">
      <Breadcrumb links={[
        { id: 1, title: "خانه", to: "" },
        { id: 1, title: "همه محصولات", to: "Category-info/products" },
      ]} />
      <div>
        <h2 className="flex items-center gap-x-3 sm:gap-x-5 w-min mx-auto mt-20 dark:text-white font-morabba text-3xl sm:text-4xl whitespace-nowrap">
          همه محصولات </h2>
        <section className="grid items-start grid-rows-1 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-5 mt-7 sm:mt-20">
          <Aside />
          <section className="col-span-1 lg:col-span-2 xl:col-span-3 order-1 lg:order-2">
            {/* <!-- Course List --> */}
            <div className="grid grid-rows-2 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>

        </section>
      </div>


    </main>
  )
}
