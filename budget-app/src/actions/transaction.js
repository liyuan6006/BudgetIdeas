import { GET_TRANSACTIONS } from './transactionActionType'

import { transactionsRef } from '../firebase/firebaseApi'


export const addTransaction = (newTransaction) => {
  return async (dispatch) => {
    transactionsRef.push(newTransaction)
  }
}
export const deleteTransaction = (id) => {
  return async (dispatch) => {
    transactionsRef.child(id).remove()
  }
}
export const getTransactions = () => {
  return async (dispatch) => {
    try {
      transactionsRef.on('value', function (snapshot) {
        var transactions = [];
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          transactions.push({
            id: childSnapshot.key,
            category: childData.category,
            amount: childData.amount,
            date: childData.date,
            type: childData.type,
            note: childData.note
          })
        })
        dispatch({
          type: GET_TRANSACTIONS,
          transactions: transactions
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};