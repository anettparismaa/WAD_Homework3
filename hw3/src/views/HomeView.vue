<template>
  <div class="home">

    <aside>
    </aside>
    <main>
      <product-compo-two :postList="postList"></product-compo-two>
      <div v-if="loading" class="loading">Loading..</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="post" class="content"></div>
      <b-button class="reset" @click="$store.commit('reset')">Reset likes</b-button>
    </main>
    <aside>
    </aside>

  </div>
</template>

<script>
import ProductCompoTwo from "@/components/Posts.vue";

export default {
  name: "PostCompo",
  components: { ProductCompoTwo },
  data: function () {
  },


  methods: {
  }
}
</script>


<style>
aside,
main {
  float: left;
  padding: 10px 0;
}

aside {
  width: 20%;
}

main {
  width: 60%;
}

b-button.reset{
  display: block;
  width: fit-content;
  margin: 0 auto;

}


b-button {
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 3px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  background: rgba(85, 85, 85, 0.502);
  border: none;
  color: #f2f2f2;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 4vh;
  box-sizing: border-box;
}

b-button:hover {

  background-color: hwb(141 53% 16% / 0.758);
  transition: background-color 0.25s linear;
}

.home {
  display: flex;
  min-height: 85.5vh;
}
</style>
