// Handle Booking Slot
function bookSlot(button) {
    if (!button.classList.contains('booked')) {
      button.textContent = 'Slot Booked';
      button.classList.add('booked');
  
      // Increase Notification Count
      let notificationCount = document.getElementById('notification-count');
      notificationCount.textContent = parseInt(notificationCount.textContent) + 1;
      
      // Add Notification
      alert('Booking Successful! A notification has been sent.');
    }
  }
  
  // Send Chat Message
  document.getElementById('send-btn').addEventListener('click', function () {
    let chatInput = document.getElementById('chat-input').value;
    if (chatInput) {
      alert('Message sent to mentor: ' + chatInput);
      document.getElementById('chat-input').value = ''; // Clear input
    }
  });
  
  // Responsive Navbar Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
  