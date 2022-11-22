<template>
  <div class="container">
    <!--<layout>-->
    <header>
      <TopBar />
    </header>
      <router-view />
    <Footer />
  </div>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import SideBar from './components/SideBar.vue'
  import SideBarR from './components/SideBarR.vue'
  import FooterBar from './components/Footer.vue'
  import SignUp from './views/SignUpView.vue'

export default {
    name: 'app',
    components: {
      TopBar,
      SideBar,
      FooterBar,
      SignUp,
      SideBarR
    }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f2f2;
  height: 100vh;
}
body, html{
  margin: 0;
}
</style>
