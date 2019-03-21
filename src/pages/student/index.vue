<template>
    <div>
        <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
            <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
                <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
                <text class='icon-back'></text>
                </navigator>
                <div class='content' :style="{top:statusBarHeight+'px'}">请选定学生</div>
            </div>
        </div>
        <div :class="['cu-card','article','no-card','margin_30',{'border_b':item.isSelect==true}]" @click="toggleTab(item.id)" v-for="(item,index) in list" :key="index">
             <div class="cu-form-group ">
                <div class='title'>学校</div>
                <div></div>
                <div class='title'>马岭镇中心幼儿园</div>
             </div>
             <div class="cu-form-group ">
                <div class='title'>班级</div>
                <div></div>
                <div class='title'>大（{{item.id}}）班</div>
             </div>
             <div class="cu-form-group ">
                <div class='title'>姓名</div>
                <div></div>
                <div class='title'>测试姓名{{item.id}}</div>
             </div>
        </div>
    </div>
</template>


<script>
import app from '../../App';
const datas = app.getSysInfo();
export default {
    data(){
        return{
        navBarHeight:0,
        statusBarHeight:0,
        Custom:wx.getMenuButtonBoundingClientRect(),
        list:[
            {id:1,isSelect:true},
            {id:2,isSelect:false},
            {id:3,isSelect:false},
        ]
    };
  },

  created(){
    console.log(datas)
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
  methods:{
      toggleTab(id){
          let list =  this.list;
          this.list.map(item=>{
              item.isSelect = false
              if(item.id == id){item.isSelect = true}
          });
          this.list = list;
          console.log(id)
      }
  }

}
</script>

<style scoped>
    .margin_30{
        margin: 30rpx;
    }
    .border_b{
        border: 5rpx dashed salmon
    }
</style>
