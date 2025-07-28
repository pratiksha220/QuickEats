// chatbot.js

// Function to create a new message in the chat
function createMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Function to handle user input and provide a response
function handleUserInput() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    createMessage(userInput, 'user'); // Display user's message
    document.getElementById('user-input').value = ''; // Clear input field

    setTimeout(() => {
        getBotResponse(userInput.toLowerCase());
    }, 1000); // Simulate delay in response
}

// Function to generate bot's response based on the user's input
function getBotResponse(userInput) {
    let botResponse = '';

    // Simple rules for common food delivery related questions
    if (userInput.includes('order status') || userInput.includes('status of my order')) {
        botResponse = 'Your order is being prepared and will be dispatched shortly.';
    } else if (userInput.includes('food arrive') || userInput.includes('when will my food arrive')) {
        botResponse = 'Your food will arrive in approximately 30 minutes.';
    } else if (userInput.includes('payment methods') || userInput.includes('available payment methods')) {
        botResponse = 'We accept credit cards, debit cards, net banking, UPI payments and also cash on delivery.';
    } else if (userInput.includes('track my delivery') || userInput.includes('track order')) {
        botResponse = 'Sorry the trancking service is not yet available';
    } else if (userInput.includes('delivery time') || userInput.includes('how long does delivery take')) {
        botResponse = 'Our typical delivery time is between 25-30 minutes, depending on your location.';
    } else if (userInput.includes('cancel order') || userInput.includes('cancel my order')) {
        botResponse = 'To cancel your order, please all customer support. Customer support number - 1234567890';
    } else {
        botResponse = 'I’m sorry, I didn’t quite understand that. Can you please ask something else or contact the customer support number - 1234567890?';
    }

    createMessage(botResponse, 'bot'); // Display bot's response
}

// Function to display suggested questions
function displaySuggestedQuestions() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    const suggestedQuestions = [
        "What is the status of my order?",
        "When will my food arrive?",
        "What payment methods are available?",
        "What is the delivery time?",
        "How can I cancel my order?"
    ];

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Create buttons for each suggested question
    suggestedQuestions.forEach(question => {
        const button = document.createElement('button');
        button.classList.add('suggestion-button');
        button.textContent = question;
        button.onclick = function () {
            document.getElementById('user-input').value = question;
            handleUserInput(); // Simulate user sending the question
        };
        suggestionsContainer.appendChild(button);
    });
}

// Event listener for the send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Event listener for pressing Enter key
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

// Initial greeting message and display suggestions
createMessage('Hello! How can I assist you with your food delivery today?', 'bot');
displaySuggestedQuestions();
