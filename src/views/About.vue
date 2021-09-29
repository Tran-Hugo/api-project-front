<template>
  <div class="home">
    <h1>{{me}}</h1>
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
  <div v-if="(me.username != null) && (me.roles = 'ROLES_USER')">
  <h1 v-for="(item, index) in posts" :key='index'>{{item.title}}</h1>
  </div>

</template>

<script>
// @ is an alias to /src

import {mapState} from 'vuex'

// const test = axios.create({
//   timeout: 10000,
//   withCredentials: true,
//   headers: {
//     'Accept': 'application/json'}});
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      email:'',
      password:''
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
    }
  },
  mounted(){
    this.$store.dispatch('loadPosts');
    
  },
  computed: {
    ...mapState([
      'posts',
      'me',
      'token'
    ])
  }

}
</script>
