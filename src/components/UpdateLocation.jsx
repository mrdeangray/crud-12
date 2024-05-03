import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "./context/LocationProvider";

import { Link, useNavigate, useParams } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
  border-radius: 5px;
`;

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const UpdateLocation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locations, setLocations } = useContext(LocationContext);
  const [inputValue, setInputValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [currLocation, setCurrLocation] = useState({});

  useEffect(() => {
    const loc = locations.find((loc) => loc.id === id);
    setInputValue(loc.name);
    setCurrLocation(loc);
  }, [id, locations]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLocations = locations.map((loc) => {
      if (loc.id === id) {
        loc.name = inputValue;
      }
      return loc;
    });
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
      <h6>Update: {currLocation.name}</h6>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleChange} autoFocus />
      </form>
      {locations.map((loc) => {
        return <span key={loc.id}>{loc.name}, </span>;
      })}
      {isUpdating && <Msg>Updating...</Msg>}
    </div>
  );
};

export default UpdateLocation;
