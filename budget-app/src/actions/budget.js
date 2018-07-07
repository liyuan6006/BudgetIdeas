import { GET_BUDGETS } from './budgetActionType'

import { budgetsRef } from '../firebase/firebaseApi'


export const addBudget = (newBudget) => {
  return async (dispatch) => {
    budgetsRef.push(newBudget)
  }
}
export const deleteBudget = (id) => {
  return async (dispatch) => {
    budgetsRef.child(id).remove()
  }
}
export const getBudgets = () => {
  return async (dispatch) => {
    try {
      budgetsRef.on('value', function (snapshot) {
        var budgets = [];
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          budgets.push({
            id: childSnapshot.key,
            name: childData.name,
            budget: childData.budget,
            category: childData.category,
            period: childData.period
          })
        })
        dispatch({
          type: GET_BUDGETS,
          budgets: budgets
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};