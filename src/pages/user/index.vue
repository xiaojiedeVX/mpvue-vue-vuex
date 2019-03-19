<template>
  <div>
      <div class="cu-card dynamic no-card">
        <div class="cu-item shadow">
          <div class="cu-list menu menu-avatar" style="padding:3vh">
            <div class="cu-item">
              <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div>
              <div class='content flex-sub'>
                <div>晓杰哥哥</div>
                <div class='text-gray text-sm flex justify-between'>
                  2099年12月3日
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cu-list no-card menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
        <div class="cu-item arrow">
          <div class='content' bindtap='CopyLink' data-link='https://github.com/weilanwl/ColorUI'>
            <text class='icon-github text-grey'></text>
            <text class='text-grey'>家长信息</text>
          </div>
        </div>
        <div class="cu-item arrow">
          <navigator class='content' url='../about/about' hover-class='none'>
              <text class='icon-github text-grey'></text>
            <text class='text-grey'>学生信息</text>
          </navigator>
        </div>
        <div class="cu-item arrow">
          <navigator class='content' url='../log/log' hover-class='none'>
            <text class='icon-formfill text-green'></text>
            <text class='text-grey'>收藏</text>
          </navigator>
        </div>
        <div class="cu-item arrow">
          <div class='content' bindtap="showQrcode">
            <text class='icon-appreciatefill text-red'></text>
            <text class='text-grey'>设置</text>
          </div>
        </div>
         <div class="cu-item arrow">
          <div class='content' bindtap="showQrcode">
            <text class='icon-appreciatefill text-red'></text>
            <text class='text-grey'>版本1.0</text>
          </div>
        </div>
</div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      active:1
    };
  },

  components: {
    card
  },

  methods: {
    onChange(e) {
      console.log(e.mp.detail)
      const url = "../home/main";
      if(e.mp.detail==0){
         mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },

  created() {
    // let app = getApp()
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
