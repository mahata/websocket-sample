import * as http from 'http';
import { WebSocket, WebSocketServer } from 'ws';
import { ClientToServerMessage, ServerToClientMessage } from '../../shared/types/types';

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
      const parsedMessage = JSON.parse(message.toString()) as ClientToServerMessage;
      console.log("Received message:", parsedMessage);

      const response: ServerToClientMessage = {
        status: "received",
        received: parsedMessage,
      };

      connection.send(JSON.stringify(response));
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  connection.on("close", () => {
    console.log("Client disconnected");
  });
});
