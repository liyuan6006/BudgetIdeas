import { GET_BUDGETS } from '../actions/budgetActionType'

const budgets = (state = [], action) => {
    switch (action.type) {
        case GET_BUDGETS:
            return action.budgets
        default:
            return state
    }

}

export default budgets;