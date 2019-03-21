<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div
        class="cu-bar fixed bg-gradual-blue"
        :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}"
      >
        <div class="action"  hover-class="none"  style="margi-left:30rpx">消息中心</div>
      </div>
    </div>
    <div class="cu-list menu menu-avatar">
      <div class="cu-item" @click="gotoSysMessage">
        <div
          class="cu-avatar round lg"
          style="background-image:url(http://sowcar.com/t6/687/1553150344x986907160.png);"
        ></div>
        <div class="content">
          <div class="text-grey">系统消息</div>
          <div class="text-gray text-sm">
            <text class="icon-infofill text-red"></text>有新的系统消息，点击查看
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-red sm">5</div>
        </div>
      </div>
      <!-- <div class="cu-item">
        <div
          class="cu-avatar round lg"
          style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
        >
          <div class="cu-tag badge">99+</div>
        </div>
        <div class="content">
          <div class="text-grey">系统消息
            <div class="cu-tag round bg-orange sm">SVIP</div>
          </div>
          <div class="text-gray text-sm">
            <text class="icon-redpacket_fill text-red"></text>收到红包
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="icon-notice_forbid_fill text-gray"></div>
        </div>
      </div> -->
      <div class="cu-item">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
        ></div>
        <div class="content">
          <div>鲜直达互动群</div>
          <div class="text-gray text-sm">老总：三年上市</div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-red sm">5</div>
        </div>
      </div>
      <div class="cu-item grayscale">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
        ></div>
        <div class="content">
          <div>内部群</div>
          <div class="text-gray text-sm">老大：明天给大家涨工资</div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-red sm">5</div>
        </div>
      </div>
      <div class="cu-item cur">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"
        >
          <div class="cu-tag badge"></div>
        </div>
        <div class="content">
          <div>你懂得
            <div class="cu-tag round bg-orange sm">6人</div>
          </div>
          <div class="text-gray text-sm">番茄一号：
            <text class="icon-picfill text-orange"></text>图片传输中...
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="icon-notice_forbid_fill text-gray"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import app from "../../App";
const datas = app.getSysInfo();
export default {
  data() {
    return {
      active: 1,
      navBarHeight:0,
      statusBarHeight:0
    };
  },

  created(){
    let platformReg = /ios/i;
    let height = 0;
    if (platformReg.test(datas.platform)) {
      height = 44;
    } else {
      height = 48;
    }
    this.navBarHeight = datas.statusBarHeight + height;
    this.statusBarHeight = datas.statusBarHeight
  },


  methods: {
    onChange(e) {
      const url = "../home/main";
      if (e.mp.detail == 0) {
        mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      // throw {message: 'custom test'}
    },
    gotoSysMessage(){
      const url = '../sysMessage/main';
      mpvue.navigateTo({url})
    }
  },

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
