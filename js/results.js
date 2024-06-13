document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        try {
            const response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}`);
            const data = await response.json();

            if (data.message === 'success') {
                const resultsContainer = document.getElementById('results');
                resultsContainer.innerHTML = '';

                if (data.data.length > 0) {
                    data.data.forEach(museum => {
                        const card = document.createElement('div');
                        card.className = 'col-md-4 mb-4';
                        card.innerHTML = `
                            <div class="card">
                                <a href="${museum.pagina}">
                                    <img src="/${museum.imagem}" class="card-img-top" alt="${museum.nome}">
                                </a>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">${museum.nome}</h5>
                                    <p class="card-text">${museum.descricao}</p>
                                    <a href="${museum.pagina}" class="btn btn-primary">Saiba Mais</a>
                                </div>
                            </div>
                        `;
                        resultsContainer.appendChild(card);
                    });
                } else {
                    resultsContainer.innerHTML = '<p class="text-center">Nenhum resultado encontrado.</p>';
                }
            } else {
                console.error('Erro na busca:', data.error);
            }
        } catch (error) {
            console.error('Erro na busca:', error);
        }
    }
});
