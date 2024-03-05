"use client";
import { useState } from "react";
import Item from "./item.js";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState(items);

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    const sorted = [...items].sort((a, b) => {
      if (newSortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (newSortBy === "category") {
        return a.category.localeCompare(b.category);
      } else {
        return 0;
      }
    });
    setSortedItems(sorted);
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => handleSortChange("name")}
        style={{ backgroundColor: sortBy === "name" ? "green" : "orange" }}
        className="mr-4 ml-4"
      >
        Name
      </button>
      <button
        onClick={() => handleSortChange("category")}
        style={{
          backgroundColor: sortBy === "category" ? "green" : "orange",
        }}
        className="ml-4"
      >
        Category
      </button>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;