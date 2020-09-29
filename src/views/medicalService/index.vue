<template>
    <div class='medicalService'>
        <NavBar :title="medicalService.title"></NavBar>
        <div class='content'>
            <div 
              class='eachItem' 
              v-for='(li,index) in medicalService.list' 
              :key='index'
              :style="{background:'url('+li.img+')', backgroundSize:'100% 100%'}"
            >
                <span>{{li.name}}</span>
            </div>
        </div>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import {medicalService} from '@/assets/js/data.js'

export default{
    name:'medicalService',
    components:{ NavBar },
    data(){
        return{
            medicalService
        }
    }
}
</script>  
<style lang="scss">
.medicalService{
    .content{
        top:64px;
        padding: 0 15px;
        .eachItem{
            color:#ffffff;
            height:100px;
            line-height: 100px;
            font-size: 18px;
            text-align: left;
            padding-left:28px;
            margin-bottom: 10px;
        }
    }
}

</style>