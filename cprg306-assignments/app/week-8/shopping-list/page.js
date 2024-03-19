"use client";
import { useState} from 'react';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list'
import NewItem from './new-item'
import ItemsData from './items.json';
import MealIdea from './meal-idea';
import { Redirect } from 'react-router-dom';

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  const [itemList, setItemList] = useState(ItemsData);
  const [selectedItemName, setselectedItemName] = useState(null)

  function handleAddItem(newItem) {
    setItemList([...itemList, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name.replace(/(,.*|🍛|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼)/g, '').trim();
    setselectedItemName(cleanedName);
  }

  return (
    <main className="flex-col items-center justify-center">
      <br/>
      <h1 className="font-bold text-4xl text-black-500 items">
        My Shopping List
      </h1>

      <br/>

      <NewItem onAddItem={e => handleAddItem(e)}></NewItem>

      <ItemList items={itemList} onItemSelect={(item) => handleItemSelect(item)} />

      <div className="md:w-1/2 p-4 justify-center" >
        <MealIdea ingredient={selectedItemName}/>
      </div>
    </main>
  )
}