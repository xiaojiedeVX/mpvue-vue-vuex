<template>
  <div>
    <div style="height: 100vh;background-color:white">
    <!-- opts 前面加冒号 -->
     <div class="cu-load load-modal" v-if="loading">
      <!-- <div class='icon-emojifill text-orange'></div> -->
      <img src="../../../static/images/logo.png" class="png" mode="aspectFit">
      <div class="gray-text">加载中...</div>
    </div>
  </div>
  </div>
</template>

<script>
import card from "@/components/card";
import { refLogin } from "../../config/functions";
export default {
    data() {
      return {
        motto: "Hello World",
        opts: {
          // 使用延时初始化 -- 重要
          lazyLoad: true
        },
        loading:true,
        timer:null
      };
    },

    components: {},

    methods: {
      async reftoken(data,url){
        let datas = {suseOnlineTag :data.suseOnlineTag ,suseUuid :data.suseUuid ,token :data.token}
        let res = await refLogin(datas);
        wx.setStorageSync("loginInfo",res.params)
        mpvue.switchTab({url})
      }
    },

    onLoad() {
      // 在 onLoad 内部通过id找到该组件, 然后调用该组件的初始化方法
      const url = "../login/main";
      const url2 = "../home/main";
      let user = wx.getStorageSync("loginInfo");
      this.timer = setTimeout(() => {
         if(user){
           this.reftoken(user,url2);
          // mpvue.switchTab({url:url2})
        }else{
          mpvue.redirectTo({url})
        }
      }, 500);
    },
    
    onUnload(){
      clearTimeout(this.timer)
    }
  };
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
