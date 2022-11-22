<template>
  <div class="home">
    <div class="posts">
      <Posts />
    </div>
    <b-button @click="count=0">Reset likes</b-button>
  </div>
</template>

<script>
  export default {
    name: "get-request",
    data() {
      return {
        totalVuePackages: null
      };
    },
    created(){
      fetch("https://api.npoint.io/b2488b205f84c767cd84")
      .then(response => response.json())
      .then(data => (this.totalVuePackages = data.total))
    }
  }
</script>

<style>
  p {
    color: #000;
  }


  b-button {
    padding: 1rem 4rem;
    text-align: center;
    border-radius: 3px;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
    background: #344cb7;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
  }
  b-button:hover {
    background-color: rgba(82, 172, 113, 0.489);
    transition: background-color 0.5s linear;
  }
</style>
