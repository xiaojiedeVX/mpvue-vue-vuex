import {
    ADD_COUNT,
    GET_RECIPE,
} from './mutations-types.js';

export default{
    [ADD_COUNT](state){
        state.count+=2;
    },
    [GET_RECIPE](state,action){
        state.recipeList = action
    },
}