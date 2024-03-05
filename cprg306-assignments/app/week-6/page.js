"use client";
import React from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = React.useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  return (
    <main>
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <div>
      <h2 className="text-2xl font-semibold">Adding item</h2>
        <NewItem onAddItem={handleAddItem}  />
        <h2 className="text-2xl font-semibold">Categories by</h2>
        <ItemList items={items} />
      </div>
    </main>
  );
}