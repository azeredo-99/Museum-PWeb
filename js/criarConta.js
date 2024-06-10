document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const registrationMessage = document.getElementById('registrationMessage');
    
    // Dummy registration success message
    registrationMessage.textContent = `Account created for ${newUsername} successfully!`;

    // You can add further logic here to handle registration in a real application
});