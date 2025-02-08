document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    const newMessage = { name, message };
    
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    })
    .then(response => response.json())
    .then(data => {
        addMessageToList(data);
        document.getElementById('message-form').reset();
    });
});

function addMessageToList(message) {
    const messageList = document.getElementById('message-list');
    const newMessage = document.createElement('li');
    newMessage.textContent = `${message.name}: ${message.message}`;
    messageList.appendChild(newMessage);
}

function loadMessages() {
    fetch('http://localhost:3000/messages')
        .then(response => response.json())
        .then(data => {
            data.forEach(message => {
                addMessageToList(message);
            });
        });
}

// 在页面加载时调用
document.addEventListener('DOMContentLoaded', loadMessages);