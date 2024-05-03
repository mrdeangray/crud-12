import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "./context/LocationProvider";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const CreateLocation = () => {
  const navigate = useNavigate();
  const { locations, setLocations } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loc = {};
    loc.id = uuid();
    loc.score = 0;
    loc.name = inputValue;
    const newLocations = [...locations, loc];
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud-12-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}> Back</Link>
      <h6>Create</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {locations.map((loc) => {
        return <span key={loc.id}>{loc.name}, </span>;
      })}
      {isUpdating && <Msg>Creating...</Msg>}
    </div>
  );
};

export default CreateLocation;
