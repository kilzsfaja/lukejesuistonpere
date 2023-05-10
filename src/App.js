import "./bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
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
            <Route path="/" element={
              <>
            <Link to="/image">
            <img src="http://localhost:3000/grogu.gif" alt="obiwan" />
            </Link>
            </>
            } />
            <Route path="*" element={
            <>
            <h1>THESE ARENT THE DROIDS YOU LOOKIN' FOR!</h1>
            <Link to="/image">
              <img src="http://localhost:3000/obiwan.jpg" alt="obiwan" />
            </Link>
            </>
            } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
