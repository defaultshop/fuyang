<template>
    <div>
        <div class='eachItem' @click='itemButton'>
            <img :src="list.img" alt="" class='leftImg'>
            <div class='rightText'>
                <p>{{list.header}}</p>
                <p v-if='isShow' class='rightTextp2'>
                   <span>{{list.tip}}</span>
                   <span> |{{list.km}}km</span>
                </p>
                <p v-else class='rightTextp3'>
                   <span>{{list.tip}}</span>
                   <img  :src="list.telIcon" alt="" class='icon'>
                </p>
            </div>
    </div>
    </div>
</template> 

<script>

export default{
    name:'eachItem',
    props:{
        src:{},
        header:{
            type:String,
            default:'标题'
        },
        tip :{
            type:String,
            default:'内容'
        },
        list:{
            type:Object,
            default:''
        },
        isShow:{
           type:Boolean,
           default:true
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        itemButton(){
            this.$emit('itemBtn')
        }
    }
}
</script>  

<style lang="scss">
.eachItem{
    border-bottom: 1px solid #EEEEEE;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    .leftImg{
        width: 90px;
        height: 90px;
    }
    .rightText{
        width: 100%;
        text-align: left;
        color: #333333;
        line-height: 21px;
        margin-left: 8px;
        p:nth-child(1){
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
       .rightTextp2{
            color:#8C8C8C;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 26px;
            display: flex;
            justify-content: start;
            align-items: baseline;
            span:first-child{
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        .rightTextp3{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span:first-child{
                overflow : hidden;
                text-overflow: ellipsis;
            }
            .icon{
                height: 15px;
                width: 15px;
            }
        }
    }
}
</style>