<template>
  <router-link :to="{ name: 'postsAdmin'}"><button type="button" class="btn btn-primary">Posts</button></router-link>
  <br>
  <router-link :to="{ name: 'categoriesAdmin'}"><button type="button" class="btn btn-danger">Catégories</button></router-link>
  <router-view></router-view>
</template>

<script>
export default {
    name:'Dashboard'
}
</script>

<style>

</style>