document.getElementById("toggleBg").addEventListener("click", function() {
    let rouge = Math.floor(Math.random() * 256);
    let vert = Math.floor(Math.random() * 256);
    let bleu = Math.floor(Math.random() * 256);
   document.body.style.backgroundColor = `rgb(${rouge}, ${vert}, ${bleu})`;
});
document.getElementById("pleinEcran").addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        this.textContent = "Quitter Plein Écran";
    } else {
        document.exitFullscreen();
        this.textContent = "Mode Plein Écran";
    }
});