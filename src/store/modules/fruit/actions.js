import apolloClient from '@/apollo/index.js'
import allFruit from '@/graphql/queries/allFruit.gql'
import fruitByName from '@/graphql/queries/fruitByName.gql'
import createFruit from '@/graphql/mutations/createFruit.gql'
import * as types from './types'

export default {
  [types.FETCH_FRUITS]: (context) => {
    apolloClient.query({
      query: allFruit
    }).then(({ data }) => {
      context.commit(types.MUTATE_FRUITS, data.allFruits)
    })
  },
  [types.FETCH_FRUIT_BY_NAME]: (context, name) => {
    apolloClient.query({
      query: fruitByName,
      variables: {
        name: name
      }
    }).then(({ data }) => {
      context.commit(types.MUTATE_SELECTED_FRUITS, data.allFruits)
    })
  },
  [types.CREATE_FRUIT]: (context, name) => {
    apolloClient.mutate({
      mutation: createFruit,
      variables: {
        name: name
      }
    }).then(({ data }) => {
      context.commit(types.MUTATE_CREATE_FRUIT, data.createFruit)
    })
  }
}
