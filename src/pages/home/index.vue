<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div class="cu-bar fixed bg-gradual-blue" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px',textAlign:'center'}">
         <div class="action"  hover-class="none"  style="margi-left:30rpx">首页</div>
      </div>
    </div>
    <div>
       <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      style="height:50vw"
      >
      <block v-for="(img,index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="img" class="slide-image" style="width:100%;height:50vw"/>
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
      <div v-for="(item,index) in foodUrls" :key="index">
        <img @click="gotoDetails" :src="item.url" class="img_item" alt="">
      </div>
    </div>
 
    <div class="box_item">
        <div class="line"></div>
        <div class="text">生鲜供应</div>
        <div class="line"></div>
    </div>
    <div v-for="(img,index) in vetablesUrl" :key="index">
      <div class="cu-card case">
      <div class="cu-item shadow">
        <div class='image'>
          <image :src="img" mode="widthFix"></image>
          <!-- <div class="cu-tag bg-blue">泉涌大大白菜</div> -->
          <div class='cu-bar bg-shadeBottom'>泉涌大白菜是怎么怎么的好</div>
        </div>
        <div class="cu-list menu menu-avatar">
          <div class="cu-item" style="padding-left:15rpx">
            <!-- <div class="cu-avatar round lg" style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></div> -->
            <div class='content flex-sub'>
              <div class='text-grey'>泉涌大大白菜</div>
              <div class='text-gray text-sm flex justify-between'>
                2018-08-19
                <div class="text-gray text-sm">
                  <text class="icon-attentionfill"></text> 10
                  <text class="icon-appreciatefill"></text> 20
                  <!-- <text class="icon-messagefill"></text> 30 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="ve_item">
       <div class="fo_item" v-for="(img,index) in vetablesUrl" :key="index">
         <div class="jus_center">
           <img :src="img" alt="" style="width:100%;height:380rpx;padding:10rpx">
         </div>
        <div class="food_name">大白菜</div>
      </div>
    </div>
    <!-- <div class="ve_item">
      <div class="fo_item" v-for="(img,index) in vetablesUrl" :key="index">
        <img :src="img" alt="" style="width:94vw;height:400rpx">
        <div>大白菜</div>
      </div>
    </div> -->

  </div>
</template>

<script>
import app from "../../App";
const datas = app.getSysInfo();
export default {
  
  data() {
    return {
      active: 0,
      towerList:[],
      imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    foodUrls:[
      {id:1,url:'http://sowcar.com/t6/686/1552985855x986907160.jpg'},
      {id:2,url:'http://sowcar.com/t6/686/1552982484x986907160.jpg',},
      {id:3,url:'http://sowcar.com/t6/686/1552985881x986907160.jpg'},
      {id:4,url:'http://sowcar.com/t6/686/1552985855x986907160.jpg'},
      {id:5,url:'http://sowcar.com/t6/686/1552985921x986907160.jpg'},
      {id:6,url:'http://sowcar.com/t6/686/1552982484x986907160.jpg'},
      {id:7,url:'http://sowcar.com/t6/686/1552982484x986907160.jpg'},
    ],
    vetablesUrl:[
      'http://sowcar.com/t6/686/1552984398x986907142.jpg',
      'http://sowcar.com/t6/686/1552984423x986907142.jpg',
      'http://sowcar.com/t6/686/1552984440x986907142.jpg',
      'http://sowcar.com/t6/686/1552981748x986907160.jpg',
      'http://sowcar.com/t6/686/1552981748x986907160.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
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
    this.towerSwiper(this.foodUrls);
  },

  beforeCreate() {
   
 },

  methods: {
    onChange(e) {
      const url = "../food/main";
      if (e.mp.detail == 1) {
        console.log(e.mp.detail);
        mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    gotoDetails(){
      const url = "../dishDetail/main";
      mpvue.navigateTo({ url })
    },
    
  towerSwiper(list) {
    console.log(list)
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    };
    this.towerList = list;
  },
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
</style>
