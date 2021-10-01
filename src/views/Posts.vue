<template>
  <h1>Liste des posts</h1>
  <div v-for="(item, index) in posts" :key='index'>
  <h1>{{item.title}}</h1>
  <button type="button" class="btn btn-warning"><router-link :to="'/post/' + item.id">{{item.slug}}</router-link></button>
  </div>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Première</a></li>
    <div v-if="previousPageNum">
    <li class="page-item"><router-link class="page-link" :to="'/posts/' + this.previousP" @click.prevent="previousPage">{{previousPageNum}}</router-link></li>
    </div>
    <div v-if="nextPageNum">
    <li class="page-item page-link">{{nextPageNum-1}}</li>
    </div>
    <div v-else>
    <li class="page-item page-link">{{parseInt(previousPageNum)+1}}</li>
    </div>
    <div v-if="nextPageNum">
    <li class="page-item"><router-link class="page-link" :to="'/posts/' + this.nextP" @click.prevent="nextPage">{{nextPageNum}}</router-link></li>
    </div>
    <li class="page-item"><a class="page-link" href="#">Dernière</a></li>
  </ul>
</nav>
</template>

<script>
import axios from 'axios'
export default {
name:'Posts',
data(){
    return {
      page:this.$route.params.id ? "?page=" + this.$route.params.id : "/",
      nextP: parseInt(this.$route.params.id)+1,
      previousP: parseInt(this.$route.params.id)-1,
      posts:[],
      pagination:null,
      nextPageNum:null,
      previousPageNum:null,
    }
},
watch:{
    $route(){
        this.page = "?page=" + this.$route.params.id
        this.nextP = parseInt(this.$route.params.id)+1
        this.previousP = parseInt(this.$route.params.id)-1
    }
},
methods:{
    setPage(data){
            this.posts = data.data['hydra:member']
            this.pagination = data.data['hydra:view']   
            this.previousPageNum = this.pagination['hydra:previous'] ? this.pagination['hydra:previous'].slice(16): null
            this.nextPageNum = this.pagination['hydra:next'] ? this.pagination['hydra:next'].slice(16): null
    },
    previousPage(){
      axios.get("https://127.0.0.1:8000" + this.pagination['hydra:previous'])
          .then(data=>{
            this.setPage(data)
          })
    },
    nextPage(){
      axios.get("https://127.0.0.1:8000" + this.pagination['hydra:next'])
          .then(data=>{
            this.setPage(data)
          })
    }
},
mounted(){
    
  axios.get("https://127.0.0.1:8000/api/posts"+ this.page)
      .then(data => {
      console.log(data.data['hydra:member'])
      this.setPage(data)
      })
      .catch(error => {
            console.log(error)
      })
    },
}
</script>

<style>

</style>