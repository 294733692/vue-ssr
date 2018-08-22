<template>
    <div class="wrapper">
        <input type="text" v-model="msg">
        <br/>
        <span>{{msg}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'this is test'
        }
    }
}
</script>
