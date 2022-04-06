const address = env.SERVER_ADDRESS || "";
const socket = io(address);
const session = {
    "room": "experiment-x",
}

socket.on('connect', () => {
    console.log('Connected...');
    socket.emit("join", session);
})

socket.on('disconnect', () => {
    console.log('Disconnected...');
})