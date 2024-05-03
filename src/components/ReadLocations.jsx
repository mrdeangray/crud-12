import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "./context/LocationProvider";
import Location from "./Location";

const ReadLocations = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div>
      <h6>ReadLocations</h6>
      <div>
        {locations.map((location) => {
          return <Location key={location.id} location={location} />;
        })}
        <Link to={`/create`}>
          <button>Create Location</button>
        </Link>
      </div>
    </div>
  );
};

export default ReadLocations;
