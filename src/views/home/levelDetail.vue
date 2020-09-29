<template>
    <div class="fytalentsDetail">
         <van-nav-bar
            :title="title"
            left-arrow
            :border="borderBottom"
            @click-left="onClickLeft">
        </van-nav-bar>
        <div class='content'>
            <div class='main'>
              <div class='title'>富阳人才认定类别说明</div>  
              <p>F1类人才包含：博士研究生（全日制）</p>
              <p>F2类人才包含:：硕士研究生（全日制）、副高职称、高级技师</p>
              <p>F3类人才包含： 富春特支人才包含</p>
              <p>富春特支人才包含</p>
            </div>
        </div>
    <div class="button">
        <van-button   van-button type="primary" @click="confirm" block :text="text"></van-button>
    </div>
    </div>
</template>    

<script>
import Vue from 'vue';
import { NavBar, Toast} from 'vant';
import { Button } from 'vant';

Vue.use(NavBar, Toast);
Vue.use(Button);

export default {
   name: 'levelDetail',
   props: {
    title: {
      type: String,
      default: '富阳人才'
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    text:{
      type: String,
      default: '重新申请认定'
    },
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    confirm(){
      this.$emit('confirm');
    }
  }
} 
</script>
<style scoped>
.main{
    text-align: center;
}
.title{
    font-weight: 600;
    font-size: 15px;
}
.main p{
    line-height:36px;
    color:#333333;
    text-align: left;
}
.button{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style> 

<style>
  .van-nav-bar{
    height: 64px;
    line-height: 64px;
    font-size: 17px;
    color: #333333;
  }
  .van-nav-bar .van-icon{
    color: #D6AE76;
  }
  .van-nav-bar__arrow{
    font-size: 20px;
  }
  .van-button--primary{
  background: #D3AA6C;
  border: 1px solid #D3AA6C;
}
</style>