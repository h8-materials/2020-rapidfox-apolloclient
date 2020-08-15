import React from "react";
import UserCard from "../components/UserCard";
import { GET_FAVORITES } from "../config/client";
import { useQuery } from "@apollo/client";

// const GET_COUNTER = gql`
//   query {
//     counter @client
//   }
// `;

export default () => {
  const { data: favorites, loading } = useQuery(GET_FAVORITES);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Favorite Page</h2>
      {favorites.favorites.map((favorite) => (
        <UserCard key={favorite.id} user={favorite} />
      ))}
    </>
  );
};
