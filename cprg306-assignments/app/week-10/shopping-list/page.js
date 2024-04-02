import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdea from './meal-idea';
import { getItems, addItem } from "../_services/shopping-list-service";
import { Redirect } from 'react-router-dom';

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <Redirect to="/" />;
  }

  const [itemList, setItemList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null); 

  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItemList(userItems);
    
    }
  };
  useEffect(() => {
  
  loadItems();
  }, [user]);

  const handleAddItem = async (itemName, itemQuantity, itemCategory) => {
    if (!itemName || !itemQuantity || !itemCategory) {
      alert("Please fill in all fields.");
      return;
    }
  
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };
  
    if (
      itemList && itemList.length > 0 && itemList.some(
        (item) =>
          item.name === newItem.name &&
          item.quantity === newItem.quantity &&
          item.category === newItem.category
      )
    ) {
      alert("Item already exists");
    } else {
      if (user) {
        const userId = user.uid;
        try {
          const newItemDoc = await addItem(userId, newItem);
          setItemList([...itemList, { id: newItemDoc, ...newItem }]); 
        } catch (error) {
          console.error("Error adding item to Firestore:", error);
          alert("Failed to add item. Please try again later.");
        }
      }
    }
  };
  

  function handleItemSelect(item) {
    const cleanedName = item.name.replace(/(,.*|🍛|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🍽️|🧼)/g, '').trim();
    setSelectedItemName(cleanedName); e
  }

  return (
    <main className="flex-col items-center justify-center">
      <br/>
      <h1 className="font-bold text-4xl text-black-500 items">
        My Shopping List
      </h1>

      <br/>

      <NewItem handleAddItem ={handleAddItem}></NewItem> {}

      <ItemList items={itemList} onItemSelect={(item) => handleItemSelect(item)} />

      <div className="md:w-1/2 p-4 justify-center" >
      <MealIdea ingredient={selectedItemName}/>
      </div>
    </main>
  )
}
