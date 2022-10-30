import { collection, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';

import { firestore } from './firebase-setup';

export async function writeToDB(expense) {
  try {
    await addDoc(collection(firestore, 'expenses'), expense);
  } catch (err) {
    console.log(err);
  }
}

export async function updateToDB(expense) {
    try {
      await setDoc(doc(firestore, 'expenses', expense.key), expense);
    } catch (err) {
      console.log(err);
    }
}

export async function deleteFromDB(key) {
  try {
    await deleteDoc(doc(firestore, 'expenses', key));
  } catch (err) {
    console.log(err);
  }
}