import React from "react";
import { useHistory } from "react-router-dom";

export default ({ user }) => {
  const history = useHistory();
  const goToDetail = () => {
    history.push(`/${user.id}`);
  };

  const addToFav = () => {
    alert("unavailable");
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
