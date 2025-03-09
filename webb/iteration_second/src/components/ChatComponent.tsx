"use client"
import { useState, useEffect } from 'react';
import { useSocket } from '../app/hooks/useSocket';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: number;
}

const ChatComponent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  
  // Replace with your WebSocket server URL
  const { socket, isConnected, lastMessage, sendMessage } = useSocket('http://localhost:3001');

  useEffect(() => {
    // Handle incoming messages
    if (lastMessage) {
      setMessages((prev) => [...prev, lastMessage]);
    }
  }, [lastMessage]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputText.trim() && isConnected) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        sender: 'user',
        timestamp: Date.now(),
      };
      
      // Send message to server
      sendMessage('message', newMessage);
      
      // Add to local messages
      setMessages((prev) => [...prev, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-96 max-w-md mx-auto border rounded p-4">
      <div className="flex items-center mb-4">
        <div className={`w-3 h-3 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`p-2 rounded max-w-xs ${
              msg.sender === 'user' ? 'ml-auto bg-blue-100' : 'bg-gray-100'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l"
          disabled={!isConnected}
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded-r"
          disabled={!isConnected}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
