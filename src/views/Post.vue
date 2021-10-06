<template>
  <h1>Post {{this.$route.params.id}}</h1>
  <img :src="this.domain+Post.fileUrl">
  {{Post.title}}
</template>

<script>
import axios from 'axios'
export default {
name:'Post',
data(){
    return {
        domain:"https://127.0.0.1:8000",
        Post:[],
        id:this.$route.params.id,
    }
},
mounted(){
    axios.get("https://127.0.0.1:8000/api/posts/"+this.id)
        .then(data => {
            console.log(data.data)
            this.Post = data.data
        })
},
watch: {
    id: function(){
        axios.get("https://127.0.0.1:8000/api/posts/"+this.id)
        .then(data => {
            console.log(data.data)
            this.Post = data.data
        })
    }
}
}
</script>

<style>

</style>