const twitch = window.Twitch.ext;
// Ваш унікальний згенерований ID
const MY_ID = "str-7x2w-9qmp-vdo2026"; 

let isActive = false;
const btn = document.getElementById('toggle-btn');
const container = document.getElementById('video-container');
const frame = document.getElementById('overlay-frame');

btn.onclick = () => {
    isActive = !isActive;
    // Знаходимо основний плеєр Twitch
    const mainPlayer = window.parent.document.querySelector('video');

    if (isActive) {
        // Підключаємося до сервера-ретранслятора
        frame.src = https://vdo.ninja/?view=${MY_ID}&autoplay=1&transparent=1&cleanoutput=1&hidemenu=1;
        container.style.display = "block";
        btn.innerText = "Назад до трансляції";
        
        // Вимикаємо звук і ховаємо основний стрім
        if (mainPlayer) {
            mainPlayer.muted = true;
            mainPlayer.style.opacity = "0"; 
        }
    } else {
        // Повертаємо все як було
        container.style.display = "none";
        frame.src = "";
        btn.innerText = "Увімкнути Extended View";
        
        if (mainPlayer) {
            mainPlayer.muted = false;
            mainPlayer.style.opacity = "1";
        }
    }
};