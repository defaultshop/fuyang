<template>
  <div class="button" v-if="isBtn">
    <van-button type="primary" @click="confirm" block :text="text"></van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  name: "confirm",
  props:{
    text:{
      type: String,
      default: '按钮'
    },
    isBtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    confirm(){
    //   this.$emit('confirm');
    }
  }
}
</script>

<style scoped lang="scss">
.button{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>

<style>
.van-button--primary{
  background: #D3AA6C;
  border:1px solid #D3AA6C;
}
</style>
