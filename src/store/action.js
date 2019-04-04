import {
    ADD_COUNT,
    GET_RECIPE,
    GET_RP_DETAIL,
    GET_USER_INFO,
    GET_PARENT_INFO,
    GET_STUDENT_INFO,
    GET_BANNER,
    GET_RPCOLLECT_LIST,
    GET_RPCOLLECT_DET,
    GET_HOME_GOOG,
    GET_FOOD_GOOD,
    GET_TOP_GOOD,
    GET_GOOD_DET
} from './mutations-types.js'
import { 
    getRecipe,
    getRpDetail,
    getUserInfo,
    getParentInfo,
    getStutentInfo,
    getBanner,
    getRpCollect,
    getRpCollectDet,
    getHomeGood,
    getGoodDet
 } from '../config/functions.js';

export default {
    // async getVcode({commit}){
    //     let res = getVcode();
    //     commit(GET_UESR,res.data)
    // },
    Add({commit}){
        commit(ADD_COUNT)
    },
    async getRecipe({commit},data){
        let res = await getRecipe(data);
        commit(GET_RECIPE,res);
    },
    async getRpDetail({commit},data){
        let res = await getRpDetail(data);
        commit(GET_RP_DETAIL,res)
    },
    async getUserInfo({commit},data){
        let res = await getUserInfo(data);
        commit(GET_USER_INFO,res)
    },
    async getParentInfo({commit},data){
        let res = await getParentInfo(data);
        commit(GET_PARENT_INFO,res)
    },
    async getStutentInfo({commit},data){
        let res = await getStutentInfo(data);
        commit(GET_STUDENT_INFO,res)
    },
    async getBanner({commit},data){
        let res = await getBanner(data);
        commit(GET_BANNER,res)
    },
    async getRpCollect({commit},data){
        let res = await getRpCollect(data)
        commit(GET_RPCOLLECT_LIST,res)
    },
    async getRpCollectDet({commit},data){
        let res = await getRpCollectDet(data);
        commit(GET_RPCOLLECT_DET,res)
    },
    async getHomeGood({commit},data){
        let page = data.page;
        let pageSize = data.pageSize;
        delete data.page;
        delete data.pageSize;
        let res = await getHomeGood(data,page,pageSize);
        commit(GET_HOME_GOOG,res)
    },
    async getTopGood({commit},data){
        let page = data.page;
        let pageSize = data.pageSize;
        delete data.page;
        delete data.pageSize;
        let res = await getHomeGood(data,page,pageSize);
        commit(GET_TOP_GOOD,res)
    },
    async getFoodGood({commit},data){
        let page = data.page;
        let pageSize = data.pageSize;
        delete data.page;
        delete data.pageSize;
        let res = await getHomeGood(data,page,pageSize);
        commit(GET_FOOD_GOOD,res)
    },
    async getGoodDet({commit},data){
        let res = await getGoodDet(data);
        commit(GET_GOOD_DET,res)
    } 
}