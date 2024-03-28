document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');
  
    buyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        // Aqui você pode inserir a lógica para redirecionar para os links do Mercado Pago
        // Por exemplo, se cada botão tiver um data attribute com a URL
        const mercadoPagoLink = button.getAttribute('data-mercado-pago-link');
        window.location.href = mercadoPagoLink; // Redireciona para o link do Mercado Pago
      });
    });
  });
  