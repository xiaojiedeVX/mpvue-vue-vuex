<template>
  <div>
      <div>
        <image style="width:100%" :src="img" mode="widthFix"></image>
      </div>
       <div style="background:white">
         <div class="wid_96 font_30">
            <div class='pa_10 border'>泉湧的大大大白菜</div>
            <div class="pa_10">營養佔比</div>
            <div style="display:flex;justify-content:center">
              <img :src="img2" style="width:50vw;height:50vw" alt='圖片图片'>
            </div>
         </div>
       </div>
       <div class="cu-list menu" style="margin-top:30rpx" >
          <div class="cu-item">
            <div class='content'>
              <text>供应商：</text>
              <text class='text-grey'>某某某供应商</text>
            </div>
          </div>
          <div class="cu-item">
            <div class='content'>
              <text>配送公司：</text>
              <text class='text-grey'>泉涌配送有限公司</text>
            </div>
            <div class='action'>
              <div class="cu-avatar-group">
                <div class="cu-avatar round sm" style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"></div>
              </div>
            </div>
          </div>
          <div class="cu-item">
            <div class='content'>
              <text>配送时间：</text>
              <text class='text-grey'>2018-11-11</text>
            </div>
          </div>
          <div class="cu-item">
            <div class='content'>
              <text>配送车辆：</text>
              <text class='text-grey'>冷链车辆贵A8888888</text>
            </div>
          </div>
          <div class="cu-item">
            <div class='content'>
              <text>配送司机：</text>
              <text class='text-grey'>帅气司机A</text>
            </div>
          </div>
            <div class="cu-item">
              <div class='content'>
                <text>配送状态</text>
              </div>
            </div>
            <div class='bg-white padding'>
              <div class='cu-steps'>
                <div :class='index>num?class1:class2'  v-for="(item,index) in numList" :key="index">
                  <text class='num' :data-index="index+1"></text> {{item.name}}
                </div>
              </div>
            </div>
        </div>
        <div class="bg-white min_height" style="margin-top:30rpx">
            <div class="cu-bar  solid-bottom">
              <div class='action'>
                <text class='icon-titles text-green'></text>食用价值
              </div>
            </div>
            <div class='padding'>
              <div class='text-left padding'>1.白菜能通肠利胃，除烦解渴，益肾填髓，可以消食下气，止咳解酒。</div>
              <div class='text-left padding'>2.白菜中含有的植物纤维、果胶和维生素等，有阻止肠道吸收胆固醇和胆酸汁的作用。对胆结石和动脉硬化患者有很好的防治作用。</div>
              <div class='text-left padding'>3.维生素U对胃肠道黏膜有保护作用，对十二指肠溃疡及肾虚引起的腰酸腿痛患者有食疗作用。</div>
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
      img:'http://sowcar.com/t6/686/1552984398x986907142.jpg',
      img2:'http://sowcar.com/t6/686/1553054067x986907220.png',
      class1:'cu-item',
      num: 0,
      class2:'cu-item text-blue',
       numList: [{
            name: '未配送'
          }, {
            name: '开始配送'
          }, {
            name: '配送中'
          }, {
            name: '已完成'
          },],
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
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.min_height{
  min-height: 300rpx
}
.wid_96{
  width: 96%;
  margin: 0 auto;
}
.font_30{
  font-size: 30rpx;
  color:#101010
}
.pa_10{
  padding: 10rpx;
}
.border{
   border-bottom:1rpx solid #ccc 
}
</style>
<style>
.btom{
  padding: 3rpx 13rpx;
}
</style>

