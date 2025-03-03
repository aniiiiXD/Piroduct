// components/Chat.tsx
"use client"; 
import React from 'react';

interface Message {
  id: string;
  content: string;
  senderName: string;
  isCurrentUser: boolean;
  timestamp?: string;
}

interface ChatProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = React.useState('');
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#EFE9E0]/20">
      {/* Chat messages container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isCurrentUser ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                message.isCurrentUser
                  ? 'bg-[#0F9E99] text-[#EFE9E0]'
                  : 'bg-[#EFE9E0] text-[#0F9E99] border border-[#0F9E99]/20'
              }`}
            >
              <div className="text-sm font-semibold flex justify-between items-center">
                <span>{message.senderName}</span>
                {message.timestamp && (
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                )}
              </div>
              <div className="mt-1">{message.content}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input form */}
      <form 
        onSubmit={handleSubmit}
        className="border-t border-[#0F9E99]/20 p-4 bg-[#EFE9E0]/50 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full px-4 py-2 bg-[#EFE9E0] 
                     text-[#0F9E99] placeholder-[#0F9E99]/50
                     focus:outline-none focus:ring-2 focus:ring-[#0F9E99]/30
                     border border-[#0F9E99]/20"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-[#0F9E99] text-[#EFE9E0] font-medium
                     hover:bg-[#0F9E99]/80 active:transform active:translate-y-0.5
                     transition-all duration-200 ease-in-out
                     disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!newMessage.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;