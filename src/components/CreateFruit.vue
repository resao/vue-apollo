<template>
  <div class="add-fruits">
    <h2>Add Fruit</h2>
    <form v-on:submit.prevent="addFruit">
      <input type="text" v-model="name"/>
      <button type="submit">Add</button>
    </form>
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
  methods: {
    addFruit () {
      this.$store.dispatch(types.CREATE_FRUIT, this.name)
    }
  }
}
</script>
