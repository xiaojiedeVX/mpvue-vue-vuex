<template>
  <div @click="hideModal">
     <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div class="cu-bar fixed bg-gradual-blue" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
        <div class='action' hover-class="none"  style="margi-left:30rpx">食材供应
        </div>
      </div>
    </div>
      <div class="top_search top_fixed" :style="{top:navBarHeight+'px'}">
         <div class="cu-bar bg-cyan search">
        <!-- <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div> -->
          <div class='search-form radius'>
            <text class="icon-search"></text>
            <input type="text" placeholder="搜索食材,菜譜" confirm-type="search" />
          </div>
          <div class='action' @click.stop="showModal">
            <text>{{nowDay}} 星期{{weekDay}}</text>
            <text class="icon-triangledownfill"></text>
          </div>
        </div>
      </div>
      <div :style="{top:navBarHeight + 'px'}" :class="['cu-modal','drawer-modal','justify-end',{'show':modaShow==true}]">
        <div class="cu-dialog basis-lg" catchtap >
          <div class="cu-list menu menu-avatar text-left" >
            <div class="cu-item arrow" style="padding-left:30rpx" v-for="(item,index) in dateList" :key="index" @click='hideOk(item)'>
              <div class='content'>
                <text class='icon-circlefill text-grey'></text>
                <text class='text-grey' v-text="item"></text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :style="{marginTop:navBarHeight + 'px'}">
        <div v-for="(item,index) in data" :key="index" @click="gotoDetail" style="margin-bottom:30rpx">
        <div class="content_my">
          <div class="card_top">
            <img src="http://inews.gtimg.com/newsapp_bt/0/8240028973/1000" alt="" style="width:80rpx;height:80rpx;border-radius:50%;margin:10rpx">
            <div class="tilte">
                <div style="font-size:30rpx">泉涌生鲜</div>
                <div style="font-size:24rpx;color:#0079f3">2019-03-13</div>
            </div>
          </div>
          <div class="food_name" v-text="item"></div>
          <div class="jus_center">
             <img src="http://inews.gtimg.com/newsapp_bt/0/8240028973/1000" style="width:100%;height:360rpx;padding:10rpx" alt="">
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
import app from "../../App";
import { getWeekDay, formatDate } from '../../config/functions'
const datas = app.getSysInfo();
export default {
  data() {
    return {
      active:1,
      data:['泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不'],
      showModalClass:'cu-modal,drawer-modal,justify-end,show',
      hideModalClass:'cu-modal,drawer-modal,justify-end',
      modaShow:false,
      navBarHeight:0,
      statusBarHeight:0,
      dateList:getWeekDay(),
      nowDay:formatDate(new Date())
    };
  },

  computed:{
    weekDay(){
      let date = new Date(this.nowDay);
      let day = date.getDay();
      switch(day){
        case 1 :
         return "一";
         break;
        case 2 :
         return "二";
         break;
        case 3 :
         return "三";
         break;
        case 4 :
         return "四";
         break;
        case 5 :
         return "五";
         break;
      }
    }
  },

  onLoad(){
    // let date = new Date();
    // // let date1 = date.setDate(date.getDate() - date.getDay() + 1);
    // let date2 =  date.setDate(date.getDate() + 6);
    // // console.log(formatDate(date1))
    console.log(getWeekDay())
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
      if(e.mp.detail==0){
         mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      // throw {message: 'custom test'}
    },
    hideModal(){
      this.modaShow = false
    },
    hideOk(item){
      this.nowDay = item&&item;
      this.modaShow = false
    },
    showModal(){
      this.modaShow = true;
    },
    gotoDetail(){
      const url ='../dishDetail/main';
      mpvue.navigateTo({url})
    }
  },
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
  width: 100vw;
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
  margin-left: auto;
  margin-right: auto;
}
</style>
