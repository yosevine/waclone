import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import './Sidebar.css';
import Chat from "./Chat";
import "./Chat.css";
import Login from "./Login"
import { useStateValue } from "./StateProvider";
//import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import { Routes ,Route } from 'react-router-dom';



function App() {

  const [{ user }, dispatch] = useStateValue();
    
    return (
    <div className="app">
    {!user ? (
      <Login/>
    ) : (
      <div className="app_body">
      <h1>Hello let's cloneeeee whatsapp</h1>
            <Sidebar/>
            <Chat/>
      </div>
    )}
    </div>
  )
};


export default App;
