import { GET_SAVINGS } from '../actions/savingActionType.'

const savings = (state = [], action) => {
    switch (action.type) {
        case GET_SAVINGS:
            return action.savings
        default:
            return state
    }

}

export default savings;