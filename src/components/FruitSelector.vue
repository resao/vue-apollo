<template>
  <div class="selected-fruits">
    <h2>Selected Fruits</h2>
    <form v-on:submit.prevent="selectFruit">
      <input type="text" v-model="name"/>
      <button type="submit">Select</button>
    </form>
    <ul v-if="selectedFruits">
      <li v-for="fruit in selectedFruits" :key="fruit.id">{{fruit.name}} <em v-if="fruit.color">{{fruit.color.name}}</em></li>
    </ul>
  </div>
</template>
<script>

import * as types from '@/store/modules/fruit/types'

export default {
  data: function () {
    return {
      name: ''
    }
  },
  computed: {
    selectedFruits () {
      return this.$store.getters.selectedFruits
    }
  },
  methods: {
    selectFruit () {
      this.$store.dispatch(types.FETCH_FRUIT_BY_NAME, this.name)
    }
  }
}
</script>
