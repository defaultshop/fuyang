<template>
    <div>
        <NavBar :title="hotelOffersDetail.title"></NavBar>
        <Model1 
          :list='hotelOffersDetail'>
          <div class='main'>
              <Tabs :tabList='hotelOffersDetail'>
                  <div slot='tab1'>
                      {{hotelOffersDetail.tab1}}
                  </div>
                  <div slot='tab2'>
                      <div>
                          <div class='tab2title'>
                            <img :src="hotelOffersDetail.tab2[0].hotelIcon" alt="" class='icon'>
                            <span>{{hotelOffersDetail.tab2[0].title}}</span>
                          </div>
                          <div>
                              {{hotelOffersDetail.tab2[0].address}}
                          </div>
                          <div>
                              {{hotelOffersDetail.tab2[0].tel}}
                          </div>
                      </div>

                       <div>
                          <div class='tab2title'>
                            <img :src="hotelOffersDetail.tab2[1].hotelIcon" alt="" class='icon'>
                            <span>{{hotelOffersDetail.tab2[1].title}}</span>
                          </div>
                          <div>
                              {{hotelOffersDetail.tab2[1].text}}
                          </div>
                          <div>
                             <img :src="hotelOffersDetail.tab2[1].img" alt="" class='tabView'>
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


import {hotelOffersDetail} from '@/assets/js/data.js'

export default{
    name:'hotelOffersDetail',
    components:{ NavBar, Model1,Tabs },
    data(){
        return{
            hotelOffersDetail
        }
    }
}
</script>  

<style lang="scss">
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
        
    }
</style>