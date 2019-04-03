<template>
    <div>
        <div class="cu-custom" :style="{height: navBarHeight + 'px'}">
            <div class="cu-bar fixed bg-gradual-pink" :style="{height: navBarHeight + 'px',paddingTop:statusBarHeight + 'px'}">
                <navigator class='action' open-type="navigateBack" delta="1" hover-class="none" >
                <text class='icon-back'></text>
                </navigator>
                <div class='content' :style="{top:statusBarHeight+'px'}">家长信息</div>
            </div>
        </div>

        <div class="cu-card dynamic">
           <div class="cu-form-group">
              <div class='title'>姓名</div>
              <div></div>
              <div class='title' v-text="parentInfo.guarName"></div>
           </div>
            <div class="cu-form-group">
              <div class='title'>手机号码</div>
              <div placeholder="输入框带标签" class='radius' name='input'></div>
              <div class="cu-capsule radius">
                <div class='cu-tag bg-grey'>
                  <text class='icon-lock lg text-white'></text>
                </div>
                <div class="cu-tag line-grey" v-text="parentInfo.guarTel" >
                
                </div>
              </div>
            </div>
        </div>

        <div class="text-center text-xs text-grey margin">
            tips: 手机号为分配帐号，姓名为分配账号直接绑定，不可修改。
        </div>
        
    </div>
</template>


<script>
import app from '../../App';
import {mapState,mapMutations,mapActions} from 'vuex';
const datas = app.getSysInfo();
export default {
    data(){
        return{
        navBarHeight:0,
        statusBarHeight:0,
        Custom:wx.getMenuButtonBoundingClientRect()
    };
  },

  computed:{
    ...mapState([
      'parentInfo'
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
  
  onLoad(){
    this.getParentInfo();
  },
  methods:{
    getParentInfo(){
      let user = wx.getStorageSync("loginInfo");
      let data = {guarEnteUuid :user.enteUuid,guarUuid :user.suseUuid};
      this.$store.dispatch('getParentInfo',data)
    }
  },
}
</script>

<style scoped>

</style>
