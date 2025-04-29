// server.js
const express = require('express');
const app = express();
const PORT = 3000;

let messages = []; // In-memory storage

app.use(express.json()); // Parse JSON bodies
app.use(express.static('public')); // Serve frontend files

// Endpoint to get all messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Endpoint to post a new message
app.post('/api/messages', (req, res) => {
  const { username, text } = req.body;
  const message = { id: Date.now(), username, text };
  messages.push(message);
  res.status(201).json(message);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
