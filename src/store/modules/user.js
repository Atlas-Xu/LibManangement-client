import { loginApi, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setUserId, getUserId, clearSession } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  // user login vuex里面的用户登录
  login({ commit }, userInfo) {
    const { username, password, userType } = userInfo
    return new Promise((resolve, reject) => {
      // api里面的user.js模块里面的login方法
      loginApi({ username: username.trim(), password: password, userType: userType }).then(response => {
        const { data } = response
        console.log('登录成功')
        console.log(data)
        // 登录返回后，把token存入vuex
        commit('SET_TOKEN', data.token)
        // 将token存入cookies
        setToken(data.token)
        setUserId(data.userId)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  // 获取用户的权限信息和自己的信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({ userId: getUserId() }).then(response => {
        console.log('获取用户权限字段')
        console.log(response)
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        // 清空tagsview里面的数据
        dispatch('tagsView/delAllViews', {}, { root: true })
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit, dispatch }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      clearSession()
      commit('RESET_STATE')
      // 清空tagsview里面的数据
      dispatch('tagsView/delAllViews', {}, { root: true })
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

