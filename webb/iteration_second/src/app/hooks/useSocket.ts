import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export const useSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<any>(null);

  useEffect(() => {

    const socketInstance = io(url, {
      transports: ['websocket'],
    });


    socketInstance.on('connect', () => {
      setIsConnected(true);
      console.log('WebSocket connected');
    });

    socketInstance.on('disconnect', () => {
      setIsConnected(false);
      console.log('WebSocket disconnected');
    });

    socketInstance.on('message', (message) => {
      setLastMessage(message);
    });


    setSocket(socketInstance);


    return () => {
      socketInstance.disconnect();
    };
  }, [url]);


  const sendMessage = (event: string, data: any) => {
    if (socket) {
      socket.emit(event, data);
    }
  };

  return { socket, isConnected, lastMessage, sendMessage };
};