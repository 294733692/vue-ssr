<template>
    <div class="wrapper">
        <div class="comtent-1">{{value}}</div>
        <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "home"
    };
  },
  // 接收stote数据，返回并执行getMsg函数
  serverRequest(store) {
    return store.dispatch("getMsg");
  },
  // 不建议使用这种方法
  // created() {
  //   this.$store.dispatch("getMsg");
  //   console.log(this.$store.state.msg);
  // },
  computed: {
    msg() {
      return this.$store.state.msg;
    }
  }
};
</script>
