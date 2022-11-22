<template>
  <div id=app>
    <header>
      <TopBar />
    </header>
    <main>
      <router-view />
    </main>
    <FooterBar />
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
</style>
