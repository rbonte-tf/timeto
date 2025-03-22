const clock = document.getElementById('clock');

for (let i = 0; i < 12; i++) {
    const label = document.createElement('div');
    label.className = 'label';

    const angle = (i * 30) - 90;
    const radius = 120;
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;

    label.style.transform = `translate(${x}px, ${y}px)`;
    label.textContent = 'time to go fuck yourself';
    clock.appendChild(label);
}

const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = seconds * 6;
    const minuteDeg = minutes * 6 + seconds * 0.1;
    const hourDeg = ((hours % 12) + minutes / 60) * 30;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();