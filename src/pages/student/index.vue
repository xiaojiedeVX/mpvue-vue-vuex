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
        <div class="content" :style="{top:statusBarHeight+'px'}">请选定学生</div>
      </div>
    </div>
    <div
      :class="['cu-card','article','no-card','margin_30',{'border_b':item.studDefault==0}]"
      @click="toggleTab(item.studUuid)"
      v-for="(item,index) in studentInfo"
      :key="index"
    >
      <div class="cu-form-group">
        <div class="title">学校</div>
        <div></div>
        <div class="title">{{item.schoolName}}</div>
      </div>
      <div class="cu-form-group">
        <div class="title">班级</div>
        <div></div>
        <div class="title">{{item.studClass}}</div>
      </div>
      <div class="cu-form-group">
        <div class="title">姓名</div>
        <div></div>
        <div class="title">{{item.studName}}</div>
      </div>
    </div>
      <div class="text-center text-xs text-grey margin">
            tips: 点击切换当前账号绑定学生。
        </div>
  </div>
</template>


<script>
import app from "../../App";
import { mapState, mapMutations } from "vuex";
import {setDefaultStudent} from '../../config/functions'
const datas = app.getSysInfo();
export default {
  data() {
    return {
      navBarHeight: 0,
      statusBarHeight: 0,
      Custom: wx.getMenuButtonBoundingClientRect(),
      list: [
        { id: 1, isSelect: true },
        { id: 2, isSelect: false },
        { id: 3, isSelect: false }
      ]
    };
  },

  computed: {
      ...mapState([
          'studentInfo'
      ])
  },

  onLoad(){
      this.getStudent();
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
    // console.log(this)
  },
  methods: {
    ...mapMutations([
        'GET_STUDENT_INFO'
    ]),
    toggleTab(id) {
    //   let list = this.list;
    //   this.list.map(item => {
    //     item.isSelect = false;
    //     if (item.id == id) {
    //       item.isSelect = true;
    //     }
    //   });
    //   this.list = list;
     this.setDefaultStudent(id);
    },
    getStudent(){
        let user = wx.getStorageSync("loginInfo");
        let data = {guarEnteUuid:user.enteUuid,guarUuid:user.suseUuid}; 
        this.$store.dispatch('getStutentInfo',data)
    },
    async setDefaultStudent(id){
        let user = wx.getStorageSync("loginInfo");
        let datas = {studEnteUuid :user.enteUuid,studUuid :id};
        let res = await setDefaultStudent(datas);
        let { studentInfo } = this ;
        studentInfo.forEach(item=>{
            if(item.studUuid==id){
                item.studDefault = 0;
            }else{
                item.studDefault = 1;
            }
        });
        this.GET_STUDENT_INFO(studentInfo)
    }
  },
    mounted(){
    console.log(this);
  }
};
</script>

<style scoped>
.margin_30 {
  margin: 30rpx;
}
.border_b {
  border: 5rpx dashed salmon;
}
</style>
