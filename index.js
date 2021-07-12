 /* This is our SERVER */

const app = require("express")();                          
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {                      // Indicates that I joined, and will provide my own id
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {                   // Call disconnected, will send a message to all other clients
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {                // The user is calling
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {                          // Signal is send that call is accepted
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));    /*If the server is running then it
                                                                                will print the following statement.*/