import { combineReducers } from 'redux';
import categories from './category';
import budgets from './budget';
import transactions from './transaction';

const rootReducer = combineReducers({
    categories,
    budgets,
    transactions
})

export default rootReducer
