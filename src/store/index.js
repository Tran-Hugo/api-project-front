import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    posts: [],
    me:[]
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    SET_ME(state, me){
      state.me = me
    }
  },
  actions: {
    loadPosts ({commit}){
      axios.get("https://127.0.0.1:8000/api/posts")
          .then(data => {
            console.log(data.data['hydra:member'])
            let posts = data.data['hydra:member']
            commit('SET_POSTS', posts)
          })
          .catch(error => {
            console.log(error)
          })
    },
    connexion({commit},user){
      axios.post('https://127.0.0.1:8000/api/login',user, {withCredentials:true})
                    .then(res=>{
                      console.log(res.data);
                      let me = res.data;
                      commit('SET_ME',me);
                      })
    },
    logout({commit}){
      axios.post('https://127.0.0.1:8000/api/logout', {withCredentials:true})
            .then(res=>{
              console.log(res);
              let me = [];
              me.length= 0;
              commit('SET_ME',me)
            })
    }
  },
  modules: {
  }
})
