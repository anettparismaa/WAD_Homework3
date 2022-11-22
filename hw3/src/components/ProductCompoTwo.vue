<template>
    <div id="comp-list">
        <article v-for="post in posts" :key="post.id">
            <header><img class="profileimage" :src="post.profileImg" />
                <p class="date"> {{ post.date }} </p>
            </header>
            <div class="postImg" v-if="post.image"><img class="image" :src="post.image" /></div>
            <div class="post">
                <p class="text">{{ post.text }} </p>
            </div>
            <footer class="postFooter">
                <b-button id="like" @click="$store.commit('like', post.id)">Like</b-button>
                <p id="likes">{{ post.likes }} likes</p>
            </footer>

        </article>

    </div>
</template>
    
<script>
export default {
    name: "PostCompo",
    props: ["postList"],
    data: function () {
        return {
        }
    },
    computed: {
        posts() {
            return this.$store.state.postList
        }
    },
    data() {
        return {
            count: 0
        }

    }
}
</script>
    
<style scoped>
#comp-list {
    /*background: white;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);*/
    margin-bottom: 30px;
    padding: 10px 20px;
}

#comp-list ul {
    padding: 0;
    list-style-type: none;
}

#comp-list li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}

.date {

    font-weight: bold;
    color: hwb(141 59% 4%);
    float: right;
    margin: 0;
    font-size: large;
}

p#likes {
    display: inline;
    float: right;
    margin: 0;
}

article {
    max-width: 70%;
    margin: 0 auto;
    padding: 5em;
    background: rgb(152, 152, 152);
    ;
    margin-bottom: 5px;
    padding: 2% 5%;

}

.postImg {
    margin: 0 auto;
    max-width: 60%;
    aspect-ratio: 3/5;
    overflow: hidden;
}

.postImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profileimage {
    height: 80%;
    float: left;

}

article header * {
    display: inline-block;
}

article header,
article footer {
    height: 3em;
    width: 100%;
}

#like {
    float: left;
    padding: 0.5rem 2rem;
    text-align: center;
    border-radius: 3px;
    font-size: 8px;
    text-transform: uppercase;
    cursor: pointer;
    background: rgba(85, 85, 85, 0.502);
    border: none;
    color: #f2f2f2;
    font-weight: bold;
    letter-spacing: 1px;
}

.postFooter {
    position: relative;
    height: 2em;
    width: 100%;
}

.likeButton {
    float: left;
}

.likeButton::after {
    content: '👍 ';


}

#like:hover {
    background-color: hwb(141 53% 16% / 0.758);
    transition: background-color 0.25s linear;
}
</style>