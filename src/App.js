import "./bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Planet from "./components/Planet";
import People from "./components/People";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="my-5">Luke, Je suis ton pere.</h1>
        <div className="mb-5">
          <Form />
        </div>
        <div>
          <Routes>
            <Route path="/people/:id" element={<People />} />
            <Route path="/planets/:id" element={<Planet />} />
            <Route path="*" element={<h1>THESE ARENT THE DROIDS YOU LOOKIN' FOR!</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
