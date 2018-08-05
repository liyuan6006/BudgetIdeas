import { GET_SAVINGS } from './savingActionType.'

import { savingRef } from '../firebase/firebaseApi'


export const addSaving = (newSaving) => {
  return async (dispatch) => {
    savingRef.push(newSaving)
  }
}

export const getSavings = () => {
  return async (dispatch) => {
    try {
        savingRef.on('value', function (snapshot) {
        var savings = [];
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          savings.push({
            id: childSnapshot.key,
            amount: childData.amount,
            category: childData.category,
            date:childData.date,
            note: childData.note
          })
        })
        dispatch({
          type: GET_SAVINGS,
          savings: savings
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};