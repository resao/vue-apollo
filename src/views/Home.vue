<template>
  <div class="home">
    <app-create-fruit></app-create-fruit>
    <app-fruit-list></app-fruit-list>
    <app-fruit-selector></app-fruit-selector>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList.vue'
import FruitSelector from '@/components/FruitSelector.vue'
import CreateFruit from '@/components/CreateFruit.vue'

export default {
  name: 'home',
  components: {
    appFruitList: FruitList,
    appFruitSelector: FruitSelector,
    appCreateFruit: CreateFruit
  }
}
</script>
