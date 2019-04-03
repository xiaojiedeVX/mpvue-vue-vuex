<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
            <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
                <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
                <text class='icon-back'></text>
                </navigator>
                <div class='content' :style="{top:statusBarHeight+'px'}">我的收藏</div>
            </div>
    </div>
    <div class="cu-list no-card menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
      <div class="cu-item arrow">
        <navigator class="content" url="../recipeCollect/main" hover-class="none">
          <text class="icon-present text-grey"></text>
          <text class="text-grey">菜谱收藏</text>
        </navigator>
      </div>
      <div class="cu-item arrow">
        <navigator class="content" url="../tests/main" hover-class="none">
          <text class="icon-present text-grey"></text>
          <text class="text-grey">食材收藏</text>
        </navigator>
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
  },

  onLoad(){
  
  },

  methods: {
    onChange(e) {
      // const url = "../home/main";
      // if (e.mp.detail == 0) {
      //   mpvue.switchTab({ url });
      // }
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
