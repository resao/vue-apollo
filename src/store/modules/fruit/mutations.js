import * as types from './types'

export default {
  [types.MUTATE_FRUITS]: (state, fruits) => {
    state.fruits = fruits
  },
  [types.MUTATE_SELECTED_FRUITS]: (state, fruits) => {
    state.selectedFruits = fruits
  },
  [types.MUTATE_CREATE_FRUIT]: (state, fruit) => {
    let fruits = state.fruits.slice()
    fruits.push(fruit)
    state.fruits = fruits
  }
}
