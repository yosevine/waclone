import React from 'react';
import "./SidebarChat.css";
import db from "./firebase";

function SidebarChat({ id, name, addNewChat }) {
  
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        } 
    }
  
    return !addNewChat ? (
    <div className='sidebarChat'>

        <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>Last seen</p>
        </div>
    </div>
  ) : (
    <div onClick={createChat}
    className="sidebarChat">
        <h2>Add new chat</h2>
    </div>
    );
};
export default SidebarChat