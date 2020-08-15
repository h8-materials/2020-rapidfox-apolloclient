import React from "react";
import { useHistory } from "react-router-dom";
import { favoritesItems } from "../config/client";

export default ({ user }) => {
  const history = useHistory();
  const goToDetail = () => {
    history.push(`/${user.id}`);
  };

  const addToFav = () => {
    const currentFavorites = favoritesItems();
    favoritesItems([...currentFavorites, user]);
    // const { favorites: currentFavorite } = client.readQuery({
    //   query: GET_FAVORITES,
    // });
    // client.writeQuery({
    //   query: GET_FAVORITES,
    //   data: {
    //     favorites: [...currentFavorite, user],
    //   },
    // });
  };

  return (
    <div
      style={{
        border: "1px solid",
        display: "inline-block",
        padding: 5,
        margin: 5,
      }}
    >
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <button onClick={goToDetail}>Detail</button>{" "}
      <button onClick={() => addToFav()}>Add to favorite</button>
    </div>
  );
};
