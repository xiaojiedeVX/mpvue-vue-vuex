<template>
  <div>
      <div>
          <div class="title">*菜谱推荐为每日提供的菜品，互相组合，煎、炸、烹、炒后的成菜</div>
          <div class="clock">12:00</div>
      </div>

      <div v-for="(item,index) in data" :key="index">
        <div class="cu-card article">
          <div class="cu-item shadow">
            <div class="title">
              <span class='cu-tag bg-cyan radius'> 推荐{{index+1}} </span>
              <span style="padding-left:15rpx" v-text="item.name"></span>
            </div>
            <div class="content">
              <img :src="item.imgUrl" mode="aspectFill"/>
              <div class="desc">
                <div class='text-content'  v-text="item.title"></div>
                <div>
                  <!-- <div class='cu-tag bg-red light sm round'>荤菜系列</div> -->
                  <div class='cu-tag bg-green light sm round'>荤菜系列</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(item,index) in data" :key="index">
          <div class="content_s">
          <div class="pa_t">
            <span class="box_title">推荐{{index+1}}</span>
            <span class="title_text" v-text="item.name"></span>
          </div>
           <div  class="pa_title white_spa">
            <span class="font_24">材料:</span>
            <span class="font_24 color_aaa pal_5" v-text="item.title"></span>
          </div>
          <div class="jus_center">
            <img :src="item.imgUrl" alt="" style="width:100%;height:360rpx;padding:10rpx">
          </div>
          <div class="bottom">
            <div></div>
            <div style="padding:10rpx;align-items:center;display:flex">
               <view class="cu-capsule round" style="padding-right:5rpx"> 
                  <view class='cu-tag bg-grey '>
                    <text class='icon-likefill'></text>
                  </view>
                  <view class="cu-tag line-blue">
                    {{item.readerNum}}阅读
                  </view>
                </view>
              <!-- <span style="font-size:24rpx;color:#0079f3">{{item.readerNum}}阅读</span>
              <van-icon custom-class="btom" name="like-o" /> -->
            </div>
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
      data:[
        {
          id:1,
          name:'红烧肉',
          title:'主料：五花猪肉（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://sowcar.com/t6/686/1552984398x986907142.jpg',
          readerNum:'300'
        },
        {
          id:1,
          name:'外婆家的卤肉饭',
          title:'主料：我也不知道怎么做（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://sowcar.com/t6/686/1552984398x986907142.jpg',
          readerNum:'700'
        },
        {
          id:1,
          name:'老婆做的小火锅',
          title:'主料：吃吃吃吃就行了（什么是五花猪肉？就是那种一层肥的一层瘦的肉...',
          imgUrl:'http://sowcar.com/t6/686/1552984398x986907142.jpg',
          readerNum:'20万+'
        },
        {
          id:1,
          name:'蚂蚁上树',
          title:'主料：当然是蚂蚁啦（什么是蚂蚁？就是阿里巴巴你知道吗...',
          imgUrl:'http://sowcar.com/t6/686/1552984398x986907142.jpg',
          readerNum:'5000'
        },
      ]
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

.jus_center{
  display: flex;
  justify-content: center
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
  min-height: 540rpx;
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

