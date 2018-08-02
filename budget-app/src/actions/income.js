
import { GET_INCOMES } from './incomeActionType'
import { incomeRef } from '../firebase/firebaseApi'



export const addIncome = (newIncome) => {
  return async (dispatch) => {
    incomeRef.push(newIncome)
  }
}

export const getIncome = () => {
  return async (dispatch) => {
    try {
      incomeRef.on('value', function (snapshot) {
       var income=null;
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          income ={
            id: childSnapshot.key,
            amount: childData.amount,
            frequency: childData.frequency,
            needs:childData.needs,
            wants:childData.wants,
            savings:childData.savings,
          }
        });
       dispatch({
          type: GET_INCOMES,
          income: income
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};

export const updateIncome = (nodePath,newValue) => {
  return async (dispatch) =>{
    var updates = {};
    updates[nodePath] = newValue;
    incomeRef.update(updates);
  console.log(nodePath);
  }
};