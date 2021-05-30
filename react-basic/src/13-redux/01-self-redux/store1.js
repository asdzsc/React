// 定义一个状态
const defaultState = {
    count: 0
}

//修改状态
const changeState = (acticon) => {
    acticon = acticon || {
        type: ''
    }
    switch (acticon.type) {
        case 'increment':
            defaultState.count++
                break;
        case 'decrement':
            defaultState.count--
                break;
        default:
    }
}

// dom 操作
const renderDom = () => {
        let countEle = document.querySelector('#count')
        countEle.innerHTML = defaultState.count
    }
    // 传递type类型
const dispatch = (action) => {
    changeState(action)
    renderDom()
}

export {
    dispatch
}