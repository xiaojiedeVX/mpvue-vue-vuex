<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
        <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
          <text class='icon-back'></text>
        </navigator>
        <div class='content' :style="{top:statusBarHeight+'px'}">菜谱详情</div>
      </div>
    </div>
      <div>
          <div class="content_s">
          <div class="pa_t">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <span class="cu-tag bg-cyan radius">推荐</span>
                <span class="title_text" v-text="rpDetailList.menuName"></span>
              </div>
              <div>
                <text @click="collectClick" :class="['icon-likefill',{'text-red':rpDetailList.collect==0},{'text-grey':rpDetailList.collect==1}]"></text>
              </div>
            </div>
          </div>
          <div class="cu-bar">
            <div class='action'>
              <text class='icon-title text-blue'></text>材料
            </div>
          </div>
          <div class='padding bg-white'>
            <div class='text-left padding' v-html="rpDetailList.menuMaterials"></div>
          </div>
           <div class="cu-bar margin-top">
            <div class='action'>
              <text class='icon-title text-blue'></text>做法
            </div>
          </div>
          <div class='padding bg-white' style="padding-bottom:30rpx">
            <div class='text-left padding' v-html="rpDetailList.menuDo"></div>
            <!-- <div class='text-left padding'>2.热锅凉油，待油轻微帽烟将冰糖加入并不停搅拌，你会发现开始晶莹的冰糖会变的象白糖，然后象黄糖，然后象红塘然后象……没有然后了！赶快加肉否则糖就糊了！你的铲子别停呀！继续搅拌！糖会挂在肉上很不均匀，别管它继续搅你的。这时糖会因为加热的原因均匀的挂在肉上。</div> -->
            <!-- <div class='text-left padding'>3.现在加水吧！末过肉即可，还有葱段姜片。大火烧开，改小火煮半个小时。</div> -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import card from "@/components/card";
import app from '../../App';
import {collectRp} from '../../config/functions';
import {mapState,mapMutations,mapActions} from 'vuex'
const datas  =  app.getSysInfo();
export default {
  data() {
    return {
      active:1,
      data:[
        {
          id:1,
          name:'红烧肉',
          title:'主料：五花猪肉（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
          readerNum:'300'
        },
        {
          id:1,
          name:'外婆家的卤肉饭',
          title:'主料：我也不知道怎么做（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
          readerNum:'700'
        },
        {
          id:1,
          name:'老婆做的小火锅',
          title:'主料：吃吃吃吃就行了（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
          readerNum:'20万+'
        },
        {
          id:1,
          name:'蚂蚁上树',
          title:'主料：当然是蚂蚁啦（什么是蚂蚁？就是阿里巴巴你知道吗...',
          imgUrl:'http://inews.gtimg.com/newsapp_bt/0/8240028973/1000',
          readerNum:'5000'
        },
      ],
    navBarHeight:0,
    statusBarHeight:0,
    Custom:wx.getMenuButtonBoundingClientRect(),
    recipeId:null
    };
  },

  computed:{
    ...mapState([
      'rpDetailList'
    ])
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
    // console.log(this)
  },

  onLoad(options){
    console.log(op)
    this.recipeId =  options.id;
    this.getRpDetail(options.id)
  },

  methods: {
    ...mapMutations([
      'GET_RP_DETAIL'
    ]),
    onChange(e) {
      const url = "../home/main";
      if(e.mp.detail==0){
         mpvue.switchTab({ url });
      }
    },
    clickHandle(ev) {
      // throw {message: 'custom test'}
    },
    getRpDetail(id){
      let user = wx.getStorageSync("loginInfo");
      let data = {menuUuid :id,menuEnteUuid :user.enteUuid};
      this.$store.dispatch('getRpDetail',data)
    },
    async collectClick(){
      let user = wx.getStorageSync("loginInfo");
      let data = {mcolMenuUuid :this.recipeId,mcolGuarUuid :user.suseUuid,mcolEnteUuid :user.enteUuid};
      await collectRp(data);
      let { rpDetailList } = this;
      rpDetailList.collect = !rpDetailList.collect;
      this.GET_RP_DETAIL(rpDetailList);
    }
  },

  mounted(){
    console.log(this)
  }

};
</script>

<style scoped>

.jus_center{
  display: flex;
  justify-content: center
}
.padding{
  padding: 0 30rpx
}

.title{
  font-size: 24rpx;
  padding: 15rpx;
  color: #aaaaaa
}
.clock{
  font-size: 28rpx;
  background-color: #cccccc;
  color: white;
  padding: 2rpx;
  text-align: center;
  width:80rpx;
  margin:5rpx auto;

}
.content_s{
  width: 94vw;
  margin: 30rpx auto;
  background-color: white;
  min-height: 60vh;
}
.box_title{
  padding: 4rpx 25rpx;
  color: white;
  background-color: aquamarine;
  border-radius:8rpx 
}
.title_text{
  color: #aaaaaa;
  margin-left: 5rpx
}
.pa_t{
  padding:20rpx 0rpx;
  border-bottom:1rpx solid #ccc;
  width: 96%;
  margin: 0 auto
}
.pa_title{
  padding:14rpx 0rpx;
  width: 96%;
  margin: 0 auto
}
.font_24{
  font-size: 24rpx
}
.color_aaa{
  color: #aaaaaa
}
.white_spa{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.pal_5{
  padding-left: 5rpx
}
.bottom{
  display: flex;
  justify-content: space-between
}
</style>
<style>
.btom{
  padding: 3rpx 13rpx;
}
</style>

