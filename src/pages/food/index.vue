<template>
  <div @click="hideModal">
      <div class="top_search top_fixed" >
         <div class="cu-bar bg-cyan search">
        <!-- <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div> -->
          <div class='search-form radius'>
            <text class="icon-search"></text>
            <input type="text" placeholder="搜索食材,菜譜" confirm-type="search" />
          </div>
          <div class='action' @click.stop="showModal">
            <text>2018-03-18 星期五</text>
            <text class="icon-triangledownfill"></text>
          </div>
        </div>
      </div>
      <view :class="modaShow?showModalClass:hideModalClass">
        <view class="cu-dialog basis-lg" catchtap >
          <view class="cu-list menu menu-avatar text-left" >
            <view class="cu-item arrow" style="padding-left:30rpx" @click='hideModal'>
              <view class='content'>
                <text class='icon-circlefill text-grey'></text>
                <text class='text-grey'>2018-03-19</text>
              </view>
            </view>
            <view class="cu-item arrow" style="padding-left:30rpx" @click='hideModal'>
              <view class='content'>
                <text class='icon-circlefill text-grey'></text>
                <text class='text-grey'>2018-03-19</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <div style="margin-top:10vh">
        <div v-for="(item,index) in data" :key="index" @click="gotoDetail">
        <div class="content_my">
          <div class="card_top">
            <img src="http://sowcar.com/t6/686/1552982484x986907160.jpg" alt="" style="width:80rpx;height:80rpx;border-radius:50%;margin:10rpx">
            <div class="tilte">
                <div style="font-size:30rpx">泉涌生鲜</div>
                <div style="font-size:24rpx;color:#0079f3">2019-03-13</div>
            </div>
          </div>
          <div class="food_name" v-text="item"></div>
          <div class="jus_center">
             <img src="http://sowcar.com/t6/686/1552984398x986907142.jpg" style="width:100%;height:360rpx;padding:10rpx" alt="">
          </div>
          <div class="fl_right">
            <div></div>
             <div style="font-size:24rpx;color:#0079f3;padding:10rpx">330阅读</div>
          </div>     
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
      active:1,
      data:['泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不'],
      showModalClass:'cu-modal,drawer-modal,justify-end,show',
      hideModalClass:'cu-modal,drawer-modal,justify-end',
      modaShow:false
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
    },
    hideModal(){
      this.modaShow = false
    },
    showModal(){
      this.modaShow = true;
    },
    gotoDetail(){
      const url ='../dish/Detail/main'
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.content_my{
  width: 94vw;
  margin: 0rpx auto;
  background-color: white;
  min-height: 540rpx;
}

.top_search{
  width: 94vw;
  margin: 0rpx auto;
  background-color: white;
}
.card_top{
  display: flex;
  align-items: center
}
.tilte{
  display: flex;
  flex-direction: column;
  padding-left: 15rpx;
  height: 80rpx;
  justify-content: space-between
}
.fl_right{
  display: flex;
  justify-content: space-between
}
.food_name{
  padding:10rpx;
  font-size:30rpx;
  border-bottom:1rpx solid #ccc;
  margin: 0rpx 10rpx
}
.jus_center{
  display: flex;
  justify-content: center
}

.top_fixed{
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top:0;
  margin-left: auto;
  margin-right: auto;
}
</style>
