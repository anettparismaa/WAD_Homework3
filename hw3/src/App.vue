<template>
  <div id=app>
    <!--<layout>-->
    <header>
      <TopBar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
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
  height: 100vh;
}
</style>
