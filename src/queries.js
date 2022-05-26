import { gql } from "@apollo/client";

const GET_CHAMPION = gql`
  query {
    champion(filter: { date: "1984-09-05" }) {
      champion {
        titleHolderNumber
        titleHolderOrderNumber
        titleHolder
        wrestlerId

        currentChampion
      }
      errors {
        message
      }
    }
  }
`;

const GET_CURRENT_CHAMPION = gql`
  query {
    champion(filter: { currentChampion: true }) {
      champion {
        titleHolderNumber
        titleHolderOrderNumber
        titleHolder
        wrestlerId

        currentChampion
      }
      errors {
        message
      }
    }
  }
`;

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
        numberOfReigns
        currentChampion
      }
      totalCount
    }
  }
`;

export { GET_CHAMPION, GET_CHAMPIONS, GET_CURRENT_CHAMPION };
