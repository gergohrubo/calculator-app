export const resetCount = () => ({
    type: 'RESET'
})

export const writeOperator = ({ operatorToWrite = '' } = {}) => ({
    type: 'WRITE_OPERATOR',
    operatorToWrite
})

export const writeNumber = ({ numberToWrite = 1 } = {}) => ({
    type: 'WRITE_NUMBER',
    numberToWrite
})

export const evaluate = () => ({
    type: 'EVALUATE'
})