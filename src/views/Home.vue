<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul v-if="fruits">
      <li v-for="fruit in fruits" :key="fruit.id">{{fruit.name}} <em v-if="fruit.color">{{fruit.color.name}}</em></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    fruits () {
      return this.$store.state.fruits
    }
  },
  created () {
    this.$store.dispatch('getFruits')
  }
}
</script>
