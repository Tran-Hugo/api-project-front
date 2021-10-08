import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'


export default createStore({
  state: {
    posts: [],
    me:"",
    token: localStorage.getItem('token'),
    role:[]
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    SET_ME(state, me){
      state.me = me
    },
    SET_ROLE(state,role){
      state.role = role
    },
    RESET_ROLE(state,role){
      state.role = role
    }
  },
  actions: {
    
    connexion({commit},user){
      let config = {
        Headers: {
            'Content-type': 'application/json'
        }
    };
      axios.post('https://127.0.0.1:8000/api/login',user, config)
                    .then(res=>{
                      console.log(res.data);
                      let me = res.data.data['roles'][0];  
                      localStorage.setItem( 'token',res.data.token );
                      this.state.token = localStorage.getItem('token');
                      commit('SET_ROLE',me);
                      })
    },
    logout({commit}){
      localStorage.removeItem('token')
      this.state.token = null
      let role = []
      commit('RESET_ROLE',role)
    },
    test({commit}){
      let config = {
        headers:{
          Authorization: 'Bearer ' + this.state.token
      }
      }
      console.log()
      axios.get('https://127.0.0.1:8000/api/me', config)
          .then(res=>{
            console.log(res.data.roles)
            let role = res.data.roles[0]  
            commit('SET_ROLE',role)
          })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
