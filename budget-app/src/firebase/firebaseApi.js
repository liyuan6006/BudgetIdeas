import firebase from './firebaseConfig'

const databaseRef = firebase.database().ref();
export const categoriesRef = databaseRef.child("categories/");
export const budgetsRef = databaseRef.child("budgets/");
export const transactionsRef = databaseRef.child("transactions/");
export const incomesRef = databaseRef.child("incomes/");

export const getCategories = databaseRef.child("categories/");
export const getBudgets = databaseRef.child("budgets/");
export const getTransactions = databaseRef.child("transactions/");
export const getIncomes = databaseRef.child("incomes/");

export const updateIncome = (id,object)=> firebase.database().ref('incomes/'+id).set(object);
 