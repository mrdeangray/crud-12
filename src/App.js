import { Route, Routes } from "react-router-dom";
import "./App.css";
import LocationProvider from "./components/context/LocationProvider";
import ReadLocations from "./components/ReadLocations";
import CreateLocation from "./components/CreateLocation";
import UpdateLocation from "./components/UpdateLocation";
import DeleteLocation from "./components/DeleteLocation";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Routes>
          <Route exact path="/" element={<ReadLocations />} />
          <Route exact path="/create" element={<CreateLocation />} />
          <Route exact path="/update/:id" element={<UpdateLocation />} />
          <Route exact path="/delete/:id" element={<DeleteLocation />} />
        </Routes>
      </LocationProvider>
    </div>
  );
}

export default App;
