import {
    ADD_COUNT,
    GET_RECIPE,
    GET_RP_DETAIL,
    GET_USER_INFO,
    GET_PARENT_INFO,
    GET_STUDENT_INFO,
    GET_BANNER,
    GET_RPCOLLECT_LIST,
    GET_RPCOLLECT_DET 
} from './mutations-types.js';

export default{
    [ADD_COUNT](state){
        state.count+=2;
    },
    [GET_RECIPE](state,action){
        state.recipeList = action ;
    },
    [GET_RP_DETAIL](state,action){
        state.rpDetailList = action ;
    },
    [GET_USER_INFO](state,action){
        state.userInfo = action ;
    },
    [GET_PARENT_INFO](state,action){
        state.parentInfo = action ;
    },
    [GET_STUDENT_INFO](state,action){
        state.studentInfo =  action
    },
    [GET_BANNER](state,action){
        state.bannerList = action;
    },
    [GET_RPCOLLECT_LIST](state,action){
        state.rpCollectList = action
    },
    [GET_RPCOLLECT_DET](state,action){
        state.rpCollectDet = action
    }
    
}