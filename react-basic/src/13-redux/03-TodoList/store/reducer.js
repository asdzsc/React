const defaultState = {
    list: []
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            console.log(action.data);
            return {
                ...state,
                list: action.data
            }
        case 'PUT_DATA':
            return {
                list: [
                    ...state.list,
                    action.task
                ]
            }
        case 'REMOVE_DATA':
            let newList = state.list.filter((v, i) => {
                return i !== action.index
            })
            return {
                ...state,
                list: newList
            }

        default:
            return state
    }

}

export default reducer