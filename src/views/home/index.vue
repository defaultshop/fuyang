 <template>
  <div class="wrap indexWrap">
    <div class="centerImg mt1" v-if="isloading">
      <!-- <img src="@/assets/imgs/running.png" alt="" class="smallI">
      -->
      <img src="@/assets/imgs/audit.png" alt class="smallIs" />
      <p>正在获取您的专属服务，请稍等</p>
    </div>
    <div v-else>
      <!-- 卡面区 -->
      <div class="cardTop">
        <div :class="'cardbg cardType'+cardType">
          <div class='level' @click='levelDetail'>
           <span class="levelKind">{{cardType}}类</span>  
          </div> 
          <div class="headImg">
            <img class v-if="imgUrl" :src="imgUrl" alt />
            <img class v-else src="@/assets/imgs/headImg.png" />
            <input
              type="file"
              class="imgInput"
              id="uploads"
              ref="upup"
              accept="image/*"
              @change="choosePhotoFun($event)"
            />
            <!-- <a href="javascript:;"  class="icon-addImg" @click="btnAddHeader"></a> -->
          </div>
          <div class="cc">
            <p class="name">{{name}}</p>
            <p class="cname">证件号</p>
            <p class="bankNo">{{idcard}}</p>
          </div>
        </div>
        <s class="smm"></s>
        <div class="showCode" @click="showtwoCode"></div>
        <!-- 切换中英文 -->
        <!-- <p class="language" @click="showLanguage">
				<span v-if="language == 'english'">English</span>
				<span v-else>中文</span>
				<s class="icon-down"></s>
        </p>-->
      </div>

      <!-- 展台区 -->
      <div class="platForm">
        <!-- <p class="title2" >前端测试标题</p>
				<div class="nav-list" >
					<div  class="nav-item" @click="buryingAlinkss({redirectUrl:'benefits',serveType:'1'},index)" >
							<img src="https://cdnweb03.96225.com/storage/center/icon/58e241d8f34642bc97f440c84e162e0f.png">
							<div class="name" v-if="language=='english'">英语</div>
							<div class="name" v-else>中文</div>
					</div>
					<div  class="nav-item" @click="buryingAlinkss({redirectUrl:'smkapp://scanCodeRide'},index)" >
							<img src="https://cdnweb03.96225.com/storage/center/icon/58e241d8f34642bc97f440c84e162e0f.png">
							<div class="name" v-if="language=='english'">英语</div>
							<div class="name" v-else>中文</div>
					</div>
					<div  class="nav-item" @click="buryingAlinkss({redirectUrl:'http://115.236.162.166:18081/exthtml/newBusiness/checkHealthCard/index.html'},index)">
							<img src="https://cdnweb03.96225.com/storage/center/icon/58e241d8f34642bc97f440c84e162e0f.png">
							<div class="name" v-if="language=='english'">英语</div>
							<div class="name" v-else>中文</div>
					</div>
        </div>-->

        <template v-for="(platDate1,index1) in userserve">
          <p class="title2"
            v-if="platDate1.serveModel && language=='chinese'"
          >{{platDate1.serveModel}}</p>
          <p
            class="title2"
            v-if="platDate1.serveModelEng && language=='english' "
          >{{platDate1.serveModelEng}}</p>
          <div class="nav-list" v-if="platDate1.serveModel ">
            <div
              class="nav-item"
              @click="buryingAlinkss(item,index)"
              v-for="(item,index) in platDate1.serveList"
              :key="index"
            >
              <img :src="item.icon" v-if="item.icon" />
              <div class="name" v-if="language=='english'">{{item.serveNameEng}}</div>
              <div class="name" v-else>{{item.serveName}}</div>
            </div>
          </div>
        </template>
      </div>

      <!-- banner轮播 -->
      <!-- <div class="swipeBanner">
				<mt-swipe :auto="4000">
					<template  v-for="(item,index) in recommendImgDate">
						<mt-swipe-item  v-if="item.datas && item.datas[0]"  :key="index">
								<a class="item" :href="item.datas[0].dataUrl"  v-on:click="clickMaidian(item.datas[0].dataCode)">
									<img class="Img" :src="item.datas[0].mouldKeys.imgUrl">
								</a>
						</mt-swipe-item>
					</template>
				</mt-swipe>
      </div>-->

      <!-- 遮罩 -->
      <div class="mask" v-if="mask" @click="closeMask"></div>
      <!-- 弹窗 -->

      <!-- 图片裁切模块 -->
      <div class="photoCut" v-if="showPhotoCut">
        <div class="topbar">
          <span class="btnBack" @click="photoBack">返回</span>
          <span class="btnFinish" @click="finish">完成</span>
        </div>
        <vueCropper
          class="vue-cropper"
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :can-move-box="option.canMoveBox"
          :fixed-box="option.fixedBox"
          :auto-crop="option.autoCrop"
          :auto-crop-width="option.autoCropWidth"
          :auto-crop-height="option.autoCropHeight"
          :center-box="option.centerBox"
          mode="cover"
        ></vueCropper>
        <!-- <span class="rotatePhoto" @click="rotateLeft">旋转</span> -->
      </div>

      <!-- 出二维码弹窗 -->
      <div class="pop-twoCode animated" :class="hideUpClass?'a-fadeoutT':''" v-show="twoCode">
        <span class="btn-close" @click="closetwoCode"></span>

        <p class="tt" v-if="language == 'english'">Hangzhou talent code</p>
        <p class="tt" v-else>富阳人才码</p>
        <div class="codeImg" ref="qrCodeUrl" id="codeImg"></div>
        <div class="type" :class="'type'+cardType"></div>
        <p v-if="language == 'english'">
          <i class="icon-refresh"></i> For personal use only
          <span class="blue" @click="getQRCode">refresh</span>
        </p>
        <p v-else>
          <i class="icon-refresh"></i> 仅限本人使用
          <span class="blue" @click="getQRCode">刷新</span>
        </p>
        <!-- 去乘车 -->
        <a
          v-if="hasTraffic==1"
          href="https://smkmp.96225.com/exthtml/hangZhouTalentServe/freeCoderide/index.html"
          class="busBtn"
          @click="clickMaidian('M32mh')"
        >去乘车</a>
      </div>
      <!-- 选语言底部弹窗 -->
      <!-- <van-action-sheet
		v-model="actionSheetShow"
		:actions="actions"
		cancel-text="取消"
		@select="onSelect"
		@cancel="onCancel"
      />-->

      <van-action-sheet v-model="actionSheetShow">
        <button
          type="button"
          class="van-action-sheet__item van-hairline--top"
          @click="onSelect('',0)"
        >
          <span :class="language=='chinese'?'colorGreen':''" class="van-action-sheet__name">中文</span>
        </button>
        <button
          type="button"
          class="van-action-sheet__item van-hairline--top"
          @click="onSelect('',1)"
        >
          <span class="van-action-sheet__name" :class="language=='english'?'colorGreen':''">English</span>
        </button>
        <button type="button" class="van-action-sheet__cancel" @click="onCancel">取消</button>
      </van-action-sheet>

      <!-- 人工客服 -->
      <div role="dialog" class="van-dialog" v-if="showHelpTel" style="z-index: 2002;">
        <div class="van-dialog__content">
          <div
            class="van-dialog__message"
          >我们为您提供智能客服和人工客服，您可以自行选择APP内24小时智慧咨询，或拨打人才专线客服96225转2，咨询相关信息。</div>
        </div>
        <div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons">
          <button @click="goQiyu" class="van-button van-button--default blue">
            <span class="van-button__text">智能客服</span>
          </button>
          <button @click="goTel" class="van-button van-button--default van-hairline--left blue">
            <span class="van-button__text" @click="goTel">人工客服</span>
          </button>
        </div>
      </div>

      <van-action-sheet v-model="actionSheetShow2">
        <button type="button" class="van-action-sheet__item van-hairline--top">
          <a href="tel:96225" class="buttonTel blue">呼叫96225</a>
        </button>
      </van-action-sheet>

      <!-- 悬浮窗人工服务 -->
      <div class="fixPopHelp" @click="showKefuPop"></div>
    </div>
  </div>
