<template>
  <div class="home">
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
  <button type="submit" @click.prevent="createUser" class="btn btn-primary">Submit</button>
</form>
  </div>
  <div v-for="(article, key) in articles" :key="key">
    <h1>{{article.title}}</h1>
    <img :src="'https://127.0.0.1:8000/' + article.image" class="col-12" />
    <p>{{article.text}}</p>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return{
      email:'',
      password:'',
      articles:[],
    }
  },
  mounted(){
    this.test();
  },
  methods:{
    createUser(){

                this.user = {
                    "email": this.email,
                    "password": this.password
                }

                // console.log(this.user)

                axios.post('https://127.0.0.1:8000/api/users',this.user, {withCredentials:true})
                    .then(res=>{console.log(res)})

            },
    test(){
      axios.get('https://127.0.0.1:8000/api/Articles')
      .then((res)=>{
        this.articles = res.data;
      })
    }
  }

}
</script>
