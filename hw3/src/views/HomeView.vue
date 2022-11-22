<template>
  <div class="home">
      <aside>
      </aside>
      <main>
        <product-compo-two :productList="productList"></product-compo-two>
          <div v-if="loading" class="loading">Loading..</div>
          <div v-if="error" class="error">{{ error }}</div>
          <div v-if="post" class="content"></div>
        </main>
      <aside>
      </aside>
  </div>
</template>

<script>
import ProductCompoTwo from "@/components/ProductCompoTwo.vue";

export default {
name: "Products",
components: {ProductCompoTwo },
data: function() {
return {
productList:[
{id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
{id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
{id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
{id: 4, author: "Fyodor Dostoevsky" , book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
]}},

methods: {
IncreasePrice: function() {
    /*
    When using the strict mode in the vuex store, we cannot mutate state outside mutation handlers.
    Therefore, using the following function will produce an error
    
    this.$store.state.productList.forEach(product => {
        product.price += 1;
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
</style>
