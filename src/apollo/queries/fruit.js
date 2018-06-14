import gql from 'graphql-tag'

export const queryAllFruit = gql`
  {
    allFruits {
      id
      name
      color {
        name
      }
    }
  }
`
