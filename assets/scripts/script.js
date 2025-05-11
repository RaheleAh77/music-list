let playLogo = document.querySelectorAll("i");
let audioElem = document.querySelectorAll("audio");

playLogo.forEach(i => {
    i.addEventListener("click" , function (event) {
        const filter = event.target.dataset.name;
        audioElem.forEach(audio => {
            if (audio.dataset.name === filter) {
                audio.currentTime = 0;
                audio.play();
            } else {
                audio.pause();
            }
        });
    });
});