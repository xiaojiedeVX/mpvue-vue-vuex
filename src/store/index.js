import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	count: 1, // 当前数值,
	recipeList:[],
	rpDetailList:[],
	userInfo:{},
	parentInfo:{},
	studentInfo:[],
	bannerList:[],
	rpCollectList:[],
	rpCollectDet:[],
	homeGoodList:[],
	foodGoodList:[],
	homeGoodTotal:0,
	topGoodList:[],
	foodGoodTotal:0,
	foodGoodDet:[]
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})