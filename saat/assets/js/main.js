const hourHand = document.querySelector('.hour');
const minutesHand = document.querySelector('.min');
const secondsHand = document.querySelector('.second');

const setTime = () => {
    const now = new Date();

    const seconds = (now / 1000) % 60;
    secondsDegrees = ((seconds / 60) * 360 + 90);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = (now / 60000) % 60;
    secondsDegrees = ((minutes / 60) * 360 + 90);
    minutesHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const hours = (now / 3600000) % 12;
    secondsDegrees = ((hours / 12) * 360 + 90 + 120);
    hourHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setTime, 0.001);