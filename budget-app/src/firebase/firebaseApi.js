//import firebaseConfig from './firebaseConfig'

import {db} from './firebase'

const databaseRef = db.ref();
export const categoriesRef = databaseRef.child("categories/");
export const budgetsRef = databaseRef.child("budgets/");
export const transactionsRef = databaseRef.child("transactions/");
export const incomeRef = databaseRef.child("income/");
export const savingRef = databaseRef.child("savings/");

export const getCategories = databaseRef.child("categories/");
export const getBudgets = databaseRef.child("budgets/");
export const getTransactions = databaseRef.child("transactions/");
export const getIncome = databaseRef.child("income/");

export const updateIncome = (id,object)=> db.ref('income/'+id).set(object);
 