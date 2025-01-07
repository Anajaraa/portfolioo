// Carrossel Soft Skills
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();
;

// Feedback Chart
document.getElementById('feedbackForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const rating = document.getElementById('rating').value;
    updateChart(rating);
});
function updateChart(rating) {
    const ctx = document.getElementById('feedbackChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: { labels: ['1', '5'], datasets: [{ data: [0, 0] }] },
        options: { scales: { y: { beginAtZero: true } } }
    });
    chart.data.datasets[0].data[rating - 1]++;
    chart.update();
}


// Código JavaScript para funcionalidades adicionais, se necessário.
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfólio carregado com sucesso!");
});
