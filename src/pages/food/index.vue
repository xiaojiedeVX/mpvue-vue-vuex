<template>
  <div @click="hideModal">
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div
        class="cu-bar fixed bg-gradual-blue"
        :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}"
      >
        <div class="action" hover-class="none" style="margi-left:30rpx">食材供应</div>
      </div>
    </div>
    <div class="top_search top_fixed" :style="{top:navBarHeight+'px'}">
      <div class="cu-bar bg-cyan search">
        <!-- <div class="cu-avatar round" style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"></div> -->
        <div class="search-form radius">
          <text class="icon-search"></text>
          <input type="text" placeholder="搜索食材,菜譜" confirm-type="search">
        </div>
        <div class="action" @click.stop="showModal">
          <text>{{nowDay}} 星期{{weekDay}}</text>
          <text class="icon-triangledownfill"></text>
        </div>
      </div>
    </div>
    <img @click="goTop" src='../../../static/images/toTop.svg' class='goTop' :hidden='!floorstatus'/>
    <div
      :style="{top:navBarHeight + 'px'}"
      :class="['cu-modal','drawer-modal','justify-end',{'show':modaShow==true}]"
    >
      <div class="cu-dialog basis-lg">
        <div class="cu-list menu menu-avatar text-left">
          <div
            class="cu-item arrow"
            style="padding-left:30rpx"
            v-for="(item,index) in dateList"
            :key="index"
            @click="hideOk(item,index)"
          >
            <div class="content">
              <text class="icon-circlefill text-grey"></text>
              <text class="text-grey" v-text="item"></text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="foodGoodList.length>0" :style="{marginTop:navBarHeight + 'px'}">
      <div
        v-for="(item,index) in foodGoodList"
        :key="index"
        @click="gotoDetail"
        style="margin-bottom:30rpx"
      >
        <div class="content_my">
          <div class="card_top">
            <img
              :src="item&&imgBaseUrl + item.goodImage"
              alt
              style="width:80rpx;height:80rpx;border-radius:50%;margin:10rpx"
            >
            <div class="tilte">
              <div style="font-size:30rpx" v-text="item.enteName"></div>
              <div style="font-size:24rpx;color:#0079f3" v-text="item.createTime"></div>
            </div>
          </div>
          <div class="food_name" v-text="item.goodName"></div>
          <div class="jus_center">
            <img
              :src="item&&imgBaseUrl + item.goodImage"
              style="width:100%;height:360rpx;padding:10rpx"
              alt
            >
          </div>
          <div class="fl_right">
            <div></div>
            <div style="font-size:24rpx;color:#0079f3;padding:10rpx" v-text="item.read">阅读</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else style="height:90vh;line-height:90vh;text-align:center">暂时没有找到数据喔(⊙_⊙)</div>
    <div v-if="toBottom" :class="['cu-load','text-sm',{'loading':isLoading},{'over':!isLoading}]"></div>
  </div>
</template>

<script>
import card from "@/components/card";
import app from "../../App";
import { getWeekDay, formatDate } from "../../config/functions";
import { mapState } from "vuex";
import { imgBaseUrl } from "../../config/env";
const datas = app.getSysInfo();
export default {
  data() {
    return {
      active: 1,
      data: [
        "泉涌生鲜的大大白菜你信不",
        "泉涌生鲜的大大白菜你信不",
        "泉涌生鲜的大大白菜你信不"
      ],
      showModalClass: "cu-modal,drawer-modal,justify-end,show",
      hideModalClass: "cu-modal,drawer-modal,justify-end",
      modaShow: false,
      navBarHeight: 0,
      statusBarHeight: 0,
      dateList: getWeekDay(),
      nowDay: formatDate(new Date()),
      imgBaseUrl: imgBaseUrl,
      page: 1,
      pageSize: 5,
      isLoading: true,
      toBottom: false,
      floorstatus: false,
      startTime:null,
      enTime:null
    };
  },

  computed: {
    ...mapState(["foodGoodList", "foodGoodTotal"]),
    weekDay() {
      let date = new Date(this.nowDay);
      let day = date.getDay();
      switch (day) {
        case 1:
          return "一";
          break;
        case 2:
          return "二";
          break;
        case 3:
          return "三";
          break;
        case 4:
          return "四";
          break;
        case 5:
          return "五";
          break;
      }
    }
  },

  onLoad() {
      let NowDate = new Date();
      let date1 = new Date(NowDate);
      date1.setDate(NowDate.getDate() - 100);
      let date2 = new Date(NowDate);
      date2.setDate(NowDate.getDate() - 3);
      this.startTime = formatDate(date1);
      this.enTime = formatDate(date2);
      this.getFood();
  },

  onReachBottom() {
    this.toBottom = true;
    ++this.page;
    let pageTotal = Math.floor(Number(this.foodGoodTotal / this.pageSize));
    if (this.page < pageTotal) {
      this.getFood();
    } else {
      this.isLoading = false;
    }
  },

  onPageScroll: function (e) {
    this.floorstatus = e.scrollTop > 100?true:false;
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
    hideModal() {
      this.modaShow = false;
    },
    hideOk(item,index) {
      this.nowDay = item && item;
      this.page =  1 ;
      this.startTime =index==0?this.dateList[index]:this.dateList[index-1];
      this.endTime = this.dateList[index]
      this.modaShow = false;
      this.getFood()
    },
    showModal() {
      this.modaShow = true;
    },
    gotoDetail() {
      const url = "../dishDetail/main";
      mpvue.navigateTo({ url });
    },
    getFood() {
      let user = wx.getStorageSync("loginInfo");
      let data = {
        guarUuid: user.suseUuid,
        goodEnteUuid: user.enteUuid,
        starTime: this.startTime,
        endTime: this.enTime,
        page: this.page,
        pageSize: this.pageSize
      };
      this.$store.dispatch("getFoodGood", data);
    },
     goTop(){
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
    }
  }
};
</script>

<style scoped>
.content_my {
  width: 94vw;
  margin: 0rpx auto;
  background-color: white;
  min-height: 540rpx;
}

.top_search {
  width: 100vw;
  margin: 0rpx auto;
  background-color: white;
}
.card_top {
  display: flex;
  align-items: center;
}
.tilte {
  display: flex;
  flex-direction: column;
  padding-left: 15rpx;
  height: 80rpx;
  justify-content: space-between;
}
.fl_right {
  display: flex;
  justify-content: space-between;
}
.food_name {
  padding: 10rpx;
  font-size: 30rpx;
  border-bottom: 1rpx solid #ccc;
  margin: 0rpx 10rpx;
}
.jus_center {
  display: flex;
  justify-content: center;
}

.top_fixed {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}
.goTop{
  height: 80rpx;
  width: 80rpx;
  position: fixed;
  bottom: 50rpx;
  opacity: 0.9;
  right: 30rpx;
  border-radius: 50%;
  z-index: 999
}
</style>
