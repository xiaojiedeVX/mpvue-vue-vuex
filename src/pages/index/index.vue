<template>
  <div>
    <div style="height: 100vh">
    <!-- opts 前面加冒号 -->
    <ff-canvas id="pieSelect" canvas-id="pieSelect" :opts="opts" />
  </div>
  </div>
</template>

<script>
import card from "@/components/card";
import F2 from "../../../static/libs/f2-canvas/lib/f2";

let chart = null;
function initChart(canvas, width, height) {
  var data = [
    { name: '芳华', percent: 0.4, a: '1' },
    { name: '妖猫传', percent: 0.2, a: '1' },
    { name: '机器之血', percent: 0.18, a: '1' },
    { name: '心理罪', percent: 0.15, a: '1' },
    { name: '寻梦环游记', percent: 0.05, a: '1' },
    { name: '其他', percent: 0.12, a: '1' }
  ];
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
    position: 'right'
  });
  chart.tooltip(false);
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
         this.setData({
           info: data.pencent
         })
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
        motto: "Hello World",
        opts: {
          // 使用延时初始化 -- 重要
          lazyLoad: true
        }
      };
    },

    components: {},

    methods: {

    },

    onLoad() {
      // 在 onLoad 内部通过id找到该组件, 然后调用该组件的初始化方法
      this.$mp.page.selectComponent('#pieSelect').init(initChart)
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
