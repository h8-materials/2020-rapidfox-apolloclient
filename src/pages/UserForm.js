import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { GET_USERS } from "./User";

const ADD_USER = gql`
  mutation AddUser($newUser: UserInput) {
    addUser(user: $newUser) {
      id
      name
      age
    }
  }
`;

export default () => {
  const [addUser] = useMutation(ADD_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });
  const history = useHistory();
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  const onChange = (e) => {
    let { name, value } = e.target;
    if (name === "age") {
      value = Number(value);
    }
    const newUserInput = { ...userInput, [name]: value };
    setUserInput(newUserInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      variables: {
        newUser: userInput,
      },
    });
    history.push("/");
  };

  return (
    <div style={{ alignItems: "center", justifyContent: "center" }}>
      <h2>User Create</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name</label>{" "}
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={onChange}
          />
        </div>
        <br />
        <div>
          <label>Age</label>{" "}
          <input
            type="number"
            name="age"
            value={userInput.age}
            onChange={onChange}
          />
        </div>
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
