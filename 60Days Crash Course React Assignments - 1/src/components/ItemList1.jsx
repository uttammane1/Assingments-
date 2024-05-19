// src/components/ItemList1.jsx

import React from "react";

function ItemList1() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList1;
