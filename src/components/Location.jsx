import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border: 1px solid blue;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 10px;
  border-radius: 2px;
`;

const Location = ({ location }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
  });

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${location.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <Div>
      <span>{location.name}</span>
      <span>Score: {score}</span>
      <Link to={`/update/${location.id}`}>Update</Link>
      <Link to={`/delete/${location.id}`}>Delete</Link>
    </Div>
  );
};

export default Location;
