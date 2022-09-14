import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Login from "./components/Login";
import UserDashBoard from "./components/UserDashBoard"


function App () {

  return (
    <div className="container">
     
      <BrowserRouter>
        <Routes>
         
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/user" element={<UserDashBoard/>}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;