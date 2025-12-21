import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection.jsx";
import { useContext } from "react";
import { DataContext } from "../context/DataContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
function Products() {
  const { data, fetchAllProducts } = useContext(DataContext);
  const [filter, setFilter] = useState({});
  const categoryData = filter.categoryData ?? [];
  const brandData = filter.brandData ?? "";
  const priceRange = filter.priceRange ?? "";

  const filterData = data.filter((e) => {
    const categoryMatch =
      categoryData.length > 0 ? categoryData.includes(e.category) : true;

    const brandMatch = brandData ? e.brand === brandData : true;

    const priceMatch = priceRange ? e.price <= priceRange : true;

    return categoryMatch && brandMatch && priceMatch;
  });

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  return (
    <>
      <div className="flex justify-around gap-5 md:flex-row flex-col lg:p-5 p-3 h-screen overflow-hidden">
        <FilterSection onApplyFilter={setFilter} />
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center  lg:gap-5 md:gap-4 gap-3 overflow-y-scroll lg:p-5 sm:p-3 p-3">
          {filterData?.map((e, index) => {
            return <ProductCard products={e} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
