<template>
  <div>
    <div class="cu-list menu menu-avatar">
      <div class="cu-item">
        <div
          class="cu-avatar round lg"
          style="background-image:url(https://image.weilanwl.com/img/square-1.jpg);"
        ></div>
        <div class="content">
          <div class="text-grey">系统消息</div>
          <div class="text-gray text-sm">
            <text class="icon-infofill text-red"></text>消息未送达
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-grey sm">5</div>
        </div>
      </div>
      <div class="cu-item">
        <div
          class="cu-avatar round lg"
          style="background-image:url(https://image.weilanwl.com/img/square-2.jpg);"
        >
          <div class="cu-tag badge">99+</div>
        </div>
        <div class="content">
          <div class="text-grey">系统消息
            <div class="cu-tag round bg-orange sm">SVIP</div>
          </div>
          <div class="text-gray text-sm">
            <text class="icon-redpacket_fill text-red"></text>收到红包
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="icon-notice_forbid_fill text-gray"></div>
        </div>
      </div>
      <div class="cu-item">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
        ></div>
        <div class="content">
          <div>鲜直达互动群</div>
          <div class="text-gray text-sm">老大：三年上市</div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-red sm">5</div>
        </div>
      </div>
      <div class="cu-item grayscale">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-3.jpg);"
        ></div>
        <div class="content">
          <div>内部群</div>
          <div class="text-gray text-sm">各位老总：明天涨工资</div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="cu-tag round bg-red sm">5</div>
        </div>
      </div>
      <div class="cu-item cur">
        <div
          class="cu-avatar radius lg"
          style="background-image:url(https://image.weilanwl.com/img/square-4.jpg);"
        >
          <div class="cu-tag badge"></div>
        </div>
        <div class="content">
          <div>你懂得
            <div class="cu-tag round bg-orange sm">6人</div>
          </div>
          <div class="text-gray text-sm">番茄一号：
            <text class="icon-picfill text-orange"></text>图片传输中...
          </div>
        </div>
        <div class="action">
          <div class="text-grey text-xs">22:20</div>
          <div class="icon-notice_forbid_fill text-gray"></div>
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
      active: 1
    };
  },

  components: {
    card
  },

  methods: {
    onChange(e) {
      console.log(e.mp.detail);
      const url = "../home/main";
      if (e.mp.detail == 0) {
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
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
