<template>
    <div>
        <NavBar :title="venuevBooking.title"></NavBar>
        <Model1 
          :list='venuevBooking'>
          <div class='main'>
              <Tabs :tabList='venuevBooking'>
                  <div slot='tab1'>
                      {{venuevBooking.tab1}}
                  </div>
                  <div slot='tab2'>
                      <div>
                          <div class='eachItem' v-for='(li,index) in venuevBooking.tab2' :key='index'>
                             <span>{{li.header}}</span>
                             <img :src="li.telIcon" alt="" class="telicon">
                          </div>
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

import {venuevBooking} from '@/assets/js/data.js'

export default{
    name:'venuevBooking',
    components:{ NavBar, Model1,Tabs,EachItem },
    data(){
        return{
            venuevBooking
        }
    }
}
</script>  

<style lang="scss">
.content{
    top:205px;
    .main{
            padding: 10px 15px 0;
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
            .eachItem{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .telicon{
                    width: 15px;
                    height: 15px;
                }
            }
        }
}

</style>