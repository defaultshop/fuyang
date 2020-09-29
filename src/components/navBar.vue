<template>
  <div>
    <van-nav-bar
        :title="title"
        left-arrow
        :border="borderBottom"
        @click-left="onClickLeft">
    <template #right>
        <span v-show="false" @click="onClickRight">按钮</span>
    </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Toast} from 'vant';
Vue.use(NavBar, Toast);

export default {
  name: "navBar",
  props: {
    title: {
      type: String,
      default: '标题'
    },
    borderBottom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      // Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style scoped>

</style>

<style>
  .van-nav-bar{
    height: 64px;
    line-height: 64px;
    font-size: 17px;
    color: #333333;
  }
  .van-nav-bar .van-icon{
    color: #D3AA6C;
  }
  .van-nav-bar__arrow{
    font-size: 20px;
  }
</style>
