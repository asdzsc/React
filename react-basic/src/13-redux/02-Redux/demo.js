const redux = require('redux')
const reducer = require('./reducer')
    // console.log(redux);
const store = redux.createStore(reducer)



// console.log(store);

// subscribe: 侦测属性的变化就触发
store.subscribe(() => {
        console.log(store.getState().count);
    })
    // 派发action 更改状态
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'increment'
})
store.dispatch({
    type: 'increment'
})