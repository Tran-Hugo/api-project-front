<template>
  <table class="table">
  <br>

  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">gérer</th>
    </tr>
  </thead>
  <tbody  v-for="(cat,index) in categories" :key='index'>
      
    <tr>
      <th scope="row">{{cat.id}}</th>
      <td>{{cat.name}}</td>
      
      <td>
      <button type="button" class="btn btn-warning mx-3">Edit</button>
      <button type="button" class="btn btn-danger">Supprimer</button></td>
    </tr>
    
    
  </tbody>
</table>
</template>

<script>
import axios from 'axios'

export default {
    name:"CategoriesAdmin",
    data(){
        return{
            categories:[],
        }
    },
     mounted(){
        axios.get("https://127.0.0.1:8000/api/categories")
      .then(data => {
          console.log(data.data['hydra:member'])
          this.categories = data.data['hydra:member']
      })
      .catch(error => {
            console.log(error)
      })
    },
}
</script>

<style>

</style>