import React from "react";
import { useQuery, gql } from "@apollo/client";
import UserCard from "../components/UserCard";

export const GET_USERS = gql`
  query {
    users {
      id
      name
      age
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <>
      <h2>User List</h2>
      {data.users.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </>
  );
};
