"use client"
import React, { useState } from 'react';
import AuthButton from './AuthButton';

interface NavbarProps {
  onRoomCreate: (roomName: string) => void;
  onRoomJoin: (roomId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRoomCreate, onRoomJoin }) => {
  const [showNewModal, setShowNewModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [roomId, setRoomId] = useState('');

  const handleCreateRoom = () => {
    if (roomName.trim()) {
      onRoomCreate(roomName);
      setRoomName('');
      setShowNewModal(false);
    }
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      onRoomJoin(roomId);
      setRoomId('');
      setShowJoinModal(false);
    }
  };

  return (
    <>
      <div className="fixed top-5 left-0 right-0 flex justify-center z-50">
        <div className="bg-[#EFE9E0]/90 backdrop-blur-md px-8 py-4 rounded-full 
                        flex justify-between items-center gap-8 shadow-lg 
                        w-[90%] max-w-[600px] border border-[#0F9E99]/20">
          <div className="flex items-center">
            <div className="flex items-center">

              <span className="text-xl font-semibold text-[#0F9E99]">
                <AuthButton />
              </span>

              <span className="text-xl font-semibold text-[#0F9E99]">
                Chat
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowNewModal(true)}
              className="px-4 py-2 rounded-full bg-[#0F9E99] text-[#EFE9E0] font-medium
                       hover:bg-[#0F9E99]/80 active:transform active:translate-y-0.5
                       transition-all duration-200 ease-in-out">
              New
            </button>
            <button 
              onClick={() => setShowJoinModal(true)}
              className="px-4 py-2 rounded-full bg-[#0F9E99] text-[#EFE9E0] font-medium
                       hover:bg-[#0F9E99]/80 active:transform active:translate-y-0.5
                       transition-all duration-200 ease-in-out">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* New Room Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#EFE9E0] rounded-2xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold text-[#0F9E99] mb-4">Create New Room</h2>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Enter room name"
              className="w-full px-4 py-2 rounded-full bg-white border border-[#0F9E99]/20
                       text-[#0F9E99] placeholder-[#0F9E99]/50 mb-4
                       focus:outline-none focus:ring-2 focus:ring-[#0F9E99]/30"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowNewModal(false)}
                className="px-4 py-2 rounded-full border border-[#0F9E99]/20 text-[#0F9E99]
                         hover:bg-[#0F9E99]/10 transition-all duration-200">
                Cancel
              </button>
              <button
                onClick={handleCreateRoom}
                className="px-4 py-2 rounded-full bg-[#0F9E99] text-[#EFE9E0]
                         hover:bg-[#0F9E99]/80 transition-all duration-200">
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Join Room Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#EFE9E0] rounded-2xl p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-semibold text-[#0F9E99] mb-4">Join Room</h2>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter room ID"
              className="w-full px-4 py-2 rounded-full bg-white border border-[#0F9E99]/20
                       text-[#0F9E99] placeholder-[#0F9E99]/50 mb-4
                       focus:outline-none focus:ring-2 focus:ring-[#0F9E99]/30"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowJoinModal(false)}
                className="px-4 py-2 rounded-full border border-[#0F9E99]/20 text-[#0F9E99]
                         hover:bg-[#0F9E99]/10 transition-all duration-200">
                Cancel
              </button>
              <button
                onClick={handleJoinRoom}
                className="px-4 py-2 rounded-full bg-[#0F9E99] text-[#EFE9E0]
                         hover:bg-[#0F9E99]/80 transition-all duration-200">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;