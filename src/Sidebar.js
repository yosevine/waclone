import React, { useEffect, useState } from 'react'
import './Sidebar.css'
//import { Avatar } from "@material-ui/core";
//import DonutLargeIcon from "@material-ui/icons/Donut";
//import ChatIcon from "@material-ui/icons/Chat";
// import MoreVertIcon from "@material-ui/icons/MoreVertIcon";
import "./Sidebar.css"
import SidebarChat from './SidebarChat.js'
import db from "./firebase";
import { initializeApp } from 'firebase/app';


import { onSnapshot } from "firebase/firestore";


function Sidebar() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);

  /*
  useEffect(() => {
    onSnapshot(db.collection("rooms"), (snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    })
  }, []);
  */
  return (
    <div className="sidebar">
      <div className="sidebar_header">

        <div className="sidebar_headerRight"></div>

      </div>
    
    <div className="sidebar_search">
      <div
      className="sidebar_searchContainer">
        <input placeholder="Search or start new chat" type="text"></input>
      </div>
    </div>

    <div className="sidebar_chats">
        <SidebarChat addNewChat  />
      {rooms.map(room => (
        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
      ))}
    </div>
    </div>
  );
};


export default Sidebar;