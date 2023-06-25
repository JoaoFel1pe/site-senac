function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value;
  
    if (userMessage !== "") {
      displayMessage("user", userMessage);
      userInput.value = "";
  
      // Envia a mensagem para o servidor Python
      fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      })
        .then(response => response.json())
        .then(data => {
          var chatLog = document.getElementById("chat-log");
          displayMessage("bot", data.message);
        })
        .catch(error => {
          console.error("Ocorreu um erro:", error);
        });
    }
  }
  
  function displayMessage(sender, message) {
    var chatLog = document.getElementById("chat-log");
    var messageElement = document.createElement("div");
    messageElement.className = sender + "-message";
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
  }
  