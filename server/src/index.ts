const { WebSocketServer } = require("ws");
const http = require("http");

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

wsServer.on("connection", (connection: any) => {
  console.log("New client connected");
})
