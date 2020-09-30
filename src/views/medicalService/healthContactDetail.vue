<template>
    <div class='healthContactDetail'>
        <NavBar :title="healthContactDetail.title"></NavBar>
        <Model1 
          :list='healthContactDetail'>
          <div class='main'>
              <p>{{healthContactDetail.text}}</p>
              <p>
                 咨询地址：{{healthContactDetail.address}}<br>
                 工作时间：{{healthContactDetail.time}}<br>
                 咨询电话：{{healthContactDetail.tel}}
              </p>
          </div>
        </Model1>
        <Confirm :text='healthContactDetail.btnText'></Confirm>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import Model1 from '@/components/model1.vue'
import Confirm from '@/components/confirm.vue'

import {healthContactDetail} from '@/assets/js/data.js'

export default{
    name:'healthContactDetail',
    components:{ NavBar, Model1, Confirm },
    data(){
        return{
            healthContactDetail
        }
    }
}
</script>  

<style lang="scss">
.healthContactDetail{
    .content{
        top:205px;
        .main{
            padding: 20px 15px 0;
            line-height: 32px;
            text-align: justify;
            p{
                border-bottom: 1px solid #EEEEEE;
                padding: 10px 0;
            }
        }
    }
   
}
</style>