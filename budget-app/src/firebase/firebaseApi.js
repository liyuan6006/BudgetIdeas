import firebase from './firebaseConfig'

const databaseRef = firebase.database().ref();
export const categoriesRef = databaseRef.child("categories/");
export const budgetsRef = databaseRef.child("budgets/");
export const transactionsRef = databaseRef.child("transactions/");
export const incomeRef = databaseRef.child("income/");
export const savingRef = databaseRef.child("savings/");

export const getCategories = databaseRef.child("categories/");
export const getBudgets = databaseRef.child("budgets/");
export const getTransactions = databaseRef.child("transactions/");
export const getIncome = databaseRef.child("income/");

export const updateIncome = (id,object)=> firebase.database().ref('income/'+id).set(object);
 