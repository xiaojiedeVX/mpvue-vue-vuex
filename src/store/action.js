import {
    ADD_COUNT,
    GET_RECIPE
} from './mutations-types.js'
import { getRecipe } from '../config/functions.js';

export default {
    // async getVcode({commit}){
    //     let res = getVcode();
    //     commit(GET_UESR,res.data)
    // },
    Add({commit}){
        commit(ADD_COUNT)
    },
    async getRecipe({commit},data){
        console.log(data)
        let res = await getRecipe(data);
        commit(GET_RECIPE,res);
    }
}