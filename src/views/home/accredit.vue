<template>
  <div class="accredit-warp">
    <div class="accredit-box">
      <div class="accredit-statement">正在进入人才码服务。为您提供更好的权益，我们需要查询您的身份、社保等信息</div>
      <div class="accredit-content">
        <div class="radio-box">
          <img src="@/assets/imgs/sq.png" alt="">
        </div>
        <div class="accredit-deal" @click="deal">《用户信息授权协议》</div>
      </div>
      <div class="accredit-btn">
        <div class="btns">
          <div @click="cancel" class="btn btn-active">取消</div>
          <div @click="confirm" class="btn">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { RadioGroup, Radio } from 'vant'
import ajax from '@/api/lib/ajax'

Vue.use(Radio)
Vue.use(RadioGroup)

export default {

  data () {
    return {
      radio: '1',
    }
  },

  methods: {
    cancel () {
      window.yl.call("closeWebview")
    },

    deal () {
      this.$router.replace('/agree')
    },

    confirm () {
      ajax(baseUrl1 + 'smk_hztalent_stu/front/app/home/doUserAuth', {
        accessToken: sessionStorage.getItem('token')
      }).then(res => {
        if(res.response == '成功'){
          this.$router.push('/')
        }
      })
    }
  }

}
</script>

<style scoped>

.accredit-warp {
  height: 100%;
  background:rgba(0,0,0,0.3);
  overflow: hidden;
}

.accredit-box {
  width: 315px;
  margin: 0 auto;
  margin-top: 151px;
  background: #ffffff;
  border-radius: 8px;
  padding: 25px 0px 0px;
  overflow: hidden;
}

.accredit-statement {
  padding: 0px 15px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  line-height: 28px;
  height: auto;
}

.accredit-content {
  padding: 0px 15px;
  margin-top: 7px;
  color: #1677FF;
  font-size: 13px;
  font-weight:400;
  line-height: 18px;
}

.radio-box {
  display: inline-block;
  width: 18px;
  height: 18px;
}

.radio-box img{
  display: block;
  width: 100%;
}

.accredit-deal {
  margin-left: 4px;
  vertical-align: top;
  display: inline-block;
}

.accredit-btn {
  position: relative;
  margin-top: 21px;
  height: 50px;
  line-height: 50px;
}

.accredit-btn::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: #E1E1E1;
}

.accredit-btn::before {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  background: #E1E1E1;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}

.btns {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 15px;
  font-weight:400;
  color: #1677FF;
  justify-content: space-between;
}

.btn {
  flex: 1;
  text-align: center;
}

.btn-active{
  color: #999;
}



</style>
