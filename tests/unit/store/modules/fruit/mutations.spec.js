import mutations from '@/store/modules/fruit/mutations'
import * as types from '@/store/modules/fruit/types'
import { allFruitsMock } from '../../../../mocks/allFruitsMock'

it('should set state.fruits', () => {
  const state = {
    fruits: ''
  }
  mutations[types.MUTATE_FRUITS](state, allFruitsMock)
  expect(state.fruits).toEqual(allFruitsMock)
})
