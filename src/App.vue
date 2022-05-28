<template>
  <nav>
    <router-link to="/">Modal List</router-link>  | 
    <router-link to="/playground">Playground</router-link> 
    
  </nav>
  <router-view/>
</template>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3F385F;
}

nav{
  background-color: #3F385F;
  padding: 20px  0px;
  text-align: center;
  color: white
}

nav a{
  color: rgb(255, 241, 241);
}

.router-link-active{
  color: #ff7792;
}


</style>
