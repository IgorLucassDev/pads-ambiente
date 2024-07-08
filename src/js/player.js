let atual;

let pad = document.querySelector('#pads').value

function playNote(note){
    const audio = new Audio(`./src/assets/${pad}/${note}.mp3`)
    if (atual){
        atual.pause();
    }
    
    audio.play();
    audio.loop = true;

    atual = audio;
}

function stopSuave() {
    const fadeDuration = 4000; // Duração do fade out em milissegundos
    const steps = 10; // Número de etapas para o fade out
    const volChange = 1 / steps; // Alteração de volume por etapa

    let currentStep = 0;

    function fadeOut() {
        if (currentStep < steps) {
            atual.volume -= volChange;
            currentStep++;
            setTimeout(fadeOut, fadeDuration / steps);
        } else {
            atual.pause();
        }
    }

    fadeOut();
}
