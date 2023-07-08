import React  from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


const App = () => {

    const users =[
      {
        number:'01875925975',
        password:'1234'
      },
      {
        number:'01875925976',
        password:'12345'
      },
      {
        number:'01875925978',
        password:'123456'
      }
    ]



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login users={users}/>} />
        <Route path="register" element={<Signup users ={users}/>} />
      </Routes>
    </Router>
  );
};

export default App;
