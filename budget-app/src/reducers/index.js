import { combineReducers } from 'redux';
import categories from './category';
import budgets from './budget';
import transactions from './transaction';
import income from './income'

const rootReducer = combineReducers({
    categories,
    budgets,
    transactions,
    income
})

export default rootReducer
