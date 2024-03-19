'use client';
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 9);
    const newItem = { id, name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  
  };


  return (
    <div class="flex items-center  bg-black-800">
    <form onSubmit={handleSubmit} class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        class="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4 flex items-center">
      <label for="quantity" class="block text-gray-700 font-bold mr-2">
        Quantity
      </label>
      <input
        type="number"
        id="quantity"
        min="1"
        max="99"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        required
        class="flex-1 border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="category" class="block text-gray-700 font-bold mb-2">
        Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        class="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen-foods">Frozen Foods</option>
        <option value="canned-goods">Canned Goods</option>
        <option value="dry-goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
    </div>

    <button
      
      type="submit"
      class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
    >
      Submit
    </button>
  </form>
</div>
  );
}