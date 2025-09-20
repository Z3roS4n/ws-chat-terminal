# WS Anonymous Terminal Chat 💬🔐

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)

A real-time anonymous terminal-based chat application built with Socket.IO, TypeScript, and Python. Connect, chat, and communicate anonymously through your terminal! 🚀

---

## 🇺🇸 English

### 📋 Table of Contents
- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Commands](#-commands)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

### ✨ Features

- 🔐 **Anonymous Chat**: No registration required, just connect and start chatting
- 💬 **Real-time Messaging**: Instant message delivery using WebSocket technology
- 👥 **User Management**: Change usernames and see who's online
- 🤫 **Private Messaging**: Send whispers to specific users
- 🖥️ **Terminal Interface**: Clean command-line interface for both client and server
- 🌐 **Cross-platform**: Works on Windows, macOS, and Linux
- 🔄 **Auto-reconnection**: Handles connection drops gracefully

### 🛠️ Technologies

- **Backend**: Node.js + TypeScript + Socket.IO
- **Frontend**: Python + Socket.IO Client
- **Communication**: WebSocket protocol
- **Package Management**: npm (backend), pip (frontend)

### 📁 Project Structure

```
ws-anon-terminal/
├── 📁 backend/
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   └── 📁 src/
│       └── 📄 server.ts
├── 📁 frontend/
│   ├── 📄 main.py
│   └── 📄 messaging.py
└── 📄 README.md
```

### 🚀 Installation

#### Prerequisites
- Node.js (v16 or higher) 📦
- Python (v3.7 or higher) 🐍
- npm or yarn 📦

#### Backend Setup
```bash
cd backend
npm install
npm run build
```

#### Frontend Setup
```bash
cd frontend
pip install python-socketio[asyncio]
```

### 💻 Usage

#### Starting the Server
```bash
cd backend
npm run server
```
The server will start on `http://localhost:6969` 🚀

#### Connecting as a Client
```bash
cd frontend
python main.py
```

Enter the server URL when prompted (default: `http://localhost:6969`) or press Enter to use the default.

### 🎯 Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/help` | Show all available commands | `/help` |
| `/username <name>` | Change your username | `/username JohnDoe` |
| `/online` | List all online users | `/online` |
| `/whisper <user> <message>` | Send private message | `/whisper Alice Hello there!` |
| `/quit` | Disconnect from server | `/quit` |

### 🔧 Development

#### Backend Development
```bash
cd backend
# Install dependencies
npm install

# Build TypeScript
npm run build

# Start server
npm run server
```

#### Frontend Development
```bash
cd frontend
# Install dependencies
pip install python-socketio[asyncio]

# Run client
python main.py
```

#### Project Scripts
- `npm run build`: Compile TypeScript to JavaScript
- `npm run server`: Start the chat server

### 🤝 Contributing

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/AmazingFeature`) 🌟
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`) 💾
4. Push to the branch (`git push origin feature/AmazingFeature`) 🚀
5. Open a Pull Request 📋

### 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🇮🇹 Italiano

### 📋 Indice
- [Caratteristiche](#-caratteristiche)
- [Tecnologie](#-tecnologie-1)
- [Struttura del Progetto](#-struttura-del-progetto-1)
- [Installazione](#-installazione-1)
- [Utilizzo](#-utilizzo-1)
- [Comandi](#-comandi-1)
- [Sviluppo](#-sviluppo-1)
- [Contribuire](#-contribuire-1)
- [Licenza](#-licenza-1)

### ✨ Caratteristiche

- 🔐 **Chat Anonima**: Nessuna registrazione richiesta, collegati e inizia a chattare
- 💬 **Messaggistica in Tempo Reale**: Consegna istantanea dei messaggi tramite tecnologia WebSocket
- 👥 **Gestione Utenti**: Cambia username e vedi chi è online
- 🤫 **Messaggi Privati**: Invia sussurri a utenti specifici
- 🖥️ **Interfaccia Terminale**: Interfaccia a riga di comando pulita per client e server
- 🌐 **Multipiattaforma**: Funziona su Windows, macOS e Linux
- 🔄 **Riconnessione Automatica**: Gestisce le cadute di connessione con eleganza

### 🛠️ Tecnologie

- **Backend**: Node.js + TypeScript + Socket.IO
- **Frontend**: Python + Socket.IO Client
- **Comunicazione**: Protocollo WebSocket
- **Gestione Pacchetti**: npm (backend), pip (frontend)

### 📁 Struttura del Progetto

```
ws-anon-terminal/
├── 📁 backend/
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   └── 📁 src/
│       └── 📄 server.ts
├── 📁 frontend/
│   ├── 📄 main.py
│   └── 📄 messaging.py
└── 📄 README.md
```

### 🚀 Installazione

#### Prerequisiti
- Node.js (v16 o superiore) 📦
- Python (v3.7 o superiore) 🐍
- npm o yarn 📦

#### Setup Backend
```bash
cd backend
npm install
npm run build
```

#### Setup Frontend
```bash
cd frontend
pip install python-socketio[asyncio]
```

### 💻 Utilizzo

#### Avviare il Server
```bash
cd backend
npm run server
```
Il server si avvierà su `http://localhost:6969` 🚀

#### Connettersi come Client
```bash
cd frontend
python main.py
```

Inserisci l'URL del server quando richiesto (default: `http://localhost:6969`) o premi Invio per usare quello predefinito.

### 🎯 Comandi

| Comando | Descrizione | Esempio |
|---------|-------------|---------|
| `/help` | Mostra tutti i comandi disponibili | `/help` |
| `/username <nome>` | Cambia il tuo username | `/username GiovanniRossi` |
| `/online` | Elenca tutti gli utenti online | `/online` |
| `/whisper <utente> <messaggio>` | Invia messaggio privato | `/whisper Alice Ciao!` |
| `/quit` | Disconnettiti dal server | `/quit` |

### 🔧 Sviluppo

#### Sviluppo Backend
```bash
cd backend
# Installa dipendenze
npm install

# Compila TypeScript
npm run build

# Avvia server
npm run server
```

#### Sviluppo Frontend
```bash
cd frontend
# Installa dipendenze
pip install python-socketio[asyncio]

# Avvia client
python main.py
```

#### Script del Progetto
- `npm run build`: Compila TypeScript in JavaScript
- `npm run server`: Avvia il server di chat

### 🤝 Contribuire

1. Fai il fork del repository 🍴
2. Crea il tuo branch delle funzionalità (`git checkout -b feature/FunzionalitàIncribile`) 🌟
3. Committa le tue modifiche (`git commit -m 'Aggiungi FunzionalitàIncribile'`) 💾
4. Pusha al branch (`git push origin feature/FunzionalitàIncribile`) 🚀
5. Apri una Pull Request 📋

### 📝 Licenza

Questo progetto è rilasciato sotto la Licenza MIT. Vedi il file [LICENSE](LICENSE) per i dettagli.

---

## 🌟 Screenshots

### Server Running
```
$ npm run server
Nuovo client connesso: xyz123 [hash123]
```

### Client Interface
```
$ python main.py
Connect to (def. http://localhost:6969): 
Connected to server, write /help to see commands!
Send -> Hello everyone!
--> JohnDoe >> Hello everyone!
```

---

## 🎉 Enjoy chatting anonymously! 

Made with ❤️ by Z3roS4n

---

*For support or questions, please open an issue on GitHub* 💡
