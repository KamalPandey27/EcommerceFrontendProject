import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { DataContext } from "../context/DataContext.jsx";
function CategoryProductData() {
  let { data, fetchAllProducts, productCategoryData } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const filterData = data.filter((e) => e.category === productCategoryData);

  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center  lg:gap-5 md:gap-4 gap-3  lg:p-5 sm:p-3 p-3">
        {filterData.map((e) => {
          return <ProductCard products={e} key={e.id} />;
        })}
      </div>
    </>
  );
}

export default CategoryProductData;
