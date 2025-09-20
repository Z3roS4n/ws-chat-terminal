import { Server } from "socket.io";
import { hash } from "crypto"

interface IUser {
  username: string,
  online: boolean
}

const io = new Server(6969, {
  cors: {
    origin: "*",
  },
})

const users: Record<string, IUser> = {}
const commands: Record<string, () => {}> = {
  'online': () => {
    
  }
}

io.on("connection", (socket) => {
  const clientIp = hash("sha256", socket.handshake.address);

  console.log(`Nuovo client connesso: ${socket.id} [${clientIp}]`);
  if(!users[clientIp]) 
    users[clientIp] = { username: socket.id, online: true }
  users[clientIp].online = true;

  console.table(users)

  socket.on("username", (username: string) => {
    console.log(`${socket.id} now is named "${username}"`)
    users[clientIp].username = username;
  })

  socket.on("message", (msg: string) => {
    console.log(`${users[clientIp].username} [${socket.id}] sent "${msg}"`);
    socket.broadcast.emit("message", `${users[clientIp].username} >> ${msg}`);
  })

  socket.on("disconnect", () => {
    users[clientIp].online = false;
    console.log("Client disconnesso:", socket.id);
  });
})