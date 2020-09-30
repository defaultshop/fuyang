<template>
<div class='tab'>
    <van-tabs v-model="active" sticky title-active-color='#D3AA6C'>
        <van-tab :title="tabList.tabName[0]">
            <slot name='tab1'></slot>
        </van-tab>
        <van-tab :title="tabList.tabName[1]">
            <slot name='tab2'></slot>
        </van-tab>
    </van-tabs>
</div>
</template>    
<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

export default {
    name:'tabs',
    props:{
        tabList:{
          type: Object,
        }
    },
    data(){
        return{
           active: '0' 
        }
    }
}
</script>     

<style lang='scss'>
.tab{
    .van-tabs__line{
        background-color:#D3AA6C;
    }
}

</style>