
import Login from "./components/Login/Login";
import Navbarone from "./components/Navbar/Navbarone";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CRUD from "./components/CRUD/CRUD";

function App() {
  return (
    <>
    <Router>
      <Navbarone />
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/crud" element={<CRUD/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </Router>
      {/* <Login /> */}
    </>
  );
}

export default App;
