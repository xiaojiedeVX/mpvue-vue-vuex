<template>
  <div>
      <div v-for="(item,index) in data" :key="index">
        <div class="content">
          <div class="card_top">
            <img src="http://sowcar.com/t6/686/1552982484x986907160.jpg" alt="" style="width:80rpx;height:80rpx;border-radius:50%;margin:10rpx">
            <div class="tilte">
                <div style="font-size:30rpx">泉涌生鲜</div>
                <div style="font-size:24rpx;color:#0079f3">2019-03-13</div>
            </div>
          </div>
          <div class="food_name" v-text="item"></div>
          <img src="http://sowcar.com/t6/686/1552984398x986907142.jpg" style="width:97%;height:360rpx;padding:10rpx" alt="">
          <div class="fl_right">
            <div></div>
             <div style="font-size:24rpx;color:#0079f3;padding:10rpx">330阅读</div>
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
      data:['泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不','泉涌生鲜的大大白菜你信不']
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
.content{
  width: 94vw;
  margin: 30rpx auto;
  background-color: white;
  min-height: 540rpx;
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

}

</style>
