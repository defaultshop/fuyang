<template>
<div class="model1">
    <div>
        <img :src="list.img" alt="" class='headerImg'>
        <div class="content">
            <slot></slot>
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
}
</style>