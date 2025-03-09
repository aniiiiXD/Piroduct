import ChatInterface from '@/components/ChatRoom'
import Sidebar from '@/components/Sidebar'
import Rightbar from '@/components/Rightbar' // Add this import
import React from 'react'

const Page = () => {
  return (
    <div className="flex w-full h-screen">
      {/* <Sidebar /> */}
      <ChatInterface />
      <Rightbar /> {/* Add the Rightbar component here */}
    </div>
  )
}

export default Page