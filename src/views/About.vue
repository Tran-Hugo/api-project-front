<template>
  <div class="home">
    <h1>{{token}}</h1>
    <img alt="Vue logo" class="" src="../assets/logo.png">
    <div class="container">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" @click.prevent="connectUser" class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>
  <button @click="test">TEST</button>
  <button @click="logout">logout</button>
  <br>

  <!-- </div> -->

</template>

<script>
// @ is an alias to /src

import {mapState} from 'vuex'
// import axios from 'axios'

// const test = axios.create({
//   timeout: 10000,
//   withCredentials: true,
//   headers: {
//     'Accept': 'application/json'}});
export default {
  name: 'Home',
  data(){
    return{
      email:'',
      password:'',
      
    }
  },

  methods:{
    connectUser(){

                this.user = {
                    "username": this.email,
                    "password": this.password
                }

                // console.log(this.user)

                this.$store.dispatch('connexion',this.user)

            },
    test(){
      this.$store.dispatch('test');
    },
    
    logout(){
        this.$store.dispatch('logout');
    },
  //   setPage(data){
  //           this.posts = data.data['hydra:member']
  //           this.pagination = data.data['hydra:view']   
  //           this.previousPageNum = this.pagination['hydra:previous'] ? this.pagination['hydra:previous'].slice(16): null
  //           this.nextPageNum = this.pagination['hydra:next'] ? this.pagination['hydra:next'].slice(16): null
  //   },
  //   previousPage(){
  //     axios.get("https://127.0.0.1:8000" + this.pagination['hydra:previous'])
  //         .then(data=>{
  //           this.setPage(data)
  //         })
  //   },
  //   nextPage(){
  //     axios.get("https://127.0.0.1:8000" + this.pagination['hydra:next'])
  //         .then(data=>{
  //           this.setPage(data)
  //         })
  //   }
  // },
  // mounted(){
    
  //     axios.get("https://127.0.0.1:8000/api/posts")
  //         .then(data => {
  //         this.setPage(data)

  //         })
  //         .catch(error => {
  //           console.log(error)
  //         })
    },
    
  
  computed: {
    ...mapState([
      'role',
      'me',
      'token'
    ])
  }

}
</script>
