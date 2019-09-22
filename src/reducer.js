export default (state = { count: 0, operator: '', previousNumber: 0 }, action) => {
    switch (action.type) {
        case 'RESET':
            return { 
                count: 0,
                operator: '',
                previousNumber: 0
            }
        case 'WRITE_NUMBER':
            if (state.count === 0) {
                return {
                    ...state,
                    count: action.numberToWrite
                }
            }
            return {
                ...state,
                count: state.count + "" + action.numberToWrite
            }
        case 'WRITE_OPERATOR':
            return { 
                count: 0,
                operator: action.operatorToWrite,
                previousNumber: state.count
            }
        case 'EVALUATE':
            if(!state.operator) {
                return {
                    ...state,
                    count: state.count
                }
            }
            return {
                count: eval(`${state.previousNumber} ${state.operator} ${state.count}`),
                operator: '',
                previousNumber: 0
            }
        default:
            return state
    }
}