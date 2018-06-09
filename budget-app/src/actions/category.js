import {ADD_CATEGORY,DELETE_CATEGORY} from './categoryActionType'

let nextCategoryId=0;
  export const addCategory = (text)=>({
    type: ADD_CATEGORY,
    id: nextCategoryId++,
    text
  });

  export const deleteCategory = (id)=>({
      type:DELETE_CATEGORY,
      id
  });