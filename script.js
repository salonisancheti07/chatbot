const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Example bot responses
const responses = {
  "hello": "Hi there! How can I assist you?",
  "what is an algorithm?": "An algorithm is a step-by-step procedure to solve a problem.",
  "what types of algorithms can you visualize?": "I can help visualize sorting, searching, and pathfinding algorithms!",
  "how to use this tool?": "Type the name of an algorithm or ask about a feature, and I’ll guide you.",
  "bye": "Goodbye! Feel free to ask more questions anytime."
};

// Add a message to the chat
function addMessage(content, className) {
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.innerText = content;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the latest message
}

// Handle user input
function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  // Add user's message to the chat
  addMessage(userMessage, "user-message");

  // Generate bot response
  const botResponse = responses[userMessage.toLowerCase()] || "Sorry, I didn’t understand that. Can you rephrase?";
  setTimeout(() => addMessage(botResponse, "bot-message"), 500);

  // Clear input
  userInput.value = "";
}

// Event listeners
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleUserInput();
  }
});

  