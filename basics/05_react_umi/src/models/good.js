import axios from 'axios'

function getGoods () {
    return axios.get('/api/goods')
}

export default {
    namespace: 'goods',// model的命名空间，区分多个model
    state: [],
    effects: {
        // 异步操作
        *getList (action, { call, put }) {
            let res = yield call(getGoods)
            yield put({ type: 'initGoods', payload: res.data.result })
        }
    },// 异步操作
    reducers: {// 更新状,同步操作
        initGoods (state, action) {
            return action.payload
        },
        addGood (state, action) {
            return [ ...state, { title: action.title } ]
        }
    }
}