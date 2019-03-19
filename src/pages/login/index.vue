<template>
  <div class="bg">
    <div class="text_center">
      <img src="../../../static/images/logo.png" class="logo" alt>
    </div>
    <div class="content header_top">
      <van-field placeholder="请输入用户名" clearble bind:change="onChange"/>
    </div>
    <div class="content content_top">
      <van-field placeholder="请输入密码" bind:change="onChange"/>
    </div>
    <div class="content content_top">
      <van-field
        center
        clearable
        placeholder="请输入验证码"
        use-button-slot
      >
        <van-button slot="button" size="small" type="primary">验证码图片</van-button>
      </van-field>
    </div>
    <div class="content_botton content_top">
      <van-button size="large" custom-class='button'  type='primary'>登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sms: "test",
      username: "",
      password: "",
      codeImg: ""
    };
  },

  components: {},

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
    async login() {
      let data = {
        username: this.username,
        password: this.password,
        codeImg: this.codeImg
      };
      let res = await login();
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>




<style scoped>
.content {
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
  width: 400rpx;
  height: 400rpx;
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
  background-image: url("http://sowcar.com/t6/686/1552967621x986907160.jpg");
  background-size: 100% 100%;
  height: 100vh;
  position: fixed;
  width: 100vw;
  opacity: 0.9;
}
</style>
<style >
.button{
  border: 1rpx solid #07c160 !important;
  border-radius: 10rpx !important;
  color: white !important;
  background-color: #07c160 !important;
}
</style>