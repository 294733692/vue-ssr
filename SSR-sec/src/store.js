import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// 对外暴露一个createStore方法
export default function createStore() {
    // 返回一个Store对象
    return new Vuex.Store({
        state: {
            msg: 'now you see me'
        },
        mutations: {
            setMsg(state, msg) {
                state.msg = msg
            }
        },
        actions: {
            getMsg({ commit }) {
                // res.data 的值给 setMsg
               return axios.get('http://localhost:3000/api/getMsg').then(res => commit('setMsg', res.data))
            }
        }
    })
}