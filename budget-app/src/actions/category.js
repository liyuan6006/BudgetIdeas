import { GET_CATEGORIES } from './categoryActionType'
import { categoriesRef } from '../firebase/firebaseApi'

export const addCategory = (newCategory) => {
  return async (dispatch) => {
    categoriesRef.push(newCategory)
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    categoriesRef.child(id).remove()
  }
}

export const getCategories = () => {
  return async (dispatch) => {
    try {
      categoriesRef.on('value', function (snapshot) {
        var categories = [];
        snapshot.forEach(childSnapshot => {
          var childData = childSnapshot.val();
          categories.push({ id: childSnapshot.key, name: childData.name, type: childData.type })
        })
        dispatch({
          type: GET_CATEGORIES,
          categories: categories
        })
      });
    }
    catch (error) {
      console.error(error)
    }
  }
};


export const update = (nodePath,newValue) => {
  return async (dispatch) =>{
    var updates = {};
    updates[nodePath] = newValue;
    categoriesRef.update(updates);
  console.log(nodePath);
  }
};