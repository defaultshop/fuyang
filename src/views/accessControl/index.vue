<template>
    <div class='accessControl'>
        <NavBar :title="accessControl.title"></NavBar>
        <Model1 
          :list='accessControl'>
          <div class='main'>{{accessControl.text}}</div>
        </Model1>
        <Confirm :text='accessControl.btnText'></Confirm>
    </div>
</template> 

<script>
import NavBar from '@/components/navBar.vue'
import Model1 from '@/components/model1.vue'
import Confirm from '@/components/confirm.vue'

import {accessControl} from '@/assets/js/data.js'

export default{
    name:'accessControl',
    components:{ NavBar, Model1, Confirm },
    data(){
        return{
            accessControl
        }
    }
}
</script>  

<style lang="scss">
.accessControl{
    .content{
        top:205px;
        .main{
            padding: 20px 15px 0;
            text-align: justify;
            text-indent: 30px;
            line-height: 32px;
        }
    }
}
 
</style>