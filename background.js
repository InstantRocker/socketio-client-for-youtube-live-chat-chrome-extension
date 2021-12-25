const socket = io("ws://localhost:3000");

socket.on("connnect"), () => {
    socket.send("Hello");
}