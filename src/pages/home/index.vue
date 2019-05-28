<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div class="cu-bar fixed bg-gradual-blue" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px',textAlign:'center'}">
         <div class="action"  hover-class="none"  style="margi-left:30rpx">首页</div>
      </div>
    </div>
    <img @click="goTop" src='../../../static/images/toTop.svg' class='goTop' :hidden='!floorstatus'/>
    <div>
       <swiper
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        style="height:50vw"
      >
      <block v-for="(item,index) in bannerList" :key="index" >
        <swiper-item>
          <image :src="item?imgBaseUrl + item.bannImg:null" class="slide-image" style="width:100%;height:50vw"/>
        </swiper-item>
      </block>
    </swiper>
    </div>
    <!-- <div>
     <div class="tower-swiper" bindtouchmove="towerMove" bindtouchstart="towerStart" bindtouchend="towerEnd">
      <div :class="['tower-item',{'none':item.zIndex==1}]" v-for="(item,index) in towerList" :key="index" :style="{transform: 'scale('+0.5+item.zIndex/10+')',marginLeft:item.mLeft*100-150 +'rpx',zIndex:item.zIndex}">
        <div class='bg-img shadow-blur' :style="{backgroundImage:'url('+item.url+')'}"></div>
      </div>
    </div>
    </div> -->
    <div class="img_content">
      <div v-for="(item,index) in topGoodList" :key="index">
        <img @click="gotoDetails(item)" :src="item?imgBaseUrl + item.goodImage:null"  mode="aspectFill" class="img_item" alt="">
      </div>
    </div>
    <div class="box_item">
        <div class="line"></div>
        <div class="text">生鲜供应</div>
        <div class="line"></div>
    </div>
    <div v-for="(item,index) in homeGoodList" :key="index">
      <div class="cu-card case"  @click="gotoDetails(item)">
      <div class="cu-item shadow">
        <div class='image'>
          <image :src="item?imgBaseUrl + item.goodImage:null" mode="aspectFill"></image>
          <!-- <div class="cu-tag bg-blue">泉涌大大白菜</div> -->
          <div class='cu-bar bg-shadeBottom' v-text="item.enteName"></div>
        </div>
        <div class="cu-list menu menu-avatar">
          <div class="cu-item" style="padding-left:15rpx">
            <!-- <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></div> -->
            <div class='content flex-sub'>
              <div class='text-grey' v-text="item.goodName"></div>
              <div class='text-gray text-sm flex justify-between'>
                {{item.createTime}}
                <div class="text-gray text-sm">
                  <text class="icon-attentionfill" v-text="item.read"></text> 
                  <text :class="['icon-appreciatefill',{'text-red':item.isLike==1}]" @click.stop="LikesClick(item)" style="padding-left:10rpx" v-text="item.like"></text> 
                  <!-- <text class="icon-messagefill"></text> 30 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- <div class="ve_item">
      <div class="fo_item" v-for="(img,index) in vetablesUrl" :key="index">
        <img :src="img" alt="" style="width:94vw;height:400rpx">
        <div>大白菜</div>
      </div>
    </div> -->
    <div v-if='toBottom' :class="['cu-load','text-sm',{'loading':isLoading},{'over':!isLoading}]"></div>
  </div>
</template>

