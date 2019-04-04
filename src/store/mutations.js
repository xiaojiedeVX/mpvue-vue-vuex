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
    GET_HOME_GOOG ,
    GET_FOOD_GOOD,
    GET_TOP_GOOD,
    GET_GOOD_DET 
} from './mutations-types.js';

export default{
    [ADD_COUNT](state){
        state.count+=2;
    },
    [GET_RECIPE](state,action){
        state.recipeList = action.params ;
    },
    [GET_RP_DETAIL](state,action){
        state.rpDetailList = action.params ;
    },
    [GET_USER_INFO](state,action){
        state.userInfo = action.params ;
    },
    [GET_PARENT_INFO](state,action){
        state.parentInfo = action.params ;
    },
    [GET_STUDENT_INFO](state,action){
        state.studentInfo =  action.params||action
    },
    [GET_BANNER](state,action){
        state.bannerList = action.params;
    },
    [GET_RPCOLLECT_LIST](state,action){
        state.rpCollectList = action.params
    },
    [GET_RPCOLLECT_DET](state,action){
        state.rpCollectDet = action.params
    },
    [GET_HOME_GOOG](state,action){
        state.homeGoodTotal = action.total||0
        if(action.page<=1){
            state.homeGoodList = action.params||[];
        }else{
            state.homeGoodList = state.homeGoodList.concat(action.params)
        }      
    },
    [GET_FOOD_GOOD](state,action){
        state.foodGoodTotal = action.total||0
        if(action.page<=1){
            state.foodGoodList = action.params||[];
        }else{
            state.foodGoodList = state.foodGoodList.concat(action.params)
        }  
    },
    [GET_TOP_GOOD](state,action){
        state.topGoodList = action.params
    },
    [GET_GOOD_DET](state,action){
        state.foodGoodDet = action.params;
    }
    
}