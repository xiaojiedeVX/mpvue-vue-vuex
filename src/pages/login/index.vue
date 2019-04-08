<template>
  <div class="bg">
    <div class="text_center">
      <img src="../../../static/images/logo.png" class="logo" alt>
    </div>
    <div class="cu-form-group content_box  content_top">
      <input placeholder="请输入用户名" v-model="username" class="radius" name="input">
    </div>
    <div class="cu-form-group content_box  content_top">
      <input placeholder="请输入密码" v-model="password" class="radius" name="input">
    </div>
    <div class="cu-form-group content_box  content_top">
      <input placeholder="请输入验证码" :maxlength="max"  v-model="code"  class="radius" name="input">
      <img :src="codeImg"  slot="button"  @click="loadImg" alt style="width:160rpx;height:58rpx">
    </div>

    <div class="content_botton content_top" @click="login">
      <van-button :disabled="okLogin" size="large" custom-class="button" type="primary">登录</van-button>
    </div>

    <div class="cu-load load-modal" v-if="logining">
      <!-- <div class='icon-emojifill text-orange'></div> -->
      <img src="../../../static/images/logo.png" class="png" mode="aspectFit">
      <div class="gray-text">登录中...</div>
    </div>
  </div>
</template>

<script>
import { login, getImg } from "../../config/functions";
export default {
  data() {
    return {
      sms: "test",
      username: "",
      password: "",
      codeImg: "",
      codeId: "",
      code:"",
      logining: false,
      timer: null,
      max:4
      // okLogin:false
    };
  },

  components: {},

  created() {
    this.loadImg();
  },

  computed:{
    okLogin(){
      if(this.username==""){return true};
      if(this.password==""){return true};
      if(this.code==""){return true};
      return false
    }
  },

  methods: {
    userNameChange(e) {
      this.username = e.mp.detail;
    },
    pwChange(e) {
      this.password = e.mp.detail;
    },
    cdChange(e) {
      this.codeImg = e.mp.detail;
    },

    showMessage(){

    },
    async login() {
      if(this.okLogin){
        return
      }
      let data = {
        userName : this.username,
        password: this.password,
        codeId: this.codeId,
        code:this.code,
      };

      let res = await login(data,()=>{
        this.loadImg();
      });
      this.logining = true;
      wx.setStorageSync('loginInfo',res.params)
      this.timer = setTimeout(() => {
        this.logining = false;
        const url ="../home/main";
        mpvue.switchTab({url})
      }, 500);
    },
    async loadImg() {
      console.log('test')
      let res = await getImg();
      this.codeImg = res.params.image;
      this.codeId = res.params.codeId;
    }
  },

  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>




<style scoped>
.content_box {
  width: 80%;
  margin: 0 auto;
  /* padding: 0 5rpx; */
  background-color: white;
  opacity: 1;
}
.content_botton {
  width: 80%;
  margin: 0 auto;
}
.boder_box {
  border: 1rpx solid #bbbbbb;
  border-radius: 10rpx;
  /* background-color: white; */
}
.logo {
  width: 350rpx;
  height: 350rpx;
}
.text_center {
  text-align: center;
}
.header_top {
  margin-top: 6vh;
}
.content_top {
  margin-top: 3vh;
}
.bg {
  /* http://sowcar.com/t6/686/1552967621x986907160.jpg */
  /* https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552973215855&di=0308e69046c8e2497f6c264d70caae0a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01476f579842940000018c1b6681b3.png%40900w_1l_2o_100sh.jpg */
  background-image: url("http://sowcar.com/t6/693/1554079934x1033062831.jpg");
  background-size: 100% 100%;
  height: 100vh;
  position: fixed;
  width: 100vw;
  opacity: 0.9;
}
</style>
<style >
.button {
  border: 1rpx solid #07c160 !important;
  border-radius: 10rpx !important;
  color: white !important;
  background-color: #07c160 !important;
}
.text {
  padding: 0;
}
</style>