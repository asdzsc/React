import {
    changeState
} from './changeState'

let state = {
    count: 0
}
const createStore = () => {
    // getState 获取状态
    const getState = () => state

    // 观察者模式
    const listeners = []
        // 订阅 subscribe
    const subscribe = (listener) => listeners.push(listener)

    const dispatch = (action) => {
        state = changeState(state, action)
        console.log(state);
        // 发布 publish
        listeners.forEach(listener => listener())
            // render(state)
    }
    return {
        dispatch,
        getState,
        subscribe
    }
}

const store = createStore()

const render = (state) => {
    document.querySelector('#count').innerHTML = store.getState().count
}
store.subscribe(render)

export default store