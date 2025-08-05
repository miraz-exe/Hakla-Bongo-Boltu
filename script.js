const switchBtn = document.getElementById('switch');
const bgMusic = document.getElementById('bg-music');

let isOn = false;

switchBtn.addEventListener('click', () => {
    isOn = !isOn;

    if(isOn) {
        switchBtn.src = 'images/switch-on.png';
        bgMusic.play();
    } else {
        switchBtn.src = 'images/switch-off.png';
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
});