<script>
import app from "../../App";
import { getWeekDay, formatDate } from '../../config/functions'
import {mapState,mapMutations} from 'vuex';
import { imgBaseUrl } from '../../config/env';
import {  LikeGood } from '../../config/functions'
const datas = app.getSysInfo();
export default {
  
  data() {
    return {
      active: 0,
      towerList:[],
      imgUrls: [
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'
    ],
    foodUrls:[
      {id:1,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
      {id:2,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',},
      {id:3,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
      {id:4,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
      {id:5,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
      {id:6,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
      {id:7,url:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000'},
    ],
    vetablesUrl:[
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
      'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navBarHeight:0,
    statusBarHeight:0,
    imgBaseUrl:imgBaseUrl,
    page:1,
    pageSize:5,
    isLoading:true,
    toBottom:false,
    floorstatus:false
    };
  },

  computed:{
    ...mapState([
      'bannerList',
      'homeGoodList',
      'homeGoodTotal',
      'topGoodList'
    ])
  },
  onReachBottom(){
    this.toBottom = true;
    ++ this.page ;
    let pageTotal = (Math.floor(Number(this.homeGoodTotal/this.pageSize)));
    if(this.page<pageTotal){
          this.getHomeGood();
    }else{
      this.isLoading = false;
    }
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

  beforeCreate() {
   
 },

 onLoad(){
   this.getBanner();
   this.getHomeGood();
   this.getTopGood()
 },
 onPageScroll: function (e) {
    this.floorstatus = e.scrollTop > 100?true:false;
  },

  methods: {
    ...mapMutations([
      'GET_GOOD_DET'
    ]),
    onChange(e) {
      const url = "../food/main";
      if (e.mp.detail == 1) {
        mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    gotoDetails(data){
      let datas = JSON.stringify(data)
      const url = "../dishDetail/main?data="+datas;
      mpvue.navigateTo({ url })
    },
    
    towerSwiper(list) {
      for (let i = 0; i < list.length; i++) {
        list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
        list[i].mLeft = i - parseInt(list.length / 2)
      };
      this.towerList = list;
    },

    getBanner(){
      let user = wx.getStorageSync("loginInfo");
      let data ={bannEnteUuid :user.enteUuid};
      this.$store.dispatch('getBanner',data) 
    },
    getHomeGood(){
      let user = wx.getStorageSync("loginInfo");
      let NowDate =new Date();
      let date1 = new Date(NowDate);
        date1.setDate(NowDate.getDate()-100);
      let date2 = new Date(NowDate);
        date2.setDate(NowDate.getDate()-3);
      let data = {
        guarUuid  :user.suseUuid,
        goodEnteUuid :user.enteUuid,
        starTime : formatDate(date1),
        endTime : formatDate(date2),
        page:this.page,
        pageSize:this.pageSize
      };
      this.$store.dispatch('getHomeGood',data)
    },
    getTopGood(){
      let user = wx.getStorageSync("loginInfo");
      let NowDate =new Date();
      let date1 = new Date(NowDate);
        date1.setDate(NowDate.getDate()-100);
      let date2 = new Date(NowDate);
        date2.setDate(NowDate.getDate()-3);
      let data = {
        guarUuid  :user.suseUuid,
        goodEnteUuid :user.enteUuid,
        starTime : formatDate(date1),
        endTime : formatDate(date2),
        page:this.page,
        pageSize:10
      };
      this.$store.dispatch('getTopGood',data)
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
    },
    async LikesClick(e){
      let user = wx.getStorageSync('loginInfo');
      let num = e.isLike==1?-1:1
      let data = {glreGoodUuid :e.goodUuid,guarUuid:user.suseUuid,num : num};
      let res =  await LikeGood(data);
      let {homeGoodList} = this;
      homeGoodList.forEach(item=>{
        if(item.goodUuid==e.goodUuid){
          item.isLike = e.isLike==1?0:1;
          item.like = e.isLike==1?++item.like:--item.like;
        }
      });
      this.homeGoodList = homeGoodList
    }
  },
};
</script>

<style scoped>
.box_item{
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
.jus_center{
  display: flex;
  justify-content: center
}
.line{
  height: 2rpx;
  background-color: #AAAAAA;
  width: 35vw;
}
.text{
  color: #AAAAAA;
  font-size: 28rpx;
  width: 20vw;
  padding: 0 15rpx
}
.img_item{
  width: 20vw;
  height: 19vw;
    padding: 15rpx;
}
.img_content{
  display: flex;
  overflow-x: scroll;
  padding: 10rpx;
  margin: 10rpx;
  background-color: white
}
.ve_item{
  width: 94vw;
  min-height: 400rpx; 
  margin: 0 auto
}
.fo_item{
    background-color: white;
    margin: 20rpx 0;
    box-shadow: 1rpx 1rpx 1rpx 1rpx #CCCCCC;
}
.food_name{
  font-size: 28rpx;
  padding: 20rpx 15rpx; 
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
