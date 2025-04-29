// public/app.js
const form = document.getElementById('messageForm');
const messagesList = document.getElementById('messagesList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const text = document.getElementById('text').value;

  const res = await fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, text })
  });

  const newMessage = await res.json();
  addMessageToList(newMessage);
  form.reset();
});

async function loadMessages() {
  const res = await fetch('/api/messages');
  const messages = await res.json();
  messagesList.innerHTML = '';
  messages.forEach(addMessageToList);
}

function addMessageToList(message) {
  const li = document.createElement('li');
  li.textContent = `${message.username}: ${message.text}`;
  messagesList.appendChild(li);
}

loadMessages();
