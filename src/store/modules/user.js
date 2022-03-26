import storage from 'store'
import { login, getInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    // info: JSON.parse(sessionStorage.getItem('info')  || '{}'),
    info: '{}',
    roleId: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
      // sessionStorage.setItem('info',JSON.stringify(info))
    },
    SET_ROLEID: (state, roleId) => {
      state.roleId = roleId
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.result
          console.log('login info', result.role.permissions)
          storage.set("ACCESS_TOKEN", result.token, 7 * 24 * 60 * 60 * 1000)
          // commit('SET_TOKEN', result.token)
          // commit('SET_ROLEID',result.roleId)
          // sessionstorage.setItem('userInfo',result)
          commit('SET_INFO', result)
          storage.set("INFO",result)
          // commit('SET_NAME', { name: result.name, welcome: welcome() })
          // commit('SET_AVATAR', result.avatar)
          // commit('SET_ROLES', result.role)

          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
          // console.log('get info',storage.get("INFO"))
          const result = storage.get('INFO')
          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            role.permissions = result.role.permissions
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })

            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            // console.log('permission', role.permissionList)
            commit('SET_ROLES', result.role)
            // console.log('role', user.state.roles)
            commit('SET_INFO', result)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          commit('SET_NAME', { name: result.name, welcome: welcome() })
          // console.log('role', user.state.name)
          commit('SET_AVATAR', result.avatar)
          // console.log('role', user.state.avatar)
          console.log('getinfo done!!')

          resolve(result)
        }).catch(error => {
          reject(error)
        })
      // })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          storage.remove("ACCESS_TOKEN")
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
        })
      })
    }

  }
}

export default user
