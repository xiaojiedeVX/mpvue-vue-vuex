<template>
  <div>
    <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
      <div
        class="cu-bar fixed bg-gradual-pink"
        :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}"
      >
        <navigator class="action" open-type="navigateBack" delta="1" hover-class="none">
          <text class="icon-back"></text>
        </navigator>
        <div class="content" :style="{top:statusBarHeight+'px'}">食材详情</div>
      </div>
    </div>
    <div>
      <img :src="foodGoodDet.goodImage?imgBaseUrl + foodGoodDet.goodImage:null" alt="" mode="aspectFill"  style="width:100%;height:370rpx">
    </div>
    <div style="background:white">
      <div class="wid_96 font_30">
        <div class="pa_10 border" v-text="foodGoodDet.goodName"></div>
        <div class="pa_10">商品成分</div>
        <div v-if="!picImg&&!noData" style="height: 30vh" >
        <!-- opts 前面加冒号 -->
          <ff-canvas id="pieSelect" canvas-id="pieSelect" :opts="opts"/>
        </div>
        <div v-else-if="picImg&&!noData" style="height:30vh" >
          <!-- opts 前面加冒号 -->
            <img :src="picImg" alt="" style="width:100vw;height:30vh">
        </div>
        <div v-else  style="height:30vh;line-height:30vh;text-align:center;font-size:18px" >
          <!-- opts 前面加冒号 -->
           暂时没有数据喔٩( 'ω' )و 
        </div>
      </div>
    </div>
    <div class="cu-list menu" style="margin-top:30rpx">
      <div class="cu-item">
        <div class="content">
          <text>供 应 商：</text>
          <text class="text-grey" v-text="foodGoodDet.suppName"></text>
        </div>
      </div>
      <div class="cu-item">
        <div class="content">
          <text>配送公司：</text>
          <text class="text-grey" v-text="foodGoodDet.enteName">泉涌配送有限公司</text>
        </div>
        <!-- <div class="action">   //可显示公司logo  暂时保留
          <div class="cu-avatar-group">
            <div
              class="cu-avatar round sm"
              style="background-image:url(http://inews.gtimg.com/newsapp_bt/0/8240028973/1000);"
            ></div>
          </div>
        </div> -->
      </div>
      <div class="cu-item">
        <div class="content">
          <text>配送时间：</text>
          <text class="text-grey" v-text="foodGoodDet.time"></text>
        </div>
      </div>
      <div class="cu-item">
        <div class="content">
          <text>配送车辆：</text>
          <text class="text-grey" v-text="foodGoodDet.mcarPlate"></text>
        </div>
      </div>
      <div class="cu-item">
        <div class="content">
          <text>配送司机：</text>
          <text class="text-grey" v-text="foodGoodDet.driveName"></text>
        </div>
      </div>
      <div class="cu-item">
        <div class="content">
          <text>配送状态</text>
        </div>
      </div>
      <div class="bg-white padding">
        <div class="cu-steps text-xs">
          <div :class="index>num?class1:class2" v-for="(item,index) in numList" :key="index">
            <text :class="['num',{'err':num==0}]" :data-index="index+1"></text>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white min_height" style="margin-top:30rpx">
      <div class="cu-bar solid-bottom">
        <div class="action">
          <text class="icon-titles text-green"></text>作用
        </div>
      </div>
      <div class="padding text-df">
        <div style="min-height:30vh" v-if="foodGoodDet.gdetGoodEdibility" class="text-left padding" v-html="foodGoodDet.gdetGoodEdibility"></div>
        <div v-else  style="height:30vh;line-height:30vh;text-align:center;font-size:18px" >
          <!-- opts 前面加冒号 -->
           暂时没有数据喔٩( 'ω' )و 
        </div>
        <!-- <div class="text-left padding">2.白菜中含有的植物纤维、果胶和维生素等，有阻止肠道吸收胆固醇和胆酸汁的作用。对胆结石和动脉硬化患者有很好的防治作用。</div>
        <div class="text-left padding">3.维生素U对胃肠道黏膜有保护作用，对十二指肠溃疡及肾虚引起的腰酸腿痛患者有食疗作用。</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import app from "../../App";
