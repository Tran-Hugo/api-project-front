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
                      console.log(res.data.data);
                      let me = res.data.token;
                      localStorage.setItem( 'token',res.data.token );
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
    },
    test(){
      // let config = {
      //   headers:{
      //     Authorization: 'Bearer ' + this.state.token
      // }
      // }
      console.log()
      axios.get('https://127.0.0.1:8000/api/me')
          .then(res=>{console.log(res)})
    }
  },
  modules: {
  }
})
