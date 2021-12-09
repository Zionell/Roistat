import Vue from 'vue'
import Vuex from 'vuex'
import {v4 as uuidv4} from 'uuid'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    users: [
      {
        id: uuidv4(),
        name: 'Марина',
        phone: '+7 941 123 21 42'
      },
      {
        id: uuidv4(),
        name: 'Пётр',
        phone: '+7 941 234 21 42'
      },
      {
        id: uuidv4(),
        name: 'Алексей',
        phone: '+7 941 567 21 42',
        children: [
          {
            id: uuidv4(),
            name: 'Иван',
            phone: '+7 941 345 21 42'
          }
        ]
      },
      {
        id: uuidv4(),
        name: 'Борис',
        phone: '+7 941 098 21 42'
      }
    ],
    selectUsers: [{id: null, name: 'Пропустить'}]
  },
  getters: {
    getUsers: state => state.users,
    getSelectUsers: state => state.selectUsers
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    setNewUser (state, payload) {
      const {user, parentUser} = payload
      state.selectUsers.push({id: user.id, name: user.name})
      const searchParent = (arr) => {
        arr.forEach((el) => {
          if (el.id === parentUser) {
            if (el.hasOwnProperty('children')) {
              el.children.push(user)
            } else {
              Vue.set(el, 'children', [user])
            }
          } else if (el.hasOwnProperty('children')) {
            return searchParent(el.children)
          }
        })
      }
      if (!parentUser) {
        return state.users.push(user)
      } else {
        searchParent(state.users)
      }
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    setInitialSelectNames (state) {
      const getDataUsers = (arr) => {
        arr.forEach(el => {
          state.selectUsers.push({id: el.id, name: el.name})
          if (el.hasOwnProperty('children')) {
            getDataUsers(el.children)
          }
        })
      }
      getDataUsers(state.users)
    }
  },
  actions: {
    fetchDataUsers ({commit}) {
      let users = localStorage.getItem('users')
      let data = JSON.parse(users)
      if (data) {
        commit('setUsers', data)
      }
    }
  }
})
