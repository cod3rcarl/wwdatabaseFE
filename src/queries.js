import { gql } from '@apollo/client'

const GET_CHAMPION = gql`
  query getChampion($dateFilter: Date, $currentChampion: Boolean) {
    champion(dateFilter: $dateFilter, currentChampion: $currentChampion) {
      titleHolder
      titleHolderNumber
      show
      dateWon
      dateLost
      daysAsChampion
      currentChampion
    }
  }
`

const GET_CHAMPIONS = gql`
  query getChampions($titleHolder: [String!], $orderBy: ChampionOrderByInput) {
    champions(titleHolder: $titleHolder, orderBy: $orderBy) {
      champions {
        titleHolder
        titleHolderNumber
        show
        dateWon
        dateLost
        daysAsChampion
        currentChampion
      }
      totalCount
    }
  }
`

export { GET_CHAMPION, GET_CHAMPIONS }
