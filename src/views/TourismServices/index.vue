<template>
    <div class='TourismServices'>
        <NavBar :title="TourismServices.title"></NavBar>
        <div class='content'>
            <div class='main'>
            <div>
              <EachItem v-for='(li,index) in TourismServices.list' :key="index" :list='li' @itemBtn='itemBtn(index)'></EachItem>
            </div>
        </div>
        </div>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import EachItem from '@/components/eachItem.vue'
import Model1 from '@/components/model1.vue'
import {TourismServices} from '@/assets/js/data.js'

export default{
    name:'TourismServices',
    components:{ NavBar, Model1, EachItem },
    data(){
        return{
            TourismServices
        }
    },
    methods:{
        itemBtn(index){
            this.$router.push('/TourismServicesDetail')
        }
    }
}
</script>  
<style lang="scss">
.TourismServices{
    .content{
        top:64px;
        .main{
            padding: 0 15px;
            text-align: justify;
            line-height: 32px;
        }
    }
}
</style>