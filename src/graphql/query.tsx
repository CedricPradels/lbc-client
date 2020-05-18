import { gql } from "apollo-boost";

export const GET_OFFERS = gql`
  query GetOffers(
    $page: Int
    $limit: Int
    $priceMin: Int
    $priceMax: Int
    $sort: String
    $search: String
  ) {
    offers(
      search: $search
      page: $page
      limit: $limit
      priceMin: $priceMin
      priceMax: $priceMax
      sort: $sort
    ) {
      count
      result {
        id
        title
        pictures
        date
        price
      }
    }
  }
`;
