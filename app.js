document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const mercadoPagoLink = button.getAttribute('data-mercado-pago-link');
            window.location.href = mercadoPagoLink; // Redireciona para o link do Mercado Pago
        });
    });

    // Navegação suave para a barra de navegação móvel
    document.querySelectorAll('.mobile-navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionToScrollTo = document.querySelector(this.getAttribute('href'));
            sectionToScrollTo.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
