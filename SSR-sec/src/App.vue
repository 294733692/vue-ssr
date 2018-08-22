<template>
    <div class="content" id="app">
        MY FIRST SSR DEMO
        <router-link to='/'>home</router-link>
        <router-link to='/about'>about</router-link>
        <router-link to='/test'>test</router-link>
        <router-view></router-view>
    </div>
</template>
 
<script>
export default {};
</script>

<style scoped>
.content {
  color: red;
}
</style>

