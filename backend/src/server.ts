import { Server, Socket } from "socket.io";
import { hash } from "crypto"

interface IUser {
  username: string;
  online: boolean;
  lastOnline?: string;
  clientId: string;
}

const io = new Server(6969, {
  cors: {
    origin: "*",
  },
})

const users: Record<string, IUser> = {}

const commands: Record<string, (socket: Socket, clientIp: string, args: string[]) => void> = {
  'online': (socket) => {
    const onlineUsers = Object.values(users).filter(user => user.online);
    socket.emit("message", `Online users:\n\n${onlineUsers.map(user => `${user.username} - ${user.lastOnline}\n`)}`)
  },
  'username': (socket, clientIp, args) => {
    if(!args) return socket.emit("message", "Wrong command syntax! Correct: /username <new username>")

    const newUsername = args[1];
    if (!newUsername) return socket.emit("message", "Wrong command syntax! Correct: /username <new username>");

    if (Object.values(users).some(user => user.username === newUsername))
      return socket.emit("message", `Username "${newUsername}" is already taken!`);

    users[clientIp].username = newUsername;
    socket.emit("message", `Username changed! Now your username is "${users[clientIp].username}"`)
  },
  'whisper': (socket, clientIp, args) => {
    const receiver = args[1];
    const message = args.slice(2).join(" ");

    const receiverUser = Object.values(users).find(user => user.username === receiver);
    if (!receiverUser || !receiverUser.clientId)
      return socket.emit("message", `User "${receiver}" not found or not online.`);

    const socketReceiver = io.sockets.sockets.get(receiverUser.clientId);
    if (socketReceiver) {
      socketReceiver.emit("message", `(whisper) ${users[clientIp].username}: ${message}`);
      socket.emit("message", `(whisper to ${receiver}) ${message}`);
    } else 
      socket.emit("message", `User "${receiver}" is not connected.`);
  },
  'help': (socket) => {
    socket.emit("message", `Commands you can use:\n\n ${commandsList.map(command => `/${command}`)}`)
  },
  'quit': (socket) => {
    socket.emit("message", "Disconnecting...");
    socket.client._disconnect();
  }
}

const commandsList = Object.keys(commands);

io.on("connection", (socket) => {
  const clientIp = hash("sha256", socket.handshake.address);

  console.log(`Nuovo client connesso: ${socket.id} [${clientIp}]`);
  if(!users[clientIp]) 
    users[clientIp] = { username: socket.id, online: true, lastOnline: new Date().toISOString(), clientId: socket.id }
  users[clientIp].online = true;
  users[clientIp].clientId = socket.id;

  socket.on("message", (msg: string) => {
    console.log(`${users[clientIp].username} [${socket.id}] sent "${msg}"`);

    if(msg.startsWith("/")) {
      const command = msg.split("/")[1];
      const args = command.split(" ");

      if(commandsList.includes(args[0]))
        commands[args[0]](socket, clientIp, args);
      else socket.emit("message", `Command ${msg} does not exists!`)
    }

    socket.broadcast.emit("message", `${users[clientIp].username} >> ${msg}`);
  })

  socket.on("disconnect", () => {

    users[clientIp].online = false;
    users[clientIp].clientId = "";
    users[clientIp].lastOnline = new Date().toISOString();

    console.log("Client disconnesso:", socket.id);
  });
})