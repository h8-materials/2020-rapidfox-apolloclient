import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";

const GET_USER = gql`
  query GetUser($userId: ID) {
    user(id: $userId) {
      id
      name
      age
    }
  }
`;

export default () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: id },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error ...</p>;

  return (
    <>
      <h2>User Detail</h2>
      <UserCard user={data.user} />
    </>
  );
};
