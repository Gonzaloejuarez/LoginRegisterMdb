import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

export const App = () =>  {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Login />}/>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/register" element={<Register />}/>
      <Route path="/inicio" element={<Home />}></Route>
      <Route></Route>
    </Routes>
    </div>
  );
}

export default App;
