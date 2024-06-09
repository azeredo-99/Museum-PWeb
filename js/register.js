document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    const messageElement = document.getElementById('registrationMessage');

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, password })
        });
        
        const data = await response.json();

        if (data.message === 'success') {
            messageElement.className = 'text-success';
            messageElement.textContent = 'Usuário registrado com sucesso';
        } else {
            messageElement.className = 'text-danger';
            messageElement.textContent = data.error;
        }
    } catch (error) {
        messageElement.className = 'text-danger';
        messageElement.textContent = 'Erro ao registrar o usuário';
        console.error('Erro:', error);
    }
});
