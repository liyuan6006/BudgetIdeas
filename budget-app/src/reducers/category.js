import {ADD_CATEGORY,DELETE_CATEGORY,GET_CATEGORIES} from '../actions/categoryActionType'

const categories = (state=[], action)=>{
    switch (action.type){
        case GET_CATEGORIES:
        return action.categories
        case ADD_CATEGORY:
        return [...state, {
            id:action.id,
            text:action.text,
            deleted:false
        }]
        case DELETE_CATEGORY:
        return state.map(category=>
            (category.id===action.id)
            ?{...category,deleted:!category.deleted}
            :category)
        default:
        return state
    }

}

export default categories;