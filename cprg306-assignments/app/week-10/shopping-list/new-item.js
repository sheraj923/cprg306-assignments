'use client';
import { useState ,useEffect} from "react";

const NewItem = ({handleAddItem}) => {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [cond, setCond] = useState(false);

  const onAddItem = (event) => {
    event.preventDefault();
    handleAddItem(name, quantity, category);
    console.log(name, quantity, category);
    setCond(true);
  };
  useEffect(() => {
    setInputName("");
    setCond(false);
  },[cond]);
  let ChangeName = (event) => {
    setInputName(event.target.value);
    setName(event.target.value);
  };
  let ChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  let ChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div class="flex items-center  bg-black-800">
    <form onSubmit={e => onAddItem(e)} class="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={inputName}
        onChange={ ChangeName}
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
        onChange={ChangeQuantity}
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
        onChange={ChangeCategory}
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
export default NewItem;