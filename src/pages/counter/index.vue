<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
// Use Vuex
import { mapState,mapMutations } from 'vuex';
import  {ADD_COUNT}  from '../../store/mutations-types.js'
export default {
  computed: {
    count () {
      
    }
  },

  computed:{
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([ADD_COUNT]),
    increment () {
      this.ADD_COUNT();
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
