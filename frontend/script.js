document.getElementById("chat-form").addEventListener("submit", async (e) => { 
    e.preventDefault(); 
 
    const userMessage = document.getElementById("user-input").value; 
    const chatBox = document.getElementById("chat-box");  
    chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`; 
 
    const response = await fetch('http://localhost:8000/chat', { 
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json', 
        }, 
        body: JSON.stringify({ 
            message: userMessage, 
            conversation_id: "001a"

        }) 
    }); 

function showLoading() {
  document.getElementById('loading').style.display = 'block';
}
function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}
function showError() {
  document.getElementById('error').style.display = 'block';
}
function hideError() {
  document.getElementById('error').style.display = 'none';
}

const data = await response.json(); 
 

    chatBox.innerHTML += `<div class="bot-message">${data.response}</div>`; 
    document.getElementById("user-input").value = ""; 
 

    chatBox.scrollTop = chatBox.scrollHeight;});
