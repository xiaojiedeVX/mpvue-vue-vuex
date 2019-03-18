import {ADD_COUNT} from './mutations-types.js'

export default {
    // async getVcode({commit}){
    //     let res = getVcode();
    //     commit(GET_UESR,res.data)
    // },
    Add({commit}){
        commit(ADD_COUNT)
    }
}