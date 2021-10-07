<template>

  <table class="table">
  <br>

  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Title</th>
      <th scope="col">slug</th>
      <th scope="col">content</th>
      <th scope="col">gérer</th>
    </tr>
  </thead>
  <tbody  v-for="(post,index) in posts" :key='index'>
      
    <tr>
      <th scope="row">{{post.id}}</th>
      <td>{{post.title}}</td>
      <td>{{post.slug}}</td>
      <td>{{post.content}}</td>
      <td><router-link :to="'/post/' + post.id"><button type="button" class="btn btn-success">Voir</button></router-link>
      <button type="button" class="btn btn-warning mx-3">Edit</button>
      <button type="button" @click="remove(post.id)" class="btn btn-danger">Supprimer</button></td>
    </tr>
    
    
  </tbody>
</table>
</template>

<script>
import axios from 'axios'
export default {
    name:'PostsAdmin',
    data(){
        return{
            posts:[],
        }
    },
    mounted(){
        axios.get("https://127.0.0.1:8000/api/posts/admin")
      .then(data => {
          console.log(data.data['hydra:member'])
          this.posts = data.data['hydra:member']
      })
      .catch(error => {
            console.log(error)
      })
    },
    methods:{
        remove(id){
            axios.delete("https://127.0.0.1:8000/api/posts/"+id)
            .then(data => {
                console.log(data)
                 if(data.status==204){
                    this.$router.go()
                 }
                 })
        },
    }
    
}
</script>

<style>

</style>