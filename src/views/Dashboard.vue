<template>
  <router-link :to="{ name: 'postsAdmin'}"><button type="button" class="btn btn-primary">Posts</button></router-link>
  <br>
  <button type="button" class="btn btn-danger">Catégories</button>
</template>

<script>
export default {
    name:'Dashboard'
}
</script>

<style>

</style>