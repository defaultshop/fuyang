<template>
    <div class='healthContact'>
        <NavBar :title="healthContact.title"></NavBar>
        <!-- <div class='content'> -->
            <Model1
            :list='healthContact'
            >
                <div class='main'>
                <div v-for='(item,index) in healthContact.list' :key='index'>
                <div class="name">
                    <span>{{healthContact.title}}：{{item.name}}</span> 
                    <img :src="item.src" alt="">    
                </div>  
                <EachItem v-for='(li,index) in item.lists' :key="index" :list='li' @itemBtn='itemBtn(index)'></EachItem>
                </div>
                 </div>
            </Model1>
        <!-- </div> -->
       
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import EachItem from '@/components/eachItem.vue'
import Model1 from '@/components/model1.vue'
import {healthContact} from '@/assets/js/data.js'

export default{
    name:'healthContact',
    components:{ NavBar, Model1, EachItem },
    data(){
        return{
            healthContact
        }
    },
    methods:{
        itemBtn(index){
            this.$router.push('/healthContactDetail')
        }
    }
}
</script>  
<style lang="scss">
.healthContact{
    .content{
        top:205px;
        .main{
            padding: 0 15px;
            text-align: justify;
            line-height: 32px;
            .name{
               line-height: 50px;
               border-bottom:1px solid #EEEEEE;
               display: flex;
               justify-content: space-between;
               align-items: center;
               img{
                   height: 15px;
                   width: 15px;
               }
            }
        }
    }
}
</style>