import firebase from './firebaseConfig'

const databaseRef = firebase.database().ref();
export const categoriesRef = databaseRef.child("categories/");
export const budgetsRef = databaseRef.child("budgets/");
export const transactionsRef = databaseRef.child("transactions/");