import F2 from "../../../static/libs/f2-canvas/lib/f2";
import { imgBaseUrl } from '../../config/env';
import {mapState,mapMutations} from 'vuex'
const datas = app.getSysInfo();
let chart = null;
function initChart(canvas, width, height,data) {
  console.log(width,height)
  console.log(data)
  var chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data, {
    percent: {
      formatter: function formatter(val) {
        return val * 100 + '%';
      }
    }
  });
  chart.legend({
    position: 'left'
  });
  chart.tooltip(true);
  chart.coord('polar', {
    transposed: true,
    radius: 0.85,
    innerRadius: 0.618
  });
  chart.axis(false);
  chart
    .interval()
    .position('a*percent')
    .color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0'])
    .adjust('stack')
    .style({
      lineWidth: 1,
      stroke: '#fff',
      lineJoin: 'round',
      lineCap: 'round'
    });

  chart.interaction('pie-select', {
    cancelable: false, // 不允许取消选中
    animate: {
      duration: 300,
      easing: 'backOut'
    },
    onEnd(ev) {
      const { shape, data, shapeInfo, selected } = ev;
      if (shape) {
        if (selected) {

        }
      }
    }
  });

  chart.render();
  return chart;
}

export default {
  data() {
    return {
      active: 1,
      img: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
      img2: "http://inews.gtimg.com/newsapp_bt/0/8240028973/1000",
      class1: "cu-item",
      picImg:null,
      num: 0,
      class2: "cu-item text-blue",
      numList: [
        {
          name: "未配送"
        },
        {
          name: "已发货"
        },
        {
          name: "已收货"
        },
        {
          name: "订单完成"
        }
      ],
      navBarHeight: 0,
      statusBarHeight: 0,
      Custom: wx.getMenuButtonBoundingClientRect(),
      opts: {
          // 使用延时初始化 -- 重要
          lazyLoad: true
        },
    //   data : [
    //   { name: '维生素A', percent: 0.4, a: '1' },
    //   { name: '维生素B', percent: 0.2, a: '1' },
    //   { name: '维生素C', percent: 0.18, a: '1' },
    //   { name: '维生素D', percent: 0.15, a: '1' },
    //   { name: '维生素E', percent: 0.05, a: '1' },
    //   { name: '维生素F', percent: 0.12, a: '1' }
    // ],
    orderUuid :null,
    goodUuid :null,
    imgBaseUrl:imgBaseUrl,
    noData:false
    };
  },

  computed:{
    ...mapState([
      'foodGoodDet'
    ])
  },

  watch:{
    foodGoodDet(e){
      this.noData = false;
      if(e.goodNutrlist&&e.goodNutrlist.length>0){
        this.timerOut = setTimeout(()=>{
          this.$mp.page.selectComponent('#pieSelect').init((canvas, width, height)=>initChart(canvas, width, height,e.goodNutrlist),(res)=>{
              this.picImg = res;
              console.log(res)
        });
        },1000)
      }else{
        this.noData = true
      };
       this.num = e.ordeStatus;
    }
  },

  onLoad(options){
    let dataSource = JSON.parse(options.data)
    this.orderUuid = dataSource.orderUuid;
    this.goodUuid = dataSource.goodUuid;
    // this.getGoodDet();
  },

  onShow(){
    this.getGoodDet();
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
  mounted() {
      // 在 onLoad 内部通过id找到该组件, 然后调用该组件的初始化方法
    // this.$mp.page.selectComponent('#pieSelect').init((canvas, width, height)=>initChart(canvas, width, height,this.data),(res)=>{
    //   this.picImg = res;
    //   console.log(this)
    // });
       

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
    getGoodDet(){
      let user = wx.getStorageSync("loginInfo");
      let data = {guarUuid :user.suseUuid,orderUuid :this.orderUuid,goodUuid:this.goodUuid};
      this.$store.dispatch('getGoodDet',data);
    }
  }
};
</script>

<style scoped>
.min_height {
  min-height: 300rpx;
}
.wid_96 {
  width: 96%;
  margin: 0 auto;
}
.font_30 {
  font-size: 30rpx;
  color: #101010;
}
.pa_10 {
  padding: 10rpx;
}
.border {
  border-bottom: 1rpx solid #ccc;
}
</style>
<style>
.btom {
  padding: 3rpx 13rpx;
}
</style>

