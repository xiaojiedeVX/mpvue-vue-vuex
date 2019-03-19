<template>
  <div>
      <div>
          <div class="title">*菜谱推荐为每日提供的菜品，互相组合，煎、炸、烹、炒后的成菜</div>
          <div class="clock">12:00</div>
      </div>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      active:1
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


.title{
  font-size: 24rpx;
  padding: 15rpx
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
</style>
