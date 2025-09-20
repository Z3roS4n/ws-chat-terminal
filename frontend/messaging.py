import asyncio
import socketio

class Messaging:
  def __init__(self, wshost):
    self.ip = wshost
    
  