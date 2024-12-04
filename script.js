// Countdown Timer
const birthday = new Date("December 5, 2024 00:00:00").getTime(); // Set your brother's birthday date
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    if (timeLeft < 0) {
        countdownElement.innerHTML = "🎉 Happy Birthday! 🎂";
        clearInterval(interval);
        startConfetti(); // Start fireworks effect when the birthday is reached
        playHappyBirthdaySong();  // Play birthday song
        triggerAllAnimations();  // Trigger all 10 animations
        showPhotos(); // Display photos at the end
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);

// Fireworks Effect
function startConfetti() {
    const fireworksContainer = document.getElementById("fireworks");
    setInterval(() => {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.left = `${Math.random() * 100}vw`;
        fireworksContainer.appendChild(firework);
    }, 200);
}

// Happy Birthday Song
function playHappyBirthdaySong() {
    const music = document.getElementById("birthday-music");
    music.play();
}

// Show Photos Sequentially
function showPhotos() {
    const photos = document.querySelectorAll(".gallery img");
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.remove("hidden");
        }, 1000 * (index + 1));
    });
}

// Trigger All Animations After Countdown
function triggerAllAnimations() {
    const birthdayCard = document.getElementById("birthday-card");

    setTimeout(() => birthdayCard.classList.add("animate-bounce"), 1000);
    setTimeout(() => birthdayCard.classList.add("animate-shake"), 2000);
    setTimeout(() => birthdayCard.classList.add("animate-rotate"), 3000);
    setTimeout(() => birthdayCard.classList.add("animate-fade-in"), 4000);
    setTimeout(() => birthdayCard.classList.add("animate-flip"), 5000);
    setTimeout(() => birthdayCard.classList.add("animate-pulse"), 6000);
    setTimeout(() => birthdayCard.classList.add("animate-scale"), 7000);
    setTimeout(() => birthdayCard.classList.add("animate-blink"), 8000);
    setTimeout(() => birthdayCard.classList.add("animate-slide"), 9000);
    setTimeout(() => birthdayCard.classList.add("animate-zoom"), 10000);
}

