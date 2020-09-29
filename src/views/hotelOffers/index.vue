<template>
    <div>
        <NavBar :title="hotelOffers.title"></NavBar>
        <div class='content'>
            <div class='main'>
            <div>
              <EachItem v-for='(li,index) in hotelOffers.list' :key="index" :list='li'></EachItem>
            </div>
        </div>
        </div>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import EachItem from '@/components/eachItem.vue'
import Model1 from '@/components/model1.vue'
import {hotelOffers} from '@/assets/js/data.js'

export default{
    name:'hotelOffers',
    components:{ NavBar, Model1, EachItem },
    data(){
        return{
            hotelOffers
        }
    }
}
</script>  
<style lang="scss">
.content{
    top:64px;
    .main{
        padding: 0 15px;
        text-align: justify;
        line-height: 32px;
    }
}
</style>