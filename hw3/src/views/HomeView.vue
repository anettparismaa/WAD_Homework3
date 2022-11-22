<template>
  <div class="home">
    <div class="row">
            <div class="column left">
            </div>
            <div class="column middle">
                <div id="posts">
                    <div v-if="loading" class="loading">Loading..</div>
                    
                    <div v-if="error" class="error">{{ error }}</div>

                    <div v-if="post" class="content">

                    </div>
                </div>
            </div>
            
            <div class="column right">
            </div>
        </div>
  </div>
</template>
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
    const container = document.getElementById('posts');
    container.innerHTML = html;
}
</script>
<style>
</style>
