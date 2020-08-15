import { ApolloClient, InMemoryCache, gql, makeVar } from "@apollo/client";

export const favoritesItems = makeVar([
  { id: 100, name: "Rapid fox", age: 100 },
]);

export const GET_FAVORITES = gql`
  query {
    favorites {
      id
      name
      age
    }
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          counter: {
            read: () => {
              return 100;
            },
          },
          favorites: {
            read: () => {
              return favoritesItems();
              // return [{ id: 100, name: "Rapid fox", age: 100 }];
            },
          },
        },
      },
    },
  }),
});

// client.writeQuery({
//   query: GET_FAVORITES,
//   data: {
//     favorites: [{ id: 100, name: "Udin Local", age: 100 }],
//   },
// });

export default client;
