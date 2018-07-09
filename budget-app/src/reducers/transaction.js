import { GET_TRANSACTIONS } from '../actions/transactionActionType'

const transactions = (state = [], action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return action.transactions
        default:
            return state
    }

}

export default transactions;