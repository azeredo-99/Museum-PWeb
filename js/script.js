document.querySelector('form[role="search"]').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = this.querySelector('input[type="search"]').value;
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
});
