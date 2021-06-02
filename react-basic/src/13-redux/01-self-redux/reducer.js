//纯函数 修改状态
// 1.相同的入参 得到相同的输出
// 2.不能修改入参
// 
const reducer = (state, acticon) => {
    acticon = acticon || {
        type: ''
    }
    switch (acticon.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

export {
    reducer,
}