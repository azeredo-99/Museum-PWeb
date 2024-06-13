window.onload = function() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    const userControls = document.getElementById('user-controls');

    if (token && username) {
        userControls.className = 'col-12 col-lg-auto mb-3 mt-2 mb-lg-0 me-lg-3';
        userControls.innerHTML = `
            <a href="historicoCompras.html" class="username-link text-white h3">${username}</a>
            <button class="btn btn-danger mb-2 ms-2" onclick="logout()">Logout</button>
        `;
    }

    // Add event listener to the reload button
    const reloadButton = document.getElementById('reload-button');
    reloadButton.addEventListener('click', reloadPage);
};

async function incrementVisit() {
    try {
        const response = await fetch('http://localhost:3000/increment-visit');
        const data = await response.json();
        if (data.message !== 'success') {
            console.error('Erro ao incrementar visitas:', data.error);
        } else {
            console.log('Visitas incrementadas com sucesso.');
        }
    } catch (error) {
        console.error('Erro ao incrementar visitas:', error);
    }
}

function reloadPage() {
    incrementVisit().then(() => {
        window.location.reload();
    });
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}