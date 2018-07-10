import { GET_INCOMES } from '../actions/incomeActionType'

const incomes = (state = [], action) => {
    switch (action.type) {
        case GET_INCOMES:
            return action.incomes
        default:
            return state
    }

}

export default incomes;