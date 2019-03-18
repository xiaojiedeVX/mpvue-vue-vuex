<template>
  <div>
    <div class="content boder_box header_top">
      <van-cell-group>
        <van-field :value="username" @change="userNameChange" clearable placeholder="请输入用户名"/>
      </van-cell-group>
    </div>
    <div class="content boder_box content_top">
      <van-cell-group>
        <van-field :value="password" @change="pwChange" clearable placeholder="请输入密码"/>
      </van-cell-group>
    </div>
    <div class="content boder_box content_top">
      <van-field
        :value="codeImg"
        @change="cdChange"
        center
        clearable
        label="验证码"
        placeholder="请输入验证码"
        use-button-slot
      >
        <van-button slot="button" size="small" type="primary">验证码图片</van-button>
      </van-field>
    </div>
    <div class="content_botton content_top" @click="login">
      <van-button size="large" custom-class="test2">登录</van-button>
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
    async login(){
      let data = {username:this.username,password:this.password,codeImg:this.codeImg}
      let res = await login();
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style >
.test2 {
  border: 1rpx solid #f76968 !important;
  border-radius: 10rpx !important;
  color: white !important;
  background-color: #f76968 !important;
}
</style>


<style scoped>
.content {
  width: 90%;
  margin: 0 auto;
  padding: 0 5rpx;
  background-color: white;
}
.content_botton {
  width: 91%;
  margin: 0 auto;
  padding: 5 5rpx;
}
.boder_box {
  border: 1rpx solid #bbbbbb;
  border-radius: 10rpx;
  /* background-color: white; */
}
.header_top {
  margin-top: 10vh;
}
.content_top {
  margin-top: 3vh;
}
</style>
