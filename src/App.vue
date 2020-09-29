<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>

    <div class="commonLoading" v-show="this.$store.state.loading">
      <van-loading type="spinner" color="#fff" />
    </div>

  </div>
</template>

<script>
import config from '@/config'

export default {
  data () {
    return {
      baseUrl: config.httpUrl
    }
  },

  created () {
    // this.setToken()
  },

  methods: {
    getAppToken () {
      // 判断是否有token
      let that = this;
      return new Promise((resolve, reject) => {
        if (navigator.userAgent.indexOf('smk') > -1) {
          window.yl.call('getAccessToken', {}, {
            onSuccess: function (a) {
              resolve(a.param.accessToken)
            },
            onFail: function (a) {
              reject(a)
              alert('获取用户信息失败,请升级市民卡APP版本')
            }
          })

        } else {
          if (this.getUrl('accessToken') || sessionStorage.getItem('token')) {
            resolve(this.getUrl('accessToken') || sessionStorage.getItem)
          } else {
            window.location.href = `${that.baseUrl}/exthtml/smk-h5/html/login.html?url=${encodeURIComponent(location.href)}`
          }
        }
      })
    },

    async setToken () {
      let token = await this.getAppToken()
      console.log('这是token' + token)
      if (token) {
        sessionStorage.setItem('token', token)
      } else {
        window.location.href = `${that.baseUrl}/exthtml/smk-h5/html/login.html?url=${encodeURIComponent(location.href)}`
      }
    },

    getUrl (str) {
      let url = window.location.href.split('?')[1]
      if (typeof (url) !== 'undefined') {
        let items = url.split('&')
          for (var i = 0; i < items.length; i++) {
          if (items[i].split('=')[0] === str && items[i].split('=')[1]) {
            return items[i].split('=')[1]
          }
        }
      }
    }
  }
}
</script>


<style lang="scss">
@import '@/assets/css/base.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.commonLoading{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1111;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
