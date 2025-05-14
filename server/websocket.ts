import { Server } from 'socket.io';

export const setupWebSocket = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    // Add your WebSocket event handlers here
    // Example:
    // socket.on('message', (data) => {
    //   console.log('Message received:', data);
    //   io.emit('message', data);
    // });
  });
}; 