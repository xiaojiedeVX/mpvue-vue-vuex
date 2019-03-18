import {
	ADD_COUNT,
} from './mutations-types.js';

export default{
    [ADD_COUNT](state){
        state.count+=2;
    }
}