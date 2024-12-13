// Функція для генерації випадкового числа від 1 до 6
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById('randomNumber').textContent = randomNumber;
}

// Викликаємо функцію при завантаженні сторінки, щоб показати число одразу
window.onload = generateRandomNumber;
