/*
const scrollToTopIcon = document.getElementById('scrollToTopIcon');

// Show the icon when scrolling down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopIcon.style.display = "block"; // Show icon
    } else {
        scrollToTopIcon.style.display = "none"; // Hide icon
    }
};

// Smooth scroll to the top when the icon is clicked
scrollToTopIcon.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
};

/* chat box 
document.getElementById('chat-icon').addEventListener('click', function() {
    document.getElementById('chat-box').classList.toggle('hidden');
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').classList.add('hidden');
});

// Handle sending messages
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const messageText = userInput.value.trim();
    if (messageText) {
        addMessage(messageText, 'user');
        userInput.value = '';
        // Simulate bot response
        setTimeout(() => {
            addMessage("Thank you for your message!", 'bot');
        }, 1000);
    }
});

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}-message`;
    
    const timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    messageElement.innerHTML = `<span>${text}</span> <span class="time">${timeStamp}</span>`;
    
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}
    */
const scrollToTopIcon = document.getElementById('scrollToTopIcon');

// Show the icon when scrolling down 200px
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopIcon.style.display = "block"; // Show icon
    } else {
        scrollToTopIcon.style.display = "none"; // Hide icon
    }
};

// Smooth scroll to the top when the icon is clicked
scrollToTopIcon.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
};
/* Plus button click event */
document.querySelector('.plus-button').addEventListener('click', function() {
    window.location.href = 'why.html';
});

document.querySelector('.Learn-more').addEventListener('click', function() {
    window.location.href = 'why.html';
});
/* Plus button click operation */
function navigateToPlus() {
    window.location.href = 'plus.html'; // Navigate to plus.html
}

// Add click event listeners to both buttons
document.querySelector('.button1').addEventListener('click', navigateToPlus);
document.querySelector('.button2').addEventListener('click', navigateToPlus);

/*Scrolling cards */
const scrollContainer = document.querySelector('.scrolling-items');

  function scrollLeft() {
    scrollContainer.scrollBy({
      top: 0,
      left: -200, // Adjust this value for smooth scrolling (card width)
      behavior: 'smooth',
    });
  }

  function scrollRight() {
    scrollContainer.scrollBy({
      top: 0,
      left: 200, // Adjust this value for smooth scrolling (card width)
      behavior: 'smooth',
    });
  }

