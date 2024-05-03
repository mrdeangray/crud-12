import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { LocationContext } from "./context/LocationProvider";

import { Link, useNavigate, useParams } from "react-router-dom";

const Msg = styled.p`
  color: blue;
  font-size: 30px;
`;

const DeleteLocation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locations, setLocations } = useContext(LocationContext);

  const [isUpdating, setIsUpdating] = useState(false);
  const [currLocation, setCurrLocation] = useState({});

  useEffect(() => {
    const loc = locations.find((loc) => loc.id === id);
    setCurrLocation(loc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    const newLocations = locations.filter((loc) => loc.id !== id);
    setLocations(newLocations);
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
      <h6>Delete: {currLocation.name}</h6>
      <button onClick={handleDelete}>Delete: {currLocation.name}</button>
      <div>
        {locations.map((loc) => {
          return <span key={loc.id}>{loc.name}, </span>;
        })}
        {isUpdating && <Msg>Deleting...</Msg>}
      </div>
    </div>
  );
};

export default DeleteLocation;
