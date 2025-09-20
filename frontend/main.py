import asyncio
import socketio

sio = socketio.AsyncClient()

@sio.event
async def connect(): print("Connected to server, write /help to see commands!")

@sio.event
async def disconnect(): print("Disconnesso dal server!")

@sio.event
async def message(data): print("-->", data)

async def main():
  hostname = input("Connect to (def. http://localhost:6969): ") or "http://localhost:6969"
  await sio.connect(hostname)
  
  while True:
    msg = input("Send -> ")
    if msg.lower() in ("/exit", "/quit"):
      break
    await sio.emit("message", msg)
    await asyncio.sleep(2)
  
  await sio.disconnect()

# Avvia il loop asyncio
asyncio.run(main())
