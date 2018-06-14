import apolloClient from '@/apollo/index.js'
import { queryAllFruit } from '@/apollo/queries/fruit.js'
import * as types from './types'

export default {
  [types.FETCH_FRUITS]: (context) => {
    apolloClient.query({
      query: queryAllFruit
    }).then(({data}) => {
      context.commit(types.MUTATE_FRUITS, data.allFruits)
    })
  }
}
