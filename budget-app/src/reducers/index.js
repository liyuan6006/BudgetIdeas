import { combineReducers } from 'redux';
import categories from './category';
import budgets from './budget';
import transactions from './transaction';
import income from './income'
import savings from './saving'
const rootReducer = combineReducers({
    categories,
    budgets,
    transactions,
    income,
    savings
})

export default rootReducer