</template>

<script>
// import { Button, Indicator, Toast, MessageBox } from "mint-ui";
import ajax from "@/api/lib/ajax";
import { getUrl, Maidian } from "@/api/lib/com";
import { VueCropper } from "vue-cropper";
import QRCode from "qrcodejs2";
import Vue from "vue";
import { ActionSheet, Dialog } from "vant";
import '@/api/lib/SETtitle.js'

Vue.use(ActionSheet).use(Dialog);
Vue.use(Dialog);

export default {
  name: "home",
  data() {
    return {
      smkVersion: "5.9.0",
      isloading: true, //表示页面加载中
      token: "",
      isRecommend: "", //广告轮播
      recommendImgDate: [],
      platDate: [],
      cardType: "",
      imgUrl: "",
      name: "姓名",
      bankName: "",
      idcard: "",
      userserve: [],
      platDate1: [],
      platDate2: [],
      platDate3: [],
      mask: true, //false,
      twoCode: true,
      popPhoto: false,
      touImg: "",
      showPhotoCut: false,
      option: {
        img: "",
        size: 1,
        outputType: "jpeg",
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 179, //358默认生成截图框宽度
        autoCropHeight: 220, //441默认生成截图框高度
        fixedBox: true, //固定截图框大小 不允许改变
        canMoveBox: false, //	截图框能否拖动
        centerBox: false, //截图框是否被限制在图片里面
        info: false //裁剪框的大小信息
      },
      timeCC: "",
      qrCode: "",
      actionSheetShow: false,
      language: "chinese",
      actions: [{ name: "中文" }, { name: "English" }],
      hideUpClass: "",
      actionSheetShow2: false,
      showHelpTel: false, //拨打电话弹窗
      hasTraffic: 0
    };
  },
  components: { VueCropper },

  created() {
    if (sessionStorage.language) this.language = sessionStorage.language;
    Maidian({ element_id: "M32m7" });
  },
  mounted() {
    var self = this;
    if (navigator.userAgent.indexOf("smk") > -1) {
      window.yl.call(
        "getAccessToken",
        {},
        {
          onSuccess: function(a) {
            self.token = a.param.accessToken;
            sessionStorage.setItem("token", self.token);
            self.getUserIdByToken();
          },
          onFail: function(a) {
            alert("获取用户信息失败,请升级市民卡APP版本");
          }
        }
      );
    } else {
      // this.$toast('验证码已经发送，请注意查收');
      // MessageBox('请在市民卡APP内打开');
      if (getUrl("accessToken") || sessionStorage.getItem("token")) {
        this.token = getUrl("accessToken") || sessionStorage.getItem("token");
        sessionStorage.setItem("token", this.token);
        this.getUserIdByToken();
      } else {
        window.location.href =
          baseUrl +
          "/exthtml/smk-h5/html/login.html?url=" +
          encodeURIComponent(location.href);
      }
    }

    if (sessionStorage.twoCode && sessionStorage.twoCode == "false") {
      // this.closetwoCode();
      // 关闭二维码弹窗
      this.mask = false;
      this.twoCode = false;
    }
    // this.btnAddHeader(); //上传头像图片
  },
  beforeDestroy() {
    clearTimeout(this.timeCC);
  },
  methods: {
    //跳转人才类别详情
    levelDetail(){
      this.$router.push('/levelDetail')
    },
    getUserIdByToken() {
      var self = this;
      // 用户登陆
      ajax(baseUrl1 +"smk_hztalent_stu/front/app/home/queryUserAuth",{ accessToken: this.token}
      ).then(res => {
        // 是否授权
        if (res.response) {
          // 根据token换用户信息
          self.$indicator.open("正在获取您的专属服务，请稍等");
          // self.$toast('提示信息');
          ajax(baseUrl + "smk_fytalent/front/app/home/userlevel", {
            accessToken: this.token
          }).then(d => {
            self.$indicator.close();
            if (d.code == "PY0000") {
              //   去除加载中
              self.isloading = false;
              if (sessionStorage.cbUrl) {
                let cbUrl = sessionStorage.getItem("cbUrl");
                if (cbUrl.indexOf("?") != "-1") {
                  sessionStorage.removeItem('cbUrl')
                  window.location.href = cbUrl + "&levelState=1";
                } else {
                  sessionStorage.removeItem('cbUrl')
                  window.location.href = cbUrl + "?levelState=1";
                }
              }
              if (d.response && d.response.level) {
                self.cardType = d.response.level;
                self.name = d.response.name;
                sessionStorage.setItem("name", self.name);
                if (d.response.avatar) self.imgUrl = d.response.avatar;
                if (d.response.idcard) self.idcard = d.response.idcard;
                // DOM 更新了 需要有
                Vue.nextTick(function() {
                  // 显示二维码
                  if (self.twoCode) self.creatQrCode(d.response.talentCode);
                });
                // 去获取展台
                self.getCentenInfo();
                // 是否显示去乘车的入口
                self.hasTraffic = d.response.hasTraffic;
              } else {
                // 不是余杭人才
                // self.$router.replace({name:'noAuth'})
              }
            } else if (d.code == "Error1006") {
               Dialog.confirm({
                title: '温馨提示',
                message: '您不是高层次人才',
                confirmButtonText: '去认证',	
                cancelButtonText:'退出',
                 
              }).then(()=>{
                this.$router.push('/toAuthenticate')
              }).catch(()=>{
                window.yl.call("closeWebview")
              })
             
              // // 判断是否青年
              // ajax(baseUrl1 + "smk_hztalent_stu/front/app/home/validExistUser",
              //   {
              //     accessToken: this.token
              //   }
              // ).then(res => {
              //   if (res.code == "PY0000") {
              //     Dialog.alert({
              //   message: "看看"})
              //     if (res.response.status === "validsucc") {
              //       //青年人才成功
              //       if (sessionStorage.cbUrl) {
              //         let cbUrl = sessionStorage.getItem("cbUrl");
              //         if (cbUrl.indexOf("?") != "-1") {
              //           sessionStorage.removeItem('cbUrl')
              //           window.location.href = cbUrl + "&levelState=2";
              //         } else {
              //           sessionStorage.removeItem('cbUrl')
              //           window.location.href = cbUrl + "?levelState=2";
              //         }
              //       } else {
              //         window.location.href = homeURL + "?accessToken=" + this.token;
              //       }
              //     } else if (res.response.status === "waitvalid") {
              //       // 审核中
              //       if (sessionStorage.cbUrl) {
              //         let cbUrl = sessionStorage.getItem("cbUrl");
              //         if (cbUrl.indexOf("?") != "-1") {
              //           sessionStorage.removeItem('cbUrl')
              //           window.location.href = cbUrl + "&levelState=3";
              //         } else {
              //           sessionStorage.removeItem('cbUrl')
              //           window.location.href = cbUrl + "?levelState=3";
              //         }
              //       } else {
              //         this.$router.push('audit')
              //       }
              //     } else {
              //       // 失败
              //       this.$router.push('audit')
              //     }
              //   }else {
              //      this.$router.push("/choose")
              //   }
              // });
              // self.$router.replace({name:'noAuth'})
            } else if (d.code == "Error1004") {
              // 还未实名认证
              Dialog.alert({
                message: "请使用人才认定时登记的手机号或完成实名认证"
              }).then(() => {
                // 跳市民卡APP实名认证
                window.yl.call(
                  "requireAuth",
                  {},
                  {
                    onSuccess: function(a) {},
                    onFail: function(a) {}
                  }
                );
              });
            } else {
              self.$toast(d.msg);
              // layer.open({
              // 	content: d.msg
              // 	,skin: 'msg'
              // 	,time: 2 //2秒后自动关闭
              // });
            }
          });
        } else {
          self.$router.push("/accredit");
        }
      });
    },

    btnAddHeader() {
      this.mask = true;
      this.popPhoto = true;
    },
    closePopPhoto() {
      this.mask = false;
      this.popPhoto = false;
    },
    closeMask() {
      // 关闭弹窗
      if (this.twoCode) {
        this.closetwoCode();
      } else if (this.showHelpTel) {
        this.showHelpTel = false;
        this.mask = false;
      }
    },
    showKefuPop() {
      var self = this;
      self.showHelpTel = true;
      self.mask = true;
    },
    goQiyu() {
      // 去七鱼客服
      location.href = ysf.url();
    },
    goTel() {
      // 跳人工客服
      var self = this;
      this.showHelpTel = false;
      this.mask = false;
      self.actionSheetShow2 = true;
    },

    showtwoCode() {
      this.hideUpClass = false;
      this.mask = true;
      this.twoCode = true;
      var self = this;
      // self.qrCode = "data.response.qrCode";
      self.roundQRCode();
      sessionStorage.setItem("twoCode", "true");

      Maidian({ element_id: "M32kb" });
    },
    closetwoCode() {
      // 关闭二维码窗口
      var self = this;
      this.hideUpClass = true;
      setTimeout(function() {
        self.mask = false;
        self.twoCode = false;
        this.hideUpClass = false;
        sessionStorage.setItem("twoCode", "false");
      }, 300);

      clearTimeout(this.timeCC);
    },
    creatQrCode(code) {
      // 先把原来二维码去除，再生成二维码
      document.querySelector("#codeImg").innerHTML = "";
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: code,
        width: 175,
        height: 175,
        colorDark: "#CA9C3E",
        colorLight: "#fff"
      });
      this.isRefresh = true;
    },
    roundQRCode() {
      // 轮询请求看二维码是否失效
      var self = this;
      ajax(baseUrl + "smk_hztalent/front/app/home/refreshCode", {
        accessToken: this.token
      }).then(data => {
        // PY0000已使用 QR1009 市民码未使用 QR1006 该市民码无效 QR1007 该市民码已使用或已过期，请刷新
        // data = {code:"PY0000",response:{callbackUrl:"http://www.baidu.com"}}
        if (data.code == "PY0000") {
          self.creatQrCode(data.response.talentCode);
          // 未使用，去轮询
          self.timeCC = setTimeout(function() {
            self.roundQRCode();
          }, 60000);
        } else {
          this.$dialog.alert({
            message: data.msg
          });
        }
      });
    },
    getQRCode() {
      clearTimeout(this.timeCC);
      this.roundQRCode();
    },
    showLanguage() {
      this.actionSheetShow = true;
      Maidian({ element_id: "M32kd" });
    },
    onSelect(item, index) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      var self = this;
      this.actionSheetShow = false;
      // console.log(item);
      console.log(index);
      if (index == 0) {
        sessionStorage.setItem("language", "chinese");
        this.language = "chinese";
      } else if (index == 1) {
        sessionStorage.setItem("language", "english");
        this.language = "english";
      }
    },
    onCancel() {
      this.actionSheetShow = false;
    },

    choosePhotoFun(e) {
      console.log("点击选择图片");
      // 埋点
      Maidian({ element_id: "M32kc" });
      //上传图片
      var self = this;
      var file = e.target.files[0];
      var _this = this;
      if (
        !/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value) ||
        e.target.files.length == 0
      ) {
        return;
      } else {
        var reader = new FileReader();
        // 转化为base64
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          // console.log(e.target.result)

          var data;
          // if (typeof e.target.result === 'object') {
          // // 把Array Buffer转化为blob 如果是base64不需要
          // 	data = window.URL.createObjectURL(new Blob([e.target.result]))
          // } else {
          // 	data = e.target.result
          // }
          let size = Math.floor(file.size / 1024);
          if (size > 1 * 1024 * 1024) {
            alert("请选择1M以内的图片！");
            return false;
          }
          data = e.target.result;
          _this.option.img = data;

          // 获取照片成功
          // self.touImg = data;
        };
        reader.οnlοadstart = function(e) {
          console.log("start");
        };
        reader.onerror = function(e) {
          console.log("上传失败");
          console.log(e);
        };

        // 转化为blob
        // reader.readAsArrayBuffer(file);
        this.showPhotoCut = true; //让带有vue-cropper的组件出现，如果没有选择就不会出现了
        this.$refs.upup.value = null; //把input里面的内容清空，在下次点击同一张图片的时候就不会出现获取不了的状况
      }
    },
    choosePhotoFun2(e) {
      // 唤起原生读出照片
      var self = this;
      console.log("开始读取照片");
    },
    finish() {
      //   裁切完后图片,点完成
      this.option.img = "";
      var self = this;
      this.$refs.cropper.getCropData(data => {
        this.showPhotoCut = false;
        self.touImg = data;
        // 裁剪成功，调用上传头像接口
        this.submitPhoto();
      });
    },
    photoBack() {
      // 图片裁切点返回
      this.showPhotoCut = false;
      this.option.img = "";
    },

    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    submitPhoto() {
      // 上传头像
      var self = this;
      self.$indicator.open("加载中...");
      // JSON.stringify({token:this.token,image:this.touImg})
      console.log("开始上传头像图片");
      ajax(baseUrl + "smk_hztalent/front/app/home/uploadAvatar", {
        accessToken: this.token,
        image: this.touImg.substr(23)
      }).then(d => {
        self.$indicator.close();
        if (d.code == "PY0000") {
          //提示
          // 上传成功，从新获取头像信息接口
          // self.getUserIdByToken()
          self.imgUrl = d.response;
        } else {
          self.$toast(d.msg);
        }
      });
    },

    getCentenInfo: async function() {
      // 获取展位接口信息，部署返
      var self = this;
      ajax(baseUrl + "smk_fytalent/front/app/home/userserve", {
        accessToken: this.token
      }).then(returnMes => {
        if (returnMes.code === "PY0000") {
          var nowItem;
          nowItem = returnMes.response;
          console.log('haha',nowItem[0])
          // 遍历展位数据
          // for(let item of this.nowItem) {
          self.userserve = returnMes.response;
          if (nowItem[0]) self.platDate1 = nowItem[0]; //.serveList;
          if (nowItem[1]) self.platDate2 = nowItem[1]; //.serveList;
          if (nowItem[2]) self.platDate3 = nowItem[2]; //.serveList;

          // };
        }
      });
    },
    buryingAlinkss(item, typePP) {
      // 跳展台
      var self = this;

      Maidian({
        element_id: "M32m8",
        event_type: "click",
        element_content: item.id
      });
      // if(item.threshold === 'bind') {
      //     // // 是否实名
      //     let isshiming = sessionStorage.getItem('isshiming')
      //     if(isshiming == 'false'){
      //         location.href = 'smkapp://userRealName'
      //         return false
      //     }
      // }
      if (item.serveType == "1") {
        if (item.redirectUrl == "telphone") {
          self.showHelpTel = false;
          self.mask = false;
          self.actionSheetShow2 = true;
        } else if (item.redirectUrl == "smart") {
          location.href = ysf.url();
        } else {
          // 内部项目，跳路由
          console.log('haha',item.redirectUrl)
          window.location.href = item.redirectUrl //修改
          // this.$router.push({ name: item.redirectUrl }); 原有
        }
      } else if (item.redirectUrl.indexOf("smkapp://") > -1) {
        // location.href = item.redirectUrl;
        // 跳原生功能
        window.yl.call(
          "openNativeModule",
          {
            schemeUri: item.redirectUrl,
            appName: "",
            appbh: "",
            threshold: "bind"
          },
          {
            onSuccess: function(a) {},
            onFail: function(a) {}
          }
        );
      } else if (item.withToken == 1) {
        // 跳转需要带用户信息
        if (item.redirectUrl.indexOf("?") > 0) {
          location.href = `${item.redirectUrl}&token=${sessionStorage.getItem(
            "token"
          )}`;
        } else
          location.href = `${item.redirectUrl}?token=${sessionStorage.getItem(
            "token"
          )}`;
      } else {
        location.href = `${item.redirectUrl}`;
      }
    },
    clickMaidian(a) {
      // 点击轮播广告埋点
      Maidian({ element_id: a, event_type: "click" });
    }
  }
};
</script>

<style scoped>
.smallIs {
  width: 35px;
  height: 35px;
}
.level{
  text-align: right;
  padding-top: 8px;
  position: absolute;
  right:7.5px;
 
}
.levelKind{
  color:#BA8A4C;
  font-size: 15px;
   background: #FFE0AE;
   border-radius: 0.12px;
   padding: 1.25px 5px;
}

</style>
