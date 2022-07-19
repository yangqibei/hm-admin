import { login, getInfo, getUserDetailById } from '@/api/user'
import { setToken, getToken, removeToken, setTime } from '@/utils/auth'
const state = {
  token: getToken(),
  userInfo: ''
}
const mutations = {
  // token
  setToken (state, payload) {
    state.token = payload
  },
  // 用户信息
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  // 移除token
  removeToken (state) {
    state.token = null
    removeToken()
  },
  // 移除用户信息
  removeUserInfo (state) {
    state.userInfo = {}
  }
}
const actions = {
  // 登录请求
  async login (context, data) {
    const res = await login(data)
    console.log('login', res)
    context.commit('setToken', res)
    setToken(res)
    setTime(Date.now()) // 登录的时候存入当前的时间戳
  },
  // 发起获取用户信息的请求 获取数据在permission 进入路由时
  async getInfo (context) {
    const res = await getInfo()
    const res1 = await getUserDetailById(res.userId)
    console.log('用户信息', res)
    console.log('用户信息1', res1)
    context.commit('setUserInfo', { ...res, ...res1 })
  },
  // 清除token并清空用户信息
  logout (context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
