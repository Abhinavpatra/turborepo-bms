import { WebSocketServer } from "ws";
import { client } from "@repo/db/client"

const server = new WebSocketServer({
  port: 3001
});

server.on("connection", (socket) => {
  
  client.user.create({
    data: {
      username: "Abhinav",
      password: "12345678"
    }
  });
  console.log("user connected");
  socket.send("Connected to the websocket from turbo repo ws-server")

})
