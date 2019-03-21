<template>
    <div>
        <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
            <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
                <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
                <text class='icon-back'></text>
                </navigator>
                <div class='content' :style="{top:statusBarHeight+'px'}">密码修改</div>
            </div>
        </div>
        <div class="contents solid-bottom text-df padding" style="padding:20rpx 0rpx">
            请设置鲜直达+密码，密码必须为8~16位英文、数字组合（不能是纯数字）。请您牢记密码，不要将密码告知他人。
        </div>
        <div>
            <div class="cu-form-group">
                <div class='title'>手机账号</div>
                <input placeholder="13368856413" disabled class='radius' name='input'/>
            </div>
            <div class="cu-form-group">
                <div class='title'>原 密 码</div>
                <input placeholder="请输入原密码"  class='radius' name='input'/>
            </div>
            <div class="cu-form-group">
                <div class='title'>新 密 码</div>
                <input placeholder="请输入新密码"  class='radius' name='input'/>
            </div>
            <div class="cu-form-group">
                <div class='title'>确认密码</div>
                <input placeholder="请确认密码" disabled class='radius' name='input'/>
            </div>
            <div class="padding flex flex-direction" @click="showModal">
            <button class='cu-btn bg-blue margin-tb-sm lg'>确认修改</button>
            </div>
        </div>
        <!-- 确认窗口 -->
         <div :class="['cu-modal',{'show':IsshowModal}]">
             <div class="cu-dialog">
                 <div class="cu-bar bg-white justify-end">
                 <div class='content'>确认修改密码</div>
                 <div class='action' bindtap='hideModal'>
                     <text class='icon-close text-red'></text>
                 </div>
                 </div>
                 <div class='padding-xl'>
                     修改密码后请用新密码登录
                 </div>
                 <div class="cu-bar bg-white justify-end">
                 <div class='action'>
                     <button class='cu-btn line-green text-green' @click='hideModal'>取消</button>
                     <button class='cu-btn bg-green margin-left' @click='hideModal'>确定</button>
                 </div>
                 </div>
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
        ],
        IsshowModal:false
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
      },
      hideModal(){
          this.IsshowModal = false;
      },
      showModal(){
          this.IsshowModal = true;
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
    .contents{
        width: 96%;
        margin: 0 auto;
    }
</style>
