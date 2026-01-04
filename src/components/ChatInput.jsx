import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatImput.css'

  
  export function ChatInput ({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState('');

      function saveImputText(event){
        setInputText(event.target.value);
      }

      function sendMessage(){

        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ];

       

          const response = Chatbot.getResponse(inputText);
          setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]
       );

          setInputText('');

      }

      return (
        <div className="chat-input-container">  
          <input 
            className="chat-input"
            placeholder="Send a message to ChatBot" 
            size="30"
            onChange={saveImputText}
            value={inputText}
          />
          <button 
            onClick={sendMessage}
            className="send-button"
            >Send</button>
        </div>
      );
     }