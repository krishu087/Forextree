let ws = null;
let reconnectAttempts = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_DELAY = 3000;

export function setupWebSocket() {
  if (ws) {
    return;
  }

  // Use the correct port for WebSocket connection
  const port = 5000; // Use the server port directly
  const wsUrl = `ws://localhost:${port}/ws`;

  try {
    console.log(`Connecting to WebSocket at: ${wsUrl}`);
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('WebSocket connection established');
      reconnectAttempts = 0;
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('WebSocket message received:', data);
        // Handle incoming messages here
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
      ws = null;
      
      if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        reconnectAttempts++;
        console.log(`Attempting to reconnect (${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})...`);
        setTimeout(setupWebSocket, RECONNECT_DELAY);
      } else {
        console.error('Max reconnection attempts reached');
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  } catch (error) {
    console.error('Error setting up WebSocket:', error);
  }
}

export function sendWebSocketMessage(message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message));
  } else {
    console.error('WebSocket is not connected');
  }
}

export function closeWebSocket() {
  if (ws) {
    ws.close();
    ws = null;
  }
} 