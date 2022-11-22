<template>
  <div class="home">
      <aside>
      </aside>
      <main>
        <product-compo-two :postList="postList"></product-compo-two>
          <div v-if="loading" class="loading">Loading..</div>
          <div v-if="error" class="error">{{ error }}</div>
          <div v-if="post" class="content"></div>
        </main>
      <aside>
      </aside>
  </div>
  <b-button @click="count=0">Reset likes</b-button>
</template>

<script>
import ProductCompoTwo from "@/components/ProductCompoTwo.vue";

export default {
name: "PostCompo",
components: {ProductCompoTwo },
data: function() {
return {
postList:[
{id: 1, profileImg: require("@/assets/profile.png"), image: require("@/assets/img1.jpg"),text: "Charlotte Bronte", date: "1 Feb 2022"},
{id: 2, profileImg: require("@/assets/profile.png"), image: require("@/assets/img2.jpg"), text: "Margaret Mitchell", date: "1 Feb 2021"},
{id: 3, profileImg: require("@/assets/profile.png"), image: require("@/assets/img3.jpg"), text: "Anthony Burgess", date: "1 Feb 2020"},
{id: 4, profileImg: require("@/assets/profile.png"), image: require("@/assets/img5.jpg"), text: "Fyodor Dostoevsky", date: "1 Feb 2019"}
]}},

methods: {
IncreasePrice: function() {
    /*
    When using the strict mode in the vuex store, we cannot mutate state outside mutation handlers.
    Therefore, using the following function will produce an error
    
    this.$store.state.postList.forEach(product => {
        product.date += 1;
        }) 
    */
},
DecreasePrice: function() {

}

}
}
</script>
<!-- Comment 
<script>

export default {
  data() {
    return {
      loading: false, 
      post: null,
      error: null,
    }
  }
}



////////////////////////////
  async function fetchPosts(){
    try {
        let promise = await fetch('https://api.npoint.io/b2488b205f84c767cd84');
        //let promise = await fetch('posts.json');
        if (!promise.ok) {
            throw new Error('Failed to fetch posts: ${promise.status}');
        }
        return await promise.json();
    } catch(error) {
        console.log(error);
    }
}

async function listsPosts() {
    let data = await fetchPosts();
    let html = '';
    
    data.Posts.forEach(post => {
        let date = new Date(post.date)
        let htmlSegment = `<div class="article">
            <img src="${post.img}"/>
            <h4>${date.toLocaleString()}</h4>
            <p>${post.body}</p>
            </div>`;
        html += htmlSegment;
    })
    const container = document.getElementsByTagName('main')[0];
    container.innerHTML = html;
}
</script>
-->
<style>
aside, main {
    float: left;
    padding: 10px 0;
}
aside {
    width: 20%;
}
main {
    width: 60%;
}
body{
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}

b-button {
    padding: 1rem 4rem;
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
  }
  b-button:hover {
    background-color: hwb(141 53% 16% / 0.758);
    transition: background-color 0.25s linear;
  }
</style>
