
import { GET_INCOMES } from './incomeActionType'
import { incomesRef,updateIncome } from '../firebase/firebaseApi'

import firebase from '../firebase/firebaseConfig'

export const addIncome = (newIncome) => {
  return async (dispatch) => {
    incomesRef.push(newIncome)
  }
}

export const getIncomes = () => {
  return async (dispatch) => {
    try {
      incomesRef.on('value', function (snapshot) {
       var incomes=null;
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          incomes ={
            id: childSnapshot.key,
            amount: childData.amount,
            period: childData.period
          }
        })
        dispatch({
          type: GET_INCOMES,
          incomes: incomes
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};

export const update = (incomeId,newIncome) => {
  return async (dispatch) => {
    updateIncome(incomeId,newIncome);
  }
};