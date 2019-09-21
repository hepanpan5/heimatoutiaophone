import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      // 为了防止页面刷新数据丢失，所以还需要将数据存储到本地
      setItem('user', state.user)
    }
  },
  actions: {

  }
})
