import * as http from 'http';
import { WebSocket, WebSocketServer } from 'ws';

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

wsServer.on("connection", (connection: WebSocket) => {
  console.log("New client connected");

  connection.on("message", (message: Buffer) => {
    try {
      const parsedMessage = JSON.parse(message.toString());
      console.log("Received message:", parsedMessage);

      connection.send(JSON.stringify({
        status: "received",
        received: parsedMessage
      }));
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  connection.on("close", () => {
    console.log("Client disconnected");
  });
});
