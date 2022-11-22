<!--<template>
  <div id=app>
    <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    </header>
  <router-view/>
  </div>
</template>
-->
<template>
  <!--<layout>-->
    <div id=app>

      <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    
    </header>

    <div slot="header">
      <top-bar></top-bar>
    </div>
    <div slot="nav" class="vbox h-100">
      <side-bar></side-bar>
    </div>
    <div slot="footer">
      vue-layout
    </div>
  
  

  <router-view/>

  </div>
  <!--
    <div slot="header">
      <top-bar></top-bar>
    </div>
    <div slot="nav" class="vbox h-100">
      <side-bar></side-bar>
    </div>
    <div slot="footer">
      vue-layout
    </div>
    <div slot="article">
      <router-view></router-view>
    </div>-->
  <!--</layout>-->
</template>

<script>
  import './styles/style.scss'
  import Layout from './components/Layout.vue'
  import TopBar from './components/TopBar.vue'
  import SideBar from './components/SideBar.vue'
export default {
    name: 'app',
    components: {
      Layout,
      TopBar,
      SideBar
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
