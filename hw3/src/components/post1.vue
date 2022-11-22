<template>
    <div id="post">
        <header></header>
        <main></main>
        <footer>
            <button @click="count++"></button>
            <p>Count is: {{ count }}</p>
        </footer>
    </div>
</template>
<script>
 export default {
    name: 'post1'
 }
</script>