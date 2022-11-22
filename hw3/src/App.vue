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
import Footer from './components/Footer.vue'
import SignUp from './views/SignUpView.vue'

export default {
  name: 'app',
  components: {
    TopBar,
    SideBar,
    Footer,
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
  color: #2c3e50;
  height: 100%;
  min-height: 100vh;

}

body,
html {
  min-height: 100vh;
  font-family: sans-serif;
  margin: 0;
}
.container{
  height: 100%;
  min-height: 100vh;
}
</style>
