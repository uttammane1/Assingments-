// src/components/HighlightList1.jsx

import React from "react";

function HighlightList1() {
  const items = ["Item 1", "Item 2", "Item 3", "Special Item"];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ color: item === "Special Item" ? "red" : "black" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightList1;
