import * as types from './types'

export default {
  [types.MUTATE_FRUITS]: (state, fruits) => {
    state.fruits = fruits
  }
}
