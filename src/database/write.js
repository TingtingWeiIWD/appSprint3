import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

export async function addTask(data) {
  try {
    const docRef = await addDoc(collection(db, "tasks"), data);
    console.log(docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function updateTask({ id, status }) {
  if (status === 3) {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, {
        status: 1,
      });
      return true;
    } catch (e) {
      return false;
    }
  } else {
    try {
      const taskRef = doc(db, "tasks", id);
      await updateDoc(taskRef, {
        status: status + 1,
      });
      return true;
    } catch (e) {
      return false;
    }
  }
}

export async function deleteTask(id) {
  try {
    await deleteDoc(doc(db, "tasks", id));
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
