# Frontend 

# Simple AI Chat
A modern, real-time chat application powered by OpenAI's GPT models. Built with a focus on clean UI/UX and efficient state management.

## Architecture
Frontend (React) communicates with a Node.js Express backend.
The backend acts as a secure proxy for OpenAI API requests,
keeping the API key out of the client.

## Key Features
- Secure OpenAI API integration via backend proxy
- Global state management with Zustand
- Optimistic UI updates
- Error handling and loading states
- CI pipeline for build checks

## What I focused on
- Clean separation between UI, state, and API layers
- Simple, readable architecture
- Safe handling of environment variables

## Tech Stack
* React Js
* Zustand
* TypeScript 
* TailwindCSS 
* Dotenv
* React-router-dom
* CI
* Axios

Install
```Bash
npm install
```

Start
```Bash
npm run dev
```

# Backend
A lightweight proxy server designed to secure sensitive credentials.

## Tech Stack
* Express
* Cors
* Dotenv
* OpenAi
* Nodemon

Install
```Bash
npm i
```

Start
```Bash
npx nodemon index.js
```
