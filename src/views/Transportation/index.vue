<template>
    <div class='Transportation'>
        <NavBar :title="Transportation.title"></NavBar>
        <Model1 
          :list='Transportation'>
          <div class='main'>
               <div v-for='(item,index) in Transportation.itemList' v-if="item.type.indexOf(access) != -1" :key='index' class='eachItem'>
                      <div class="itemImg">
                        <div class='firstItem'>
                          <img :src="item.icon" alt="">
                          <span>{{item.header}}</span>
                        </div>
                        <div>{{item.tip}}</div>
                      </div>
                </div>
          </div>
        </Model1>
        <Confirm :text='Transportation.btnText'></Confirm>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import Model1 from '@/components/model1.vue'
import Confirm from '@/components/confirm.vue'

import {Transportation} from '@/assets/js/data.js'

export default{
    name:'Transportation',
    components:{ NavBar, Model1, Confirm },
    data(){
        return{
            Transportation,
            access:'E'
        }
    }
}
</script>  

<style lang="scss">
.Transportation{
    .content{
       top:205px;
      .main{
        padding: 20px 15px 0;
        text-align: justify;
        .eachItem{
            border-bottom:1px solid #EEEEEE;
            height:89px;
            text-align: left;
            display: flex;
            align-items: center;
        }
        .itemImg{
            line-height:24px;
            .firstItem{
                display: flex;
                align-items: center; 
            }
            img{
             height: 23px;
             width: 23px;
             margin-right: 5px;
            }
        }
      }
    }
}
 
</style>