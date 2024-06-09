document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, password })
        });

        const data = await response.json();

        if (data.message === 'success') {
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = data.error;
        }
    } catch (error) {
        errorMessage.textContent = 'Erro ao fazer login. Tente novamente mais tarde.';
        console.error('Erro:', error);
    }
});
