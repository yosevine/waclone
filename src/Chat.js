import React, { useState, useEffect } from 'react';
import "./Chat.css";
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useStateValue } from "./StateProvider";

function Chat() {

    const [input, setInput] = useState("");
    const [roomName, setRoomName] = useState("");
    const { roomId } = useState(""); 
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
    
        if (roomId) {
            db.collection("rooms")
            .doc(roomId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc =>
                    doc.data()))
            ))
        }

    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed", input);

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
             
        });

        setInput("");
    };

  return (
    <div className="chat">

        <div className="chat_header"> 
            <div className="chat_headerinfo">
                <h3>{roomName}</h3>
                <p>Last seen...</p>
            </div>

        </div>

        <div className="chat_body">
            {messages.map(message => (
                            <p className="chat_message">
                            my first message
                            <span className="chat_name">
                            {message.name}</span>
                            {message.message}
            
                            <span className="chat_timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                            </span>
                        </p>
            ))}
        </div>

        <div className="chat_footer">
        <div className="chat_type">  
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"></ input>
            <button onClick={sendMessage}
            type="submit">Send a message</button>
        </form>
      </div>
        </div>

    </div>
  )
};

export default Chat;