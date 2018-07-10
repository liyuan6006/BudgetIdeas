import { combineReducers } from 'redux';
import categories from './category';
import budgets from './budget';
import transactions from './transaction';
import incomes from './income'

const rootReducer = combineReducers({
    categories,
    budgets,
    transactions,
    incomes
})

export default rootReducer
