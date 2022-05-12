<template>
<div>
<nav class="nav">
   
    <router-link to="/" class="nav-link">Home</router-link>
       
    <router-link to="/posts" class="nav-link">Posts</router-link>
        
    <router-link to="/createposts" class="nav-link">Create Posts</router-link>
      
</nav>
        


</div>
   
</template>

<script>
export default {

}
</script>

<style scoped>
a.active{
    background:black;
    color:white
}
</style>