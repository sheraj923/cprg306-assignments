import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
    const q = query(
        collection(db, "users",userId, "items"),
      );
      const querySnapshot = await getDocs(q);
  const userItems = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return userItems;
}

  export async function addItem(userId, item) {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    return addDoc(itemsCollectionRef, item);
  }