// src/components/NestedList1.jsx

import React from "react";

function NestedList1() {
  const categories = [
    {
      name: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },
    {
      name: "Vegetables",
      items: ["Carrot", "Broccoli", "Spinach"],
    },
  ];
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h4>{category.name}</h4>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList1;
