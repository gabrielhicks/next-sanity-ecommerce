import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import ProductCard from "./ProductCard";

function ProductsPage({ products }) {
  const bread = Breadcrumbs();

  return (
    <Container
      mx="auto"
      px={6}
      maxWidth={{
        sm: "640px",
        md: "1024px",
        // lg: "1024px",
        xl: "1280px",
        // "2xl": "1280px",
      }}
    >
      <div className="py-6">{bread}</div>
      <h3 className="text-gray-700 text-2xl font-medium">House Plants</h3>
      <span className="mt-3 text-sm text-gray-500">Build your own jungle.</span>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </Container>
  );
}

export default ProductsPage;
