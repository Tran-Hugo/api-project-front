<template>
<h1>Add Post</h1>
{{key}}
  <div class="d-flex justify-content-center">
  <form class="col-8">
  <div class="mb-3">
    <label class="form-label">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title">
    
  </div>
  <div class="mb-3">
    <label class="form-label">Slug</label>
    <input type="text" class="form-control" v-model="slug">
  </div>
   <div class="mb-3">
      <label class="form-label">Content</label>
  <textarea class="form-control" v-model="content"></textarea>
</div>
<label class="form-label">Catégorie</label>
<select class="form-select" aria-label="Default select example"  v-model="key">
  <option value="1">Catégories</option>
  <option v-for="(cat,index) in Categories" :key="index" :value="cat['id']">{{cat.name}}</option>
</select>
<div class="mb-3">
  <label for="formFile" class="form-label">Photo</label>
  <input class="form-control" type="file" id="formFile">
</div>
  <div class="mb-3 form-check">
  </div>
  <button type="submit" @click.prevent="addPost" class="btn btn-primary">Submit</button>
</form> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'addPost',
    data(){
        return {
            title:'',
            slug:'',
            content:'',
            Categories:[],
            key:"1" //1 parce que v-model ignore le selected et met la valeur que l'on rentre ici comme selected
        }
    },

    mounted(){
        axios.get("https://127.0.0.1:8000/api/categories")
        .then(data => {
            console.log(data.data['hydra:member'])
            this.Categories = data.data['hydra:member']
        })
    },
    methods:{
        addPost() {
            let config = {
                Headers: {
                    "Content-Type": "multipart/form-data"
                }
            };
            let files = document.querySelector('#formFile').files

            let formData = new FormData();

            formData.append('title', this.title);
            formData.append('slug', this.slug);
            formData.append('content', this.content);
            formData.append('category', this.key);
            formData.append('file', files[0]);

            console.log(formData)

            axios.post('https://127.0.0.1:8000/api/posts/new', formData, config)
                .then(res => {
                    console.log(res)
                })
        }
    },

}
</script>

<style>

</style>