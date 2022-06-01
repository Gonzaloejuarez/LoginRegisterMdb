import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import styles from './App.module.scss'

export const App = () =>  {
  return (
    <div className={styles.container}>
    <Routes>
      <Route exact path="/" element={<Register />}/>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/register" element={<Register />}/>
      <Route path="/inicio/:id" element={<Home />}></Route>
      <Route></Route>
    </Routes>
    </div>
  );
}

export default App;
