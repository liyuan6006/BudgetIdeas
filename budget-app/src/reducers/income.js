import { GET_INCOMES } from '../actions/incomeActionType'

const income = (state = [], action) => {
    switch (action.type) {
        case GET_INCOMES:
            return action.income
        default:
            return state
    }

}

export default income;