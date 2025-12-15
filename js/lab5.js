// URL API для отримання 6 випадкових фото собак (Варіант 2)
const API_URL = 'https://dog.ceo/api/breeds/image/random/6';

const loadBtn = document.getElementById('loadBtn');
const galleryGrid = document.getElementById('galleryGrid');
const statusMessage = document.getElementById('statusMessage');

async function fetchDogs() {
    loadBtn.disabled = true;
    statusMessage.innerHTML = '<span class="loading-text">Завантаження песиків... 🐕</span>';
    galleryGrid.innerHTML = '';

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Помилка HTTP: ${response.status}`);
        }

        const data = await response.json();

        renderGallery(data.message);
        
        statusMessage.innerHTML = '';

    } catch (error) {
        console.error('Помилка:', error);
        statusMessage.innerHTML = `<span class="error-text">Не вдалося завантажити фото: ${error.message}</span>`;
    } finally {
        loadBtn.disabled = false;
    }
}

function renderGallery(images) {
    images.forEach(imageUrl => {
        const card = document.createElement('div');
        card.className = 'photo-card';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Випадковий пес';
        
        card.appendChild(img);
        galleryGrid.appendChild(card);
    });
}

loadBtn.addEventListener('click', fetchDogs);

fetchDogs();