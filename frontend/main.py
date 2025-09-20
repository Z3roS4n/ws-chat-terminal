import asyncio
import socketio

sio = socketio.AsyncClient()

@sio.event
async def connect(): print("Connesso al server!")

@sio.event
async def disconnect(): print("Disconnesso dal server!")

@sio.event
async def message(data): print("Risposta dal server:", data)
    
@sio.event
async def username(data):
  print("Username {username} impostato!".format(username=data))

async def main():
  hostname = input("Connect to (def. http://localhost:6969): ") or "http://localhost:6969"
  await sio.connect(hostname)
  
  username = input("Scegli il tuo username: ")
  
  await sio.emit("username", username)
  await asyncio.sleep(2)
  
  while True:
    msg = input("Messaggio: ")
    if msg.lower() in ("exit", "quit"):
      break
    await sio.emit("message", msg)
    await asyncio.sleep(2)
  
  await sio.disconnect()

# Avvia il loop asyncio
asyncio.run(main())
