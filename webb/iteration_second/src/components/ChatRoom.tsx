"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, ChevronRight, Plus, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  text: string;
  time: string;
  isIncoming: boolean;
  avatar?: string;
  status?: 'typing' | 'online' | 'offline';
}

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  status?: 'online' | 'offline';
}

const ChatInterface: React.FC = () => {
  const [messageInput, setMessageInput] = useState('');
  
  const contacts: Contact[] = [
    { id: '1', name: 'Ethan Anderson', avatar: '/avatars/ethan.png' },
    { id: '2', name: 'Noah Martinez', avatar: '/avatars/noah.png', status: 'online' },
    { id: '3', name: 'Olivia Mitchell', avatar: '/avatars/olivia-m.png' },
    { id: '4', name: 'Ava Williams', avatar: '/avatars/ava.png' },
    { id: '5', name: 'Liam Johnson', avatar: '/avatars/liam.png' },
    { id: '6', name: 'Benjamin Parker', avatar: '/avatars/benjamin.png' },
    { id: '7', name: 'Olivia Adams', avatar: '/avatars/olivia-a.png' },
    { id: '8', name: 'Sophie Jones', avatar: '/avatars/sophie.png' },
    { id: '9', name: 'Simone Daniels' },
  ];

  const messages: Message[] = [
    {
      id: '1',
      sender: 'Noah Martinez',
      text: 'Hey Amanda, are you around? 😊',
      time: '09:03 AM',
      isIncoming: true,
      avatar: '/avatars/noah.png'
    },
    {
      id: '2',
      sender: 'You',
      text: 'Hey 👋 What\'s up?',
      time: '09:03 AM',
      isIncoming: false
    },
    {
      id: '3',
      sender: 'Noah Martinez',
      text: 'Do you mind sending me the brief for the new campaign? Ethan told me about it and I want to go over it with him.',
      time: '09:08 AM',
      isIncoming: true,
      avatar: '/avatars/noah.png'
    },
    {
      id: '4',
      sender: 'You',
      text: 'Of course. I\'ll go through the specs and get back to you shortly.',
      time: '09:11 AM',
      isIncoming: false,
      status: 'online'
    },
    {
      id: '5',
      sender: 'Noah Martinez',
      text: '',
      time: '',
      isIncoming: true,
      avatar: '/avatars/noah.png',
      status: 'typing'
    }
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">Messages / Team Chat</div>
        </div>
        
        <div className="p-4">
          <button className="flex items-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-md w-full">
            <span className="text-lg">✏️</span>
            <span>New Message</span>
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1">
          <div className="p-4">
            <div className="flex items-center gap-2 py-2">
              <span className="text-xl">#</span>
              <span>Channels</span>
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <span className="text-xl">📝</span>
              <span>Drafts</span>
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <span className="text-xl">@</span>
              <span>Mentions</span>
            </div>
            
            <div className="flex items-center gap-2 py-2">
              <span className="text-xl">📎</span>
              <span>Files & Media</span>
            </div>
          </div>
          
          <div className="p-4 pt-0">
            <div className="text-sm font-medium py-2">Direct Messages</div>
            
            {contacts.map(contact => (
              <div 
                key={contact.id} 
                className={`flex items-center gap-2 py-2 px-2 rounded-md ${contact.id === '2' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
              >
                {contact.avatar ? (
                  <div className="relative h-8 w-8">
                    <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                      {contact.id === '9' ? (
                        <div className="h-full w-full flex items-center justify-center bg-green-400 text-white">S</div>
                      ) : (
                        <div className="h-full w-full bg-gray-300"></div>
                      )}
                    </div>
                    {contact.status === 'online' && (
                      <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full border border-white"></div>
                    )}
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white">
                    {contact.name.charAt(0)}
                  </div>
                )}
                <span>{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-medium">Chat with Noah Martinez</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-1.5 rounded-md bg-gray-100 border border-gray-200 text-sm"
              />
            </div>
            <div className="flex items-center">
              <span>⌘</span>
              <span>/</span>
            </div>
            <div>🔔</div>
            <div className="flex items-center gap-2">
              <span>Filters</span>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="text-center text-xs text-gray-500 mb-4">Wednesday, July 26th</div>
          
          {messages.map((message, index) => (
            <div key={message.id} className={`flex ${message.isIncoming ? 'justify-start' : 'justify-end'} mb-4`}>
              {message.isIncoming && message.avatar && (
                <div className="mr-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                </div>
              )}
              
              <div className={`max-w-md ${message.isIncoming ? 'order-2' : 'order-1'}`}>
                {message.isIncoming && index === 0 && (
                  <div className="text-sm text-gray-500 mb-1">{message.sender}</div>
                )}
                
                {message.status === 'typing' ? (
                  <div className="bg-gray-200 text-gray-800 rounded-2xl py-2 px-4 flex items-center">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                ) : (
                  <div 
                    className={`py-2 px-4 rounded-2xl ${
                      message.isIncoming 
                        ? 'bg-gray-200 text-gray-800' 
                        : 'bg-amber-50 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                )}
                
                {message.time && (
                  <div className="text-xs text-gray-500 mt-1">
                    {message.isIncoming ? `${message.sender} · ${message.time}` : message.time}
                    {message.status === 'online' && (
                      <span className="ml-2 inline-block h-2 w-2 bg-green-500 rounded-full"></span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message Noah Martinez"
                className="w-full py-3 px-4 pr-10 rounded-md border border-gray-200"
              />
              <Plus className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button 
              onClick={handleSendMessage}
              className="ml-2 bg-gray-900 text-white p-2 rounded-md"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;