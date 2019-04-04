<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div
        class="cu-bar fixed bg-gradual-blue"
        :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}"
      >
        <div class="action" hover-class="none" style="margi-left:30rpx">个人中心</div>
      </div>
    </div>
    <div class="cu-card dynamic no-card">
      <div class="cu-item shadow">
        <div class="cu-list menu menu-avatar" style="padding:3vh">
          <div class="cu-item">
            <div
              class="cu-avatar round lg"
              style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
            ></div>
            <div class="content flex-sub">
              <div v-text="userInfo.studName"><text class="text-xs" style="padding-left:20rpx"> (当前绑定学生)</text></div>
              <div class="text-gray text-sm flex">
                <text class="icon-phone lg text-gray" style="font-size:20px;padding-right:10px"></text>
                <text v-text="userInfo.guarTel"></text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cu-list no-card menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
      <div class="cu-item arrow">
        <navigator class="content" url="../parent/main" hover-class="none">
          <text class="icon-friendfamous text-grey"></text>
          <text class="text-grey">家长信息</text>
        </navigator>
      </div>
      <div class="cu-item arrow">
        <navigator class="content" url="../student/main" hover-class="none">
          <text class="icon-profile text-grey"></text>
          <text class="text-grey">学生信息</text>
        </navigator>
      </div>
      <div class="cu-item arrow">
        <navigator class="content" url="../myCollect/main" hover-class="none">
          <text class="icon-present text-green"></text>
          <text class="text-grey">我的收藏</text>
        </navigator>
      </div>
      <div class="cu-item arrow">
        <navigator class="content" url="../updatePw/main" hover-class="none">
          <text class="icon-edit text-green"></text>
          <text class="text-grey">修改密码</text>
        </navigator>
      </div>
      <div class="cu-item">
        <div class="content" bindtap="showQrcode">
          <text class="icon-pullup text-red"></text>
          <text class="text-grey">版本1.0</text>
        </div>
      </div>
      <div class="cu-item">
        <div class="content" @click="shwoModal">
          <text class="icon-roundclose text-red"></text>
          <text class="text-grey">退出登录</text>
        </div>
      </div>
      <div :class="['cu-modal',{'show':IsShow}]">
        <div class="cu-dialog">
          <div class="cu-bar bg-white justify-end">
            <div class='content'>退出登录</div>
            <div class='action' @click='hideModal'>
              <text class='icon-close text-red'></text>
            </div>
          </div>
          <div class='padding-xl'>
            您确定要退出登录吗
          </div>
          <div class="cu-bar bg-white justify-end">
                <div class='action'>
                  <button class='cu-btn line-green text-green' @click='hideModal'>取消</button>
                  <button class='cu-btn bg-green margin-left' @click='clikOk'>确定</button>
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import app from "../../App";
import { mapState,mapMutations,mapActions} from  'vuex'
import { logOut } from '../../config/functions'
const datas = app.getSysInfo();
export default {
  data() {
    return {
      active: 1,
      navBarHeight: 0,
      statusBarHeight: 0,
      IsShow:false
    };
  },

  created() {
    let platformReg = /ios/i;
    let height = 0;
    if (platformReg.test(datas.platform)) {
      height = 44;
    } else {
      height = 48;
    }
    this.navBarHeight = datas.statusBarHeight + height;
    this.statusBarHeight = datas.statusBarHeight;
  },
  computed:{
    ...mapState([
      'userInfo'
    ])
  },

  onShow(){
    this.getUserInfo();
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
    shwoModal(){
      this.IsShow = true 
    },
    hideModal(){
      this.IsShow = false;
    },
    async clikOk(){
      let user = wx.getStorageSync("loginInfo");
      let data = {suseOnlineTag :user.suseOnlineTag ,suseUuid :user.suseUuid };
      await logOut(data); 
      wx.clearStorageSync();
      const url = '../login/main';
      mpvue.redirectTo({url})
    },
    getUserInfo(){
      let user = wx.getStorageSync("loginInfo");
      let data = {guarUuid :user.suseUuid,studEnteUuid  :user.enteUuid};
      this.$store.dispatch('getUserInfo',data);
    },
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
