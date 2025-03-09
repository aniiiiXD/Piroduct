// app/chat/[roomId]/page.tsx
'use client';

import React from 'react';
import Chat from '@/components/Chat';
import Navbar from '@/components/Navbar';

const ChatPage = () => {
    const [messages, setMessages] = React.useState([]);

    const handleSendMessage = (content: string) => {
        const newMessage = {
            id: Date.now().toString(),
            content,
            senderName: 'You',
            isCurrentUser: true,
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <div>
            <div><Navbar /></div>
            
            <div className="h-screen pt-20 bg-gradient-to-b from-[#EFE9E0]/50 to-[#EFE9E0]">
                <Chat messages={messages} onSendMessage={handleSendMessage} />
            </div>
        </div>

    );
};

export default ChatPage;