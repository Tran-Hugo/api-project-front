import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    posts: [],
    me:[],
    token: localStorage.getItem('token'),
  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    SET_ME(state, me){
      state.me = me
    },
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
                      console.log(res.data.data['roles'][0]);
                      let me = res.data.token;  
                      localStorage.setItem( 'token',res.data.token );
                      this.state.token = localStorage.getItem('token');
                      commit('SET_ME',me);
                      })
    },
    logout(){
      localStorage.removeItem('token')
      this.state.token = null
    },
    test(){
      let config = {
        headers:{
          Authorization: 'Bearer ' + this.state.token
      }
      }
      console.log()
      axios.get('https://127.0.0.1:8000/api/me', config)
          .then(res=>{console.log(res)})
    }
  },
  modules: {
  }
})
