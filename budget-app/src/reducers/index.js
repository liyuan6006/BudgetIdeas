import { combineReducers } from 'redux';
import categories from './category';
import budgets from './budget';

const rootReducer = combineReducers({
    categories,
    budgets
})

export default rootReducer
