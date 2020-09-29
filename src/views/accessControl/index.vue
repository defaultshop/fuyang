<template>
    <div>
        <NavBar :title="accessControl.title"></NavBar>
        <Model1 
          :isText='true'  
          :list='accessControl'>
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