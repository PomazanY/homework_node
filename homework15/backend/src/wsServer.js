import { Server } from "socket.io";

import { createServer } from "node:http";


const startWebsocketServer = () => {
    const httpServer = createServer()

    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*"
        },
    });

    wsServer.on("connection", (socket) => {
        console.log("New User connected");

        socket.emit("welcome", "Welcome to the chat!");

        socket.on("message", (msg) => {
            console.log(`Message received: ${msg}`);
            socket.emit("reply", "Message received. Always happy to hear from you!");
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });


    httpServer.listen(process.env.SOCKET_PORT, () => console.log(`Websocket running on ${process.env.SOCKET_PORT}`))

}

export default startWebsocketServer;