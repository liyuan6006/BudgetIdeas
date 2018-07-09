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
            name: childData.name,
            amount: childData.amount,
            category: childData.category,
            date:childData.date,
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