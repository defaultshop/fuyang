<template>
    <div>
        <NavBar :title="medicalAppointment.title"></NavBar>
        <Model1 
          :list='medicalAppointment'>
          <div class='main'>
              <Tabs :tabList='medicalAppointment'>
                  <div slot='tab1'>
                      {{medicalAppointment.tab1}}
                  </div>
                  <div slot='tab2'>
                      <div>
                        <EachItem v-for='(li,index) in medicalAppointment.tab2' :key="index" :isShow='false' :list='li'></EachItem>
                      </div>
                  </div>
              </Tabs>
          </div>
        </Model1>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import Model1 from '@/components/model1.vue'
import Tabs from '@/components/tabs.vue'
import EachItem from '@/components/eachItem.vue'

import {medicalAppointment} from '@/assets/js/data.js'

export default{
    name:'medicalAppointment',
    components:{ NavBar, Model1,Tabs,EachItem },
    data(){
        return{
            medicalAppointment
        }
    }
}
</script>  

<style lang="scss">
.content{
    top:205px;
    .main{
            padding: 10px 0;
            text-align: justify;
            line-height: 32px;
            .tab2title{
                line-height: 32px;
                color:#333333;
                display: flex;
                justify-items: center;
                align-items: center;
            .icon{
                height:16px;
                width: 16px;
                margin-right: 10px;
            }
            }
            .tabView{
                height: 192px;
                width: 100%;
            }
            
        }
}

</style>