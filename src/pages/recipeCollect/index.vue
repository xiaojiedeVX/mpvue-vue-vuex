<template>
  <div>
     <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
        <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
          <text class='icon-back'></text>
        </navigator>
        <div class='content' :style="{top:statusBarHeight+'px'}">菜谱收藏</div>
      </div>
    </div>


    <div v-for="(item,index) in rpCollectList" :key="index" @click="gotoDetail(item.menuUuid)">
      <div class="content_s">
        <div class="pa_t">
          <span class="cu-tag bg-cyan radius">推荐{{index+1}}</span>
          <span class="title_text" v-text="item.menuName"></span>
        </div>
        <div class="pa_title white_spa">
          <span class="font_24">材料:</span>
          <span class="font_24 color_aaa pal_5" v-text="item.menuMaterials"></span>
        </div>
        <div class="jus_center">
          <img src="http://inews.gtimg.com/newsapp_bt/0/8240028973/1000" alt style="width:100%;height:360rpx;padding:10rpx">
        </div>
        <div class="bottom">
          <div></div>
          <div style="padding:10rpx;align-items:center;display:flex">
            <view class="cu-capsule round" style="padding-right:5rpx">
              <view :class="['cu-tag',{'bg-grey':item.collect=='1'},{'bg-red':item.collect=='0'}]" @click.stop="collecClick(item.menuUuid)">
                <text class="icon-likefill"></text>
              </view>
              <view class="cu-tag line-blue">{{item.menuReadNumber}}阅读</view>
            </view>
            <!-- <span style="font-size:24rpx;color:#0079f3">{{item.readerNum}}阅读</span>
            <van-icon custom-class="btom" name="like-o" />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card";
import app from "../../App";
import {  getRecipe,collectRp } from '../../config/functions';
import {mapState, mapActions,mapMutations} from 'vuex'
const datas = app.getSysInfo();
export default {
  data() {
    return {
      active: 1,
      data: [
        {
          id: 1,
          name: "红烧肉",
          title:
            "主料：五花猪肉（什么是五花猪肉？就是那种一层肥的一层瘦的肉...",
          imgUrl: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
          readerNum: "300"
        },
        {
          id: 1,
          name: "外婆家的卤肉饭",
          title:
            "主料：我也不知道怎么做（什么是五花猪肉？就是那种一层肥的一层瘦的肉...",
          imgUrl: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
          readerNum: "700"
        },
        {
          id: 1,
          name: "老婆做的小火锅",
          title:
            "主料：吃吃吃吃就行了（什么是五花猪肉？就是那种一层肥的一层瘦的肉...",
          imgUrl: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
          readerNum: "20万+"
        },
        {
          id: 1,
          name: "蚂蚁上树",
          title: "主料：当然是蚂蚁啦（什么是蚂蚁？就是阿里巴巴你知道吗...",
          imgUrl: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
          readerNum: "5000"
        }
      ],
      navBarHeight: 0,
      statusBarHeight: 0,
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

  computed: {
    ...mapState([
        'rpCollectList'
    ]),
  },

  onShow(){
    this.getRecipeCollect();
  },

  methods: {
    ...mapMutations([
      'GET_RPCOLLECT_LIST',
    ]),
    onChange(e) {
      const url = "../home/main";
      if (e.mp.detail == 0) {
        mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      // throw {message: 'custom test'}
    },
    gotoDetail(id) {
      const url = "../recipeCollectDet/main?id="+id;
      mpvue.navigateTo({ url });
    },
    getRecipeCollect(){
      let user = wx.getStorageSync("loginInfo");
      let data ={menuEnteUuid:user.enteUuid};
      this.$store.dispatch('getRpCollect',data)
    },
    async collecClick(id){
      let user = wx.getStorageSync("loginInfo");
      let data = {mcolEnteUuid :user.enteUuid,mcolGuarUuid :user.suseUuid,mcolMenuUuid :id};
      await collectRp(data);
      let { rpCollectList } = this;
      rpCollectList.forEach(item=>{
        if(item.menuUuid==id){
          item.collect=!item.collect
        }
      });
      this.GET_RPCOLLECT_LIST(rpCollectList)
    }
  }
};
</script>

<style scoped>
.jus_center {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 24rpx;
  padding: 15rpx;
  color: #aaaaaa;
}
.clock {
  font-size: 28rpx;
  background-color: #cccccc;
  color: white;
  padding: 2rpx;
  text-align: center;
  width: 80rpx;
  margin: 5rpx auto;
}
.content_s {
  width: 94vw;
  margin: 30rpx auto;
  background-color: white;
  min-height: 540rpx;
}
.box_title {
  padding: 4rpx 25rpx;
  color: white;
  background-color: aquamarine;
  border-radius: 8rpx;
}
.title_text {
  color: #aaaaaa;
  margin-left: 5rpx;
}
.pa_t {
  padding: 20rpx 0rpx;
  border-bottom: 1rpx solid #ccc;
  width: 96%;
  margin: 0 auto;
}
.pa_title {
  padding: 14rpx 0rpx;
  width: 96%;
  margin: 0 auto;
}
.font_24 {
  font-size: 24rpx;
}
.color_aaa {
  color: #aaaaaa;
}
.white_spa {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.pal_5 {
  padding-left: 5rpx;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
</style>
<style>
.btom {
  padding: 3rpx 13rpx;
}
</style>

