// src/components/ProductList.jsx

import React from "react";

function ProductList() {
  const products = [
    { id: 101, name: "Product A" },
    { id: 102, name: "Product B" },
    { id: 103, name: "Product C" },
  ];
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
