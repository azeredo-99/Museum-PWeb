 // Add click event for museum cards
 document.addEventListener('DOMContentLoaded', function() {
    const museumCards = document.querySelectorAll('.museum-card');
    museumCards.forEach(card => {
        card.addEventListener('click', redirectToPayment);
    });
});

// Function to redirect to the corresponding payment page
function redirectToPayment(event) {
    const museum = event.currentTarget.getAttribute('data-museum');
    const paymentPage = `${museum}pagamento.html`;
    window.location.href = paymentPage;
}