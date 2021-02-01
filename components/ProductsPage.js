import { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import ProductCard from "./ProductCard";

function ProductsPage({ products }) {
  const bread = Breadcrumbs();

  return (
    <div className="container mx-auto px-6">
      <div className="py-6">{bread}</div>
      <h3 className="text-gray-700 text-2xl font-medium">House Plants</h3>
      <span className="mt-3 text-sm text-gray-500">Build your own jungle.</span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
