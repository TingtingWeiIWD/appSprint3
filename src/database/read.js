import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function loadTasks() {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "tasks"));
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  //   console.log(data);
  return data;
}
