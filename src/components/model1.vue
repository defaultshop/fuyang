<template>
<div class="model1">
    <div>
        <img :src="list.img" alt="" class='headerImg'>
        <div class="content">
            <div class='main' v-if='isText'>{{list.text}}</div>
        </div>
    </div>
</div>
</template> 

<script>
export default{
    name:'model1',
    props: { 
        src: { //图片
            type: String,
            default: ''
        },
        text: { //内容
            type: String,
            default: '内容'
        },
        isText:{ //是否显示
            type: Boolean,
            default: false
        },
        list:{ //数据
            type: Object,
        }
    },
}
</script>  

<style lang="scss">
.model1{
    .headerImg{
        width: 100%;
        height: 155px;
    }
    .main{
        padding: 20px 15px 0;
        text-align: justify;
        text-indent: 30px;
        line-height: 32px;
    }
}
</style